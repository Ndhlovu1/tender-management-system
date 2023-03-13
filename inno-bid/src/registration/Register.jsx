import React from 'react'
import "./registration.css"
import {Button,Card,Form, Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'

export default function Register() {
  return (
    <div className="registerMain"> 
             
        <div className="regForm">

                <Container fluid >
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col className="col-md-3 align-items-left" >
                    <Card style={{ width: '500px', padding:'5px', marginTop:'50px', paddingTop:"10px"}}>
                        <Card.Body style={{ justify: 'start' }}>
                        

                            <Card.Title>
                            <h1 > REGISTRATION</h1>
                            </Card.Title>

                            <Form className="d-flex justify-content-start">
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label>Name </Form.Label>
                                    <Form.Control type="text" placeholder="John Shilongo"/>

                                    <Form.Label>Company Name </Form.Label>
                                    <Form.Control type="text" placeholder="John Doe"/>

                                    <Form.Label>Business Email</Form.Label>
                                    <Form.Control type="email" placeholder="info@innodb.com"/>

                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="****"/>

                                    <Form.Label> Confirm Password </Form.Label>
                                    <Form.Control type="password" placeholder="****"/>


                                </Form.Group>

                            </Form>
                            
                            <Button className="mb-3 btn-md " variant="outline-secondary" >  
                            <Link to="/Dashboard"> Register
                                        </Link>
                                </Button>
                            <br/>
                            <Card.Text>
                                <p>
                                    <Link to="/" > Already have an account? Sign In </Link> </p>
                            </Card.Text>

                            <Card.Text>
                                <p>
                                <Link to="/"> Forgot your password? Reset </Link> </p>
                            </Card.Text>

                        </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Container>
                
            </div>

        
      
      
    </div>
  )
}
