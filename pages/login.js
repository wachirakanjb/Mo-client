import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import logincss from "../assets/styles/Home.module.css";
const login = () => {
  return (
    <div>
            <Form className={logincss.login}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="Username" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox"></Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
    </div>
  );
};

export default login;
