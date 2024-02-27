import { Accordion, Button } from 'react-bootstrap';

function AccordionElement({ addModule, modules, onClickItem }) {
  return (
    <div>
      <style>
        {`
          .accordion-button::after {
            display: none !important;
          }
        `}
      </style>
      <Accordion className="w-100 p-3" style={{ marginTop: '16px' }}>
        {modules.map((module) => (
          <Accordion.Item
            key={module.id}
            eventKey={module.id.toString()}
            className="w-100 p-3"
            onClick={() => onClickItem(module)}>
            <Accordion.Header>{module.name}</Accordion.Header>
          </Accordion.Item>
        ))}
        <center>
          <Button onClick={addModule} className="w-75 p-3" style={{ marginTop: '20px' }}>
            Add a Module
          </Button>
        </center>
      </Accordion>
    </div>
  );
}

export default AccordionElement;
