const UserProgress = require("../models/UserProgress");
const Reward = require("../models/Reward");
const Module = require("../models/Module");
const ProcessedModules = require("../models/ProcessedModules");

const generateCertificateId = () => {
    // Implement your logic to generate certificate IDs
    // For simplicity, let's generate IDs sequentially
    return `c${Math.floor(Math.random() * 1000) + 1}`;
};

const getProgressByUserID = async (req, res) => {
    console.log("Somebody called me!!!!")
    const { userId } = req.params;
    try {
        const userProgresses = await UserProgress.find({ user_id: userId });
        console.log("User progress:", userProgresses);

        // Fetch processed module IDs for the user
        const processedModules = await ProcessedModules.findOne({ user_id: userId });
        const processedModuleIds = processedModules ? processedModules.processed_modules_id : [];

        // Iterate through user progress documents
        for (const progress of userProgresses) {
            const module = await Module.findById(progress.module_id);
            console.log("Module found from Module collection:", module);

            // Check if all videos and quizzes in the module are completed
            const allCompleted = module.videos_id.concat(module.quizzes_id).length === progress.progress.length;
            console.log("Modules completed:", allCompleted);

            if (allCompleted && !processedModuleIds.includes(progress.module_id)) {
                // Generate certificate ID
                const certificateId = generateCertificateId();
                console.log("Certificate generated:", certificateId);

                const moduleName = module.title;
                console.log("Module Name:", moduleName);

                // Add reward document
                await Reward.create({
                    user_id: progress.user_id,
                    module_id: progress.module_id,
                    module_name: moduleName,
                    course_id: progress.course_id,
                    certificate: certificateId
                });

                // Update the processed_modules_id array for the user
                processedModuleIds.push(progress.module_id);
            }
        }

        // Update or create processedModules document for the user
        if (processedModules) {
            processedModules.processed_modules_id = processedModuleIds;
            await processedModules.save();
        } else {
            await ProcessedModules.create({
                user_id: userId,
                processed_modules_id: processedModuleIds
            });
        }

        // Fetch rewards for the user
        const rewards = await Reward.find({ user_id: userId });

        // Prepare response data
        const formattedRewards = rewards.map(reward => ({
            module_name: reward.module_name,
            certificate: reward.certificate
        }));

        // Send the response with formatted rewards
        res.json({ reward: formattedRewards });
    } catch (error) {
        console.error('Error generating rewards:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    getProgressByUserID,
};
