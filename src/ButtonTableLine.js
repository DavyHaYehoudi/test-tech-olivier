import React from "react";
import Button from "react-bootstrap/Button";

const ButtonTableLine = ({ customerId }) => {
  const deleteCustomer = (customerId) => {
    let confirm = window.confirm("Are you sure to delete this customer ?");
    if (confirm) {
      alert("Customer deleted");
    }
  };
  const infoCustomer = (customerId) => {
    window.location.href = "http://localhost:3000/123";
  };
  return (
    <div>
      <Button variant="primary" onClick={()=> infoCustomer({ customerId })}>
        Informations
      </Button>{" "}
      <Button variant="danger" onClick={()=> deleteCustomer({ customerId })}>
        Delete
      </Button>{" "}
    </div>
  );
};

export default ButtonTableLine;
