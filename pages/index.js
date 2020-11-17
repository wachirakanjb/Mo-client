import React from 'react'
import { Card, Button, Container, Row, Col, Form,Image,Nav} from "react-bootstrap";
import stylecss from '../assets/styles/Home.module.css'
const index = () => {
  return (
    <div>
     <body className={stylecss.background}> 
      <Container className={stylecss.Container}>
          <Row>
            <Col className={stylecss.Col}>
              <h1 className={stylecss.h}>Welcome to MOHUB.COM</h1>
                <Form.Row className={stylecss.Form1}>
                  <Col>
                    <Button  href='register'  variant="primary" size='lg' style={{fontFamily:'Kanit, sans-serif',backgroundColor:'#FF6666',borderColor:'#FFFFFF'}} > 
                    Register Here          
                    </Button>{'  '}
                    <Button href='features' variant="primary" size='lg' style={{fontFamily:'Kanit, sans-serif',backgroundColor:'#FF6666',borderColor:'#FFFFFF'}} >
                      Visit as a guest
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
