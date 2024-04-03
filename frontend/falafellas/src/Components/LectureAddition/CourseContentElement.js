import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./ModuleAddition.css";

function CourseContentElement({ selectedModule, updateModuleData }) {
  const [title, setTitle] = useState(selectedModule.title);
  const [description, setDescription] = useState(selectedModule.description);
	const [file, setFile] = useState(selectedModule.videos_id);
  const [fileName, setFileName] = useState(selectedModule.fileName);

	useEffect(() => {
		setDescription(selectedModule.description);
    setTitle(selectedModule.title);
		setFile(selectedModule.videos_id)
    setFileName(selectedModule.fileName);
	}, [selectedModule]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setFile(file);
    setFileName(file.name);
	};
	
  const handleSave = () => {
    updateModuleData(selectedModule.numeric_id, title, file, fileName, description);
  };

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = handleFileChange;
    input.click();
  };

  return (
    <div>
      <Form.Group controlId="formFile" className="mb-3" style={{ marginRight: '20px' }}>
      <Form.Label><b>Title</b></Form.Label><br />
        <Form.Control
            size="md"
            type="text"
            className="w-50"
            style={{ marginBottom: '20px' }}
            value={title}
            onChange={handleTitleChange} />
        <Form.Label><b>Add a file</b></Form.Label><br />
        <Button variant='primary' className='upload-button-module' onClick={handleFileSelect}>Upload a File</Button><br />
        <Form.Label><b>File added: </b> {fileName === "" ? "None" : fileName}</Form.Label> <br />

        <Form.Label style={{ marginTop: '20px' }}><b>Module Description</b></Form.Label>
        <Form.Control
          as="textarea"
          aria-label="Module Description"
          value={description}
          style = {{ height: "150px" }}
          onChange={handleDescriptionChange}/>

        <center>
        <Button variant="primary" onClick={handleSave} className="save-button-module" style={{ width: "200px", margin: '10px' }}>
            SAVE MODULE
          </Button>
          <Button variant="primary" className="save-button-module" style={{ width: "200px", margin: '10px' }}>
            ADD A QUIZ
          </Button>
        </center>
      </Form.Group>
    </div>
  );
}

export default CourseContentElement;
