const Course = require("../models/Course"); 
const crypto = require('crypto');

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json({ message: "Users retrieved", success: true, courses: courses});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.json({ success: true, course: course });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const addCourse = async (req, res) => {
    const { name, email, phone_number, designation, roles, password, birth_date, rewards_earned } = req.body;

    try {
        if (!name || !email) {
            return res.status(400).json({ error: "Name and Email are required" });
        }

        const hash = crypto.createHash("sha256");
        hash.update(email);
        const hashedEmail = hash.digest("hex");
        const shortEmail = hashedEmail.substring(0, 8)

        const newUser = await Course.create({
            _id: shortEmail,
            name,
            email,
            phone_number,
            designation,
            roles,
            password,
            birth_date,
            rewards_earned
        });

        res.status(201).json({ message: "Course added", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone_number, designation, roles, password, birth_date, rewards_earned } = req.body;

    try {
        const course = await Course.findById(id);
        if (!course) {
            res.status(404).json({ error: "Course not found" });
        }

        course.name = name;
        course.email = email;
        course.phone_number = phone_number;
        course.designation = designation;
        course.roles = roles;
        course.password = password;
        course.birth_date = birth_date;
        course.rewards_earned = rewards_earned;

        await course.save();

        res.json({ message: "Course updated", success: true })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteCourseById = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteProcess = await Course.deleteOne({ _id: id });
        if (!deleteProcess) {
            res.status(404).json({ error: "Course not found" });
        }

        res.json({ message: "Course deleted", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourse,
    deleteCourseById
};
