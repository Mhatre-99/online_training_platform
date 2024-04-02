import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import AccordionElement from "./components/AccordionElement";
import CourseContentElement from "./components/CourseContentElement";
import Header from "./components/Header";

function ModuleAddition() {
  const [modules, setModules] = useState([
    {
      id: 1,
      name: "Module 1",
      description: "Description for Module 1",
      file: null,
    },
  ]);
  const [selectedModule, setSelectedModule] = useState(modules[0]);

  const addModule = () => {
    const newModule = {
      id: modules.length + 1,
      name: `Module ${modules.length + 1}`,
      description: `Description for Module ${modules.length + 1}`,
      file: null,
    };
    setModules([...modules, newModule]);
  };

  const onClickItem = (module) => {
    setSelectedModule(module);
  };

  const updateModuleDescription = (moduleId, newDescription) => {
    const updatedModules = modules.map((module) => {
      if (module.id === moduleId) {
        return { ...module, description: newDescription };
      }
      return module;
    });
    setModules(updatedModules);
  };

  const updateModuleFile = (moduleId, addedFile) => {
    const updatedModules = modules.map((module) => {
      if (module.id === moduleId) {
        return { ...module, file: addedFile };
      }
      return module;
    });
    setModules(updatedModules);
  };

  return (
    <div className="App">
      <Header class="d-inline-block" />
      <Form.Group>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Course Name"
          className="w-75"
          style={{ margin: "20px" }}
        />
      </Form.Group>
      <div style={{ marginLeft: "20px", marginTop: "20px" }}>
        <Row style={{ marginRight: "0px" }}>
          <Col>
            <AccordionElement
              modules={modules}
              addModule={addModule}
              onClickItem={onClickItem}
            />
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
    </div>
  );
}

export default ModuleAddition;
