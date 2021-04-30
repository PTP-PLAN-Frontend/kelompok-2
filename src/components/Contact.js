import React from 'react';
import './Contact.css';
import { Image, Container, Row, Col } from 'react-bootstrap';
import profile1 from '../assets/images/profile1.jpg';



const Contact = () =>{
    return (
    <Container className="container-about">
    <Row>
      <Col xs={6} md={4}>
        <Image src={ profile1}  thumbnail className="image"/>
      </Col>
      <Col xs={6} md={4}>
        <Image src={ profile1}  thumbnail className="image"/>
      </Col>
      <Col xs={6} md={4}>
        <Image src={ profile1}  thumbnail className="image"/>
      </Col>
    </Row>
  </Container>
    );
}

export default Contact;