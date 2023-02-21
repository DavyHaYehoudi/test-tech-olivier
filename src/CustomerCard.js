import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CustomerCard = ({
  name,
  city,
  street,
  customerNumber,
  creationDate,
  contact,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Name : {name}</ListGroup.Item>
        <ListGroup.Item>City : {city} </ListGroup.Item>
        <ListGroup.Item>Street : {street} </ListGroup.Item>
        <ListGroup.Item>Customer Number : {customerNumber} </ListGroup.Item>
        <ListGroup.Item>Creation Date : {creationDate} </ListGroup.Item>
        <ListGroup.Item>MAP {contact} </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CustomerCard;
