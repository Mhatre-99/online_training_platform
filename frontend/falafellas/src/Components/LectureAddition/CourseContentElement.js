import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function CourseContentElement({ selectedModule, updateModuleDescription, updateModuleFile }) {
  const [description, setDescription] = useState(selectedModule.description);
	const [file, setFile] = useState(selectedModule.file);

	useEffect(() => {
		setDescription(selectedModule.description);
		setFile(selectedModule.file)
	}, [selectedModule]);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setFile(file);
	};
	

  const handleSave = () => {
		console.log(selectedModule.id + " " + description + " " + file);
    updateModuleDescription(selectedModule.id, description);
		updateModuleFile(selectedModule.id, file);
  };

  return (
    <div>
      <Form.Group controlId="formFile" className="mb-3" style={{ marginRight: '20px' }}>
        <Form.Label>Enter a file</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />

        <Form.Label style={{ marginTop: '20px' }}>Module Description</Form.Label>
        <Form.Control
          as="textarea"
          aria-label="Module Description"
          value={description}
          onChange={handleDescriptionChange}/>

        <center>
          <Button variant="primary" style={{ margin: '10px' }} onClick={handleSave}>
            Save
          </Button>
          <Button variant="primary" style={{ margin: '10px' }}>
            Previous
          </Button>
          <Button variant="primary" style={{ margin: '10px' }}>
            Next
          </Button>
        </center>
      </Form.Group>
    </div>
  );
}

export default CourseContentElement;
