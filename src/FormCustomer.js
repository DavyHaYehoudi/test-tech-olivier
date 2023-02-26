import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function FormCustomer({onData}) {
const[dataCustomer,setDataCustomer]=useState(null)

const handleChangeInput=(e)=>{
  setDataCustomer(...dataCustomer,{[e.target.name]:e.target.value})
  onData(dataCustomer)
}

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Mark Gordon" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>customerNumber</Form.Label>
        <Form.Control type="text" placeholder="256545POHQ65" name="customerNumber" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Los Angeles" name="city"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Street</Form.Label>
        <Form.Control type="text" placeholder="Century, 20th" name="street"/>
      </Form.Group>
    </Form>
  );
}

export default FormCustomer;