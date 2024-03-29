import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function CourseContentElement({ selectedModule, updateModuleDescription, updateModuleFile }) {
  const [description, setDescription] = useState(selectedModule.description);
	const [file, setFile] = useState(selectedModule.videos_id);
  const [fileName, setFileName] = useState(selectedModule.fileName);

	useEffect(() => {
		setDescription(selectedModule.description);
		setFile(selectedModule.video_id)
    setFileName(selectedModule.fileName);
	}, [selectedModule]);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    updateModuleDescription(selectedModule.id, description);
  };

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setFile(file);
    setFileName(file.name);
    updateModuleFile(selectedModule.id, file, fileName);
	};
	
  const handleSave = () => {
		console.log(selectedModule.id + " " + description + " " + file);
  };

  return (
    <div>
      <Form.Group controlId="formFile" className="mb-3" style={{ marginRight: '20px' }}>
        <Form.Label><b>Add a file</b></Form.Label><br />
        <Form.Control type="file" onChange={handleFileChange} />
        <Form.Label><b>File added: {fileName}</b></Form.Label> <br />

        <Form.Label style={{ marginTop: '20px' }}><b>Module Description</b></Form.Label>
        <Form.Control
          as="textarea"
          aria-label="Module Description"
          value={description}
          style = {{ height: "150px" }}
          onChange={handleDescriptionChange}/>

        <center>
          <Button variant="primary" className="submit-button-contact" style={{ border: "1px solid #795548", background: "#795548", display: "inline-block", width: "150px", margin: '10px' }}>
             &lt; PREVIOUS
          </Button>
          <Button variant="primary" className="submit-button-contact" style={{ border: "1px solid #795548", background: "#795548", display: "inline-block", width: "150px", margin: '10px' }}>
            NEXT &gt;
          </Button>
          <Button variant="primary" onClick={handleSave} className="submit-button-contact" style={{ border: "1px solid #795548", background: "#795548", width: "200px", margin: '10px' }}>
            ADD A QUIZ
          </Button>
        </center>
      </Form.Group>
    </div>
  );
}

export default CourseContentElement;
