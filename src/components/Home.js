import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import icon_mind from '../assets/images/icon_mind.svg';

const Home = () =>{
    return (
        <div>
        <Container>
        <Row>
            <Col className="col-home">
                <h1>Explore</h1>
                <h3>Our Popular Course</h3>
            </Col>
            <Col className="col-home">
                <p>Browse Online Course</p>
            </Col>
        </Row>
        </Container>
       
        <Container className="container-course">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={icon_mind} />
            <Card.Body>
                <Card.Title>Biology</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Beli Course</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={icon_mind} />
            <Card.Body>
                <Card.Title>Biology</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Beli Course</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={icon_mind} />
            <Card.Body>
                <Card.Title>Biology</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Beli Course</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={icon_mind} />
            <Card.Body>
                <Card.Title>Biology</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Beli Course</Button>
            </Card.Body>
        </Card>
        </Container>
        </div>
    );
}

export default Home;