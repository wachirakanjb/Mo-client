import React from "react";
import { Card, Button, Container, Row, Col, Form,Image} from "react-bootstrap";
import stylecss from "../assets/styles/registerform.module.css";

export default function features() {
  return (
    <div>
      <body className={stylecss.background}>
        <Container className={stylecss.Container}>
          <Row>
            <Col className={stylecss.Col}>
              <h className={stylecss.h}>Register form</h>
              <Form className={stylecss.form}>
                <Form.Row className={stylecss.form1}>
                  <Col>
                    firstname
                    <Form.Control placeholder="" />
                  </Col>
                  <Col>
                    lastname
                    <Form.Control placeholder="" />
                  </Col>
                </Form.Row>
                <Form.Row className={stylecss.form1}>
                  <Col>
                    Birthday
                    <Form.Control placeholder="" />
                  </Col>
                  <Col>
                    Gender
                    {["checkbox"].map((type) => (
                      <div key={`custom-inline-${type}`} className="mb-3">
                        <Form.Check
                          custom
                          inline
                          label="male"
                          type={type}
                          id={`custom-inline-${type}-1`}
                        />
                        <Form.Check
                          custom
                          inline
                          label="female"
                          type={type}
                          id={`custom-inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Col>
                </Form.Row>
                <Form.Row className={stylecss.form1}>
                  <Col>
                    Email
                    <Form.Control placeholder="" />
                  </Col>
                  <Col>
                    Phone Number
                    <Form.Control placeholder="" />
                  </Col>
                </Form.Row >
                <Form.Row className={stylecss.form1}>
                  <Col>
                    Subject
                    <Form.Control as="select">
                      <option>Choose option</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
                <Form.Row className={stylecss.form1}>
                  <Col>
                    <Button variant="primary" size="lg" block>
                      submit
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}
