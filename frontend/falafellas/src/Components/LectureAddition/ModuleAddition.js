import { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import AccordionElement from './AccordionElement';
import CourseContentElement from './CourseContentElement';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function ModuleAddition() {

  const courseUrl = "http://localhost:5050/courses/add"
  const moduleUrl = "http://localhost:5050/module/add-module"

  const [isUploading, setIsUploading] = useState(false);

  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    tutor: "",
    deadline: "",
    modules: [],
    certificate: "",
    reward_points: 0
  });

  const [modules, setModules] = useState([{
      numeric_id: 1,
      title: "Module 1",
      description: "Description for Module 1",
      author: "",
      videos_id: ["abc.mp4"],
      quizzes_id: [],
      duration: 0,
      is_mandatory: true,
      reward_points: 5,
      fileName: ""
    },
  ]);
  const [selectedModule, setSelectedModule] = useState(modules[0]);

  const addModule = () => {
    const newModule = {
      numeric_id: modules.length + 1,
      title: `Module ${modules.length + 1}`,
      description: `Description for Module ${modules.length + 1}`,
      author: "",
      videos_id: ["abc.mp4"],
      quizzes_id: [],
      duration: 0,
      is_mandatory: true,
      reward_points: 5,
      fileName: ""
    };
    setModules([...modules, newModule]);
  };

  const onClickModuleItem = (module) => {
    setSelectedModule(module);
  };
  
  const updateModuleData = (moduleId, newTitle, addedFile, fileName, newDescription) => {
    const updatedModules = modules.map((module) => {
      if (module.numeric_id === moduleId) {
        return { ...module, title: newTitle, videos_id: addedFile, fileName: fileName, description: newDescription };
      }
      return module;
    });
    setModules(updatedModules);
    toast.success("Module Saved !");
  };

  const handleSave = () => {
    setIsUploading(true);
    var modulesArray = [];
    
    // Create an array to store promises for each module upload
    const uploadPromises = modules.map((module) => {
      return axios({
        method: "post",
        url: moduleUrl,
        data: module
      }).then((response) => {
        if (response.status === 201) {
          // Push the moduleId to modulesArray
          modulesArray.push(response.data.doc._id);
        }
      }).catch((error) => {
        toast.error(`Module with title ${module.title} failed to upload !`);
        console.log(error);
      });
    });
  
    // Use Promise.all to wait for all module upload promises to resolve
    Promise.all(uploadPromises)
      .then(() => {
        // All modules are successfully uploaded
        toast.success("Modules Created Successfully !");
        // Update courseData with moduleIds
        setCourseData((prevCourseData) => ({
          ...prevCourseData,
          modules: modulesArray
        }));
    
        // After updating courseData with moduleIds, make the request to add the course
        return axios({
          method: "post",
          url: courseUrl,
          data: {
            ...courseData, // Use the updated courseData
            modules: modulesArray // Ensure modules array is updated
          }
        });
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Course added !");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in adding course !");
      })
      .finally(() => {
        setIsUploading(false);
      });
  };
  

  const handleCourseDataChange = (event) => {
    const { name, value } = event.target;
    setCourseData({ ...courseData, [name]: value });
  };

  return (
    <div className="App">
      <Form.Group>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Course Name"
          className="w-25"
          style={{ fontSize: "24px", height: "80px", marginLeft: '40px', marginTop: '20px', marginBottom: '20px' }}
          name="name"
          value={courseData.name}
          onChange={handleCourseDataChange} />
        <Form.Control
          size="lg"
          type="text"
          placeholder="Course Description"
          className="w-50"
          style={{ marginLeft: '40px' }}
          name="description"
          value={courseData.description}
          onChange={handleCourseDataChange} />
    
        <Form.Control
          size="lg"
          type="text"
          placeholder="Tutor"
          className="w-25"
          style={{ marginLeft: '40px', marginTop: '20px' }}
          name="tutor"
          value={courseData.tutor}
          onChange={handleCourseDataChange} />
        <Form.Control
          size="lg"
          type="number"
          placeholder="Days Allowed"
          className="w-25"
          style={{ marginLeft: '40px', marginTop: '20px', marginBottom: '20px' }}
          name="deadline"
          value={courseData.deadline}
          onChange={handleCourseDataChange} />
      </Form.Group>
      <div style={{ marginLeft: '20px', marginTop: '20px' }}>
        <Row style={{ marginRight: '0px' }}>
          <Col>
            <AccordionElement modules={modules} addModule={addModule} onClickItem={onClickModuleItem} />
          </Col>
          <Col>
          <CourseContentElement
            selectedModule={selectedModule}
            updateModuleData={updateModuleData}
          />
          </Col>
        </Row>
      </div>
      <center>
        <Button
          variant="primary"
          className="w-50 submit-button-contact"
          style={{ margin: '10px', marginBottom: "50px" }}
          onClick={handleSave}
          disabled={isUploading}>
            {isUploading ? ( // Render spinner if loading
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            ) : (
              "SAVE"
            )}
        </Button>
      </center>
      <ToastContainer />
    </div>
  );
}

export default ModuleAddition;
