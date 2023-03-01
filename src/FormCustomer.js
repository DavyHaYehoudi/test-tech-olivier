import { useState } from "react";
import Form from "react-bootstrap/Form";

function FormCustomer({ onData }) {
  const [dataCustomer, setDataCustomer] = useState({
    name: "",
    managerName:"",
    customerNumber: "",
    city: "",
    street: "",
  });

  const handleChangeInput = (e) => {
    setDataCustomer({...dataCustomer , ...{ [e.target.name]: e.target.value }});
    onData(dataCustomer);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Mark Gordon"
          name="name"
          onChange={handleChangeInput}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Manager Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Manager Gordon"
          name="managerName"
          onChange={handleChangeInput}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>customerNumber</Form.Label>
        <Form.Control
          type="text"
          placeholder="256545POHQ65"
          name="customerNumber"
          onChange={handleChangeInput}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Los Angeles"
          name="city"
          onChange={handleChangeInput}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Street</Form.Label>
        <Form.Control
          type="text"
          placeholder="Century, 20th"
          name="street"
          onChange={handleChangeInput}
        />
      </Form.Group>
    </Form>
  );
}

export default FormCustomer;
