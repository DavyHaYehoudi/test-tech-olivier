import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormCustomer from './FormCustomer';

function AddCustomerModal() {
  const [show, setShow] = useState(false);
  const[dataCustomer,setDataCustomer]=useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCustomerFromChild=(data)=>{
    setDataCustomer(data)
  }

  const createCustomer=()=>{
    //axios => dataCustomer

  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Add customer
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Inscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCustomer onData={handleAddCustomerFromChild} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createCustomer} >Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCustomerModal



// Parent Component
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState(null);

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <div>
      <ChildComponent onData={handleDataFromChild} />
      {dataFromChild && <p>Data from Child: {dataFromChild}</p>}
    </div>
  );
}

// Child Component
import React from "react";

function ChildComponent({ onData }) {
  function handleClick() {
    const data = "Hello from Child!";
    onData(data);
  }

  return <button onClick={handleClick}>Send Data to Parent</button>;
}
