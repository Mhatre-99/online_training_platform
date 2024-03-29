import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import AccordionElement from './AccordionElement';
import CourseContentElement from './CourseContentElement';
import axios from "axios";

function ModuleAddition() {

  const courseUrl = "http://localhost:5050/courses/add"
  const moduleUrl = "http://localhost:5050/module/add-module"

  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    tutor: "",
    deadline: "",
    modules: [],
    certificate: ""
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
    console.log(module.fileName)
  };

  const updateModuleDescription = (moduleId, newDescription) => {
    const updatedModules = modules.map((module) => {
      if (module.numeric_id === moduleId) {
        return { ...module, description: newDescription };
      }
      return module;
    });
    setModules(updatedModules);
  };

  const updateModuleFile = (moduleId, addedFile, fileName) => {
    const updatedModules = modules.map((module) => {
      if (module.numeric_id === moduleId) {
        return { ...module, videos_id: addedFile, fileName: fileName };
      }
      return module;
    });
    setModules(updatedModules);
  };

  const handleSave = () => {
    axios({
      method: "post",
      url: courseUrl,
      data: courseData
    }).then((response) => {
      if (response.data.status === 201) {
        console.log("Course Added");
      }
    }, (error) => {
      console.log(error);
    });

    modules.forEach((module) => {
      axios({
        method: "post",
        url: moduleUrl,
        data: module
      }).then((response) => {
        if (response.data.status === 201) {
          console.log("Module Added");
        }
      }, (error) => {
        console.log(error);
      });
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
          style={{ display: "inline-block", marginLeft: '40px' }}
          name="tutor"
          value={courseData.tutor}
          onChange={handleCourseDataChange} />
        <Form.Control
          size="lg"
          type="number"
          placeholder="Days Allowed"
          className="w-25"
          style={{ display: "inline-block", marginLeft: '10px', marginTop: '20px', marginBottom: '20px' }}
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
              updateModuleDescription={updateModuleDescription}
              updateModuleFile={updateModuleFile}
            />
          </Col>
        </Row>
      </div>
      <center>
        <Button variant="primary" className="w-50 submit-button-contact" style={{ margin: '10px', marginBottom: "50px" }} onClick={handleSave}>
          SAVE
        </Button>
      </center>
    </div>
  );
}

export default ModuleAddition;
