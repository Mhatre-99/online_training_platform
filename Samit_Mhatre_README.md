# CSCI 5709 Grp-05 (Project Proposal Web Application)

* *Date Created*: 02 April 2024
* *Last Modification Date*: 02 April 2024
* *Assignment URL*: https://falafellas.netlify.app/
* *Git URL*: https://git.cs.dal.ca/panchamia/csci-5709-grp-05
* *Branch URL*: https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/tree/samit-mhatre?ref_type=heads

## Authors

- [Samit Mhatre](mailto:sm904139@dal.ca)


## Built With

- [Node JS](https://nodejs.org/en) - Javascript Runtime used for development
- [Npm](https://docs.npmjs.com//) - Dependency Management Tool
- [VS Code](https://code.visualstudio.com/) - Development code management tool
- [React](https://legacy.reactjs.org/docs/getting-started.html/) - Frontend Development Framework
- [Create React App](https://create-react-app.dev/docs/getting-started/) - Tool used to create react application
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Utility based CSS framework which makes writing CSS effortless for developers
- [Axios](https://github.com/axios/axios) - Promise based HTTP client which helps developers make API calls easily.

## Deployment

- Deployment of the Falafellas App is done using GitHub, Netlify and Render. 

- Github Repo Link (Private-Repository): https://github.com/Mhatre-99/CSCI5709-Group5/

- Netlify Deployed Link: https://falafellas.netlify.app/

- On Render backend deploy link: https://csci5709-group5.onrender.com/

- My feature can be found at Link: https://falafellas.netlify.app/module/660d8987dced2306614b3581

- The link to my features backend API: https://csci5709-group5.onrender.com/module/get/660d8987dced2306614b3581 

## Instructions

- The feature that I have worked on is *Modules*.
- A module is a part of a course which can be accessed through that course.

- Task achieved:
  - Display Videos and Quizzes
    - It contains video lectures and quizzes. It allows users to access (displays) these videos and quizzes.
  - Play Videos
    - The video can be played by clicking on videos.
    - *To attempt the quizzes there is another feature 'Quiz Attempt' that is yet to be developed.*
  - Track the completion of module.
    - It also tracks the progress of the completion of the module.
    - The progress of the module is tracked by tracking the progress(status) of each content within that module.
    - The status of video changes to completed if the video is played till the end.
    - The completed content (video/quiz) is updated in the user progress schema.
  
- The Files created as part of these features are:
  - *Backend*
    - *Controller* 
      - [ModuleController.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/backend/app/controllers/ModuleController.js?ref_type=heads)
      - [VideoController.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/backend/app/controllers/VideoController.js?ref_type=heads)
      - [QuizController.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/backend/app/controllers/QuizController.js?ref_type=heads)
    - *Models*
      - [Module.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/backend/app/models/Module.js?ref_type=heads)
      - [Video.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/backend/app/models/Video.js?ref_type=heads)
      - [UserProgress.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/backend/app/models/UserProgress.js?ref_type=heads)
      - [Quiz.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/backend/app/models/Quiz.js?ref_type=heads)
    - *Routes*
      - [ModuleRoutes.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/backend/app/routes/ModuleRoutes.js?ref_type=heads)
      - [UserProgressRoutes.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/backend/app/routes/UserProgressRoutes.js?ref_type=heads)
  - *Frontend*
    - Everything within the [Module directory](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/tree/samit-mhatre/frontend/falafellas/src/Components/Module?ref_type=heads) which is within the [Components](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/tree/samit-mhatre/frontend/falafellas/src/Components?ref_type=heads) directory was created for this feature.

- If the course feature is not developed, to access my feature you can directly go to this [link](https://falafellas.netlify.app/module/660d8987dced2306614b3581) as modules are meant to be accessed through the courses.
- The link takes you directly to one of the modules and you can see the sample videos.
- For the videos we have used a Dalhousie Youtube video for showing the functionality.
- Quiz may or may not be present depending on the module you are trying to access.
- In case you click on a quiz and it is giving 404, it is because attempting quiz is part of another feature Quiz Attempt.
- This feature may not be developed yet hence it is showing 404 not found.
- *The backend which is deployed on Render shuts down when there are no requests. It takes upto 50 secs to spin up and you may not be able to see the contents during that time.*

## Code Explanation

- ModuleController.js is a controller that handles all module related API calls
- VideoController.js and QuizController.js handles all the video and quiz related API calls respectively.
- In the frontend [ModuleTitle.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/frontend/falafellas/src/Components/Module/js/ModuleTitle.js?ref_type=heads) is the main parent component of the module feature.
- [Videos.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/frontend/falafellas/src/Components/Module/js/Videos.js?ref_type=heads) and [Video.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/frontend/falafellas/src/Components/Module/js/Video.js?ref_type=heads) are used to display the videos and quizzes of the module.
- [VideoPlayer.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/frontend/falafellas/src/Components/Module/js/VideoPlayer/VideoPlayer.js?ref_type=heads) is where the video is played. 
- The video link is hardcoded as we are yet to figure out how to store videos.  
- [SidePanel.js](https://git.cs.dal.ca/panchamia/csci-5709-grp-05/-/blob/samit-mhatre/frontend/falafellas/src/Components/Module/js/VideoPlayer/SidePanel.js?ref_type=heads) displays all the contents in the module in the panel next to the Video player.



## Sources used

### module.css

.course-description{
    color: #000000;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: calc(100% + 0.5vw);
    font-weight: 400;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-top: 6rem;
    margin-left: 5%;
    margin-right: 5%;

    min-width: 0;
    display: -webkit-box;
    position: absolute;
    overflow: hidden;
    text-overflow: ellipsis;
}

- The code in [Different ways to truncate text with CSS | LogRocket Blog](https://blog.logrocket.com/ways-truncate-text-css/) was used as a reference to truncate the course description text. After studying and understanding the css properties I used it in my code wherever I needed to truncate text to avoid overflowing text and to achieve a clean and responsive page.




## Acknowledgments

[1]	“Node.Js — download,” Nodejs.org. [Online]. Available: https://nodejs.org/en/download. [Accessed: 02-April-2024].

[2]	“React,” React.dev. [Online]. Available: https://react.dev/. [Accessed: 02-April-2024].

[3]	“Netlify app,” Netlify.com. [Online]. Available: https://app.netlify.com/. [Accessed: 02-April-2024].

[4]	“Getting started,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/docs/getting-started. [Accessed: 02-April-2024].

[5]	“Create react app,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/. [Accessed: 02-April-2024].

[6] "React Bootstarp" React-bootstrap.app. [Online]. Available: https://react-bootstrap.netlify.app/. [Accessed: 02-April-2024].

[7]	“Adding images, fonts, and files,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/docs/        adding-images-fonts-and-files/. [Accessed: 02-April-2024].

[8] "Youtube (Community) - Figma," Figma.com. [Online]. Available: https://www.figma.com/file/vbmG6jT4C3nRXyxPHVNIya/YouTube-(Community)?type=design&node-id=0-1&mode=design&t=FfsZeCzbvq3nT9f8-0. [Accessed: 02-April-2024].

[9] Dalhousie University, "2023 Community Impact Report | Dalhousie University," YouTube, published March 21, 2024. [Video file]. Available: https://www.youtube.com/watch?v=hZEc4jD0q2c. [Accessed: April 02, 2024].

[10] “Cloud Application Hosting for Developers,” Render.com. [Online]. Available: https://render.com/. [Accessed: 02-April-2024].