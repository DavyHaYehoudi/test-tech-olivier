import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <Nav
      activeKey="/"
          >
      <Nav.Item>
        <Nav.Link href="/">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
