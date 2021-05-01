import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row, Col } from 'react-bootstrap';
import profile1 from '../assets/images/profile1.jpg';
import profile2 from '../assets/images/profile2.png';


const About = () =>{
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

export default About;