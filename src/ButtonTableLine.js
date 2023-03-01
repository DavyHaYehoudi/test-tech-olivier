import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";

const ButtonTableLine = ({customerId, listCustomerRefresh }) => {
  const deleteCustomer = (customerId) => {
    let confirm = window.confirm("Are you sure to delete this customer ?");
    let idCustomer=customerId.customerId
    if (confirm) {      
      axios
        .delete(`http://localhost:2800/user/${idCustomer}`)
        .then((resp) => listCustomerRefresh(),alert("Customer deleted"))
        .catch((err) => console.log(err));
    }
  };
  const infoCustomer = (customerId) => {
    window.location.href = "http://localhost:2800/id";
  };
  return (
    <div>
      <Button variant="primary" onClick={() => infoCustomer({ customerId })}>
        Informations
      </Button>{" "}
      <Button variant="danger" onClick={() => deleteCustomer({ customerId })}>
        Delete
      </Button>{" "}
    </div>
  );
};

export default ButtonTableLine;
