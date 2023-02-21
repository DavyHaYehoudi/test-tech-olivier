import Form from 'react-bootstrap/Form';

function FormCustomer() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Mark Gordon" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>customerNumber</Form.Label>
        <Form.Control type="text" placeholder="256545POHQ65" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Los Angeles" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Street</Form.Label>
        <Form.Control type="text" placeholder="Century, 20th" />
      </Form.Group>
    </Form>
  );
}

export default FormCustomer;