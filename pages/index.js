import React from 'react'
import {  Button, Container, Row, Col, Form,} from "react-bootstrap";
import stylecss from '../assets/styles/Home.module.css'
const index = () => {
  return (
    <div>
     <body className={stylecss.background}> 
      <Container className={stylecss.Container}>
          <Row>
            <Col className={stylecss.Col}style={{marginTop:'60%'}}>
                <Form.Row className={stylecss.Form1}>
                  <Col>
                  
                  <h className={stylecss.h}>Beef Quality Grading System </h>
                  <h1 className={stylecss.h1}>
                    ระบบการตัดเกรดเนื้อโค
                  </h1>
                    <Button className={stylecss.GradeButton} href='#startgradding'  variant="primary" size='lg' > 
                    Start Grading         
                    </Button>
                  </Col>
                </Form.Row>
            </Col>
          </Row>
        </Container>
     </body>
     
    </div>
  )
}
export default index
