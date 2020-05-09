import React from 'react';
import './Events.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Events() {
    return (
        <Container className="Events">
            <h1>Latest from SynestiaOS</h1>
            <Row>
                <Col md={8}>
                    <Container className="Left-Card">
                        <p className="Card-Title">Join  us for #StartSynestiaOS</p>
                        <p className="Card-Content">Last week, we just started to build a new operating system for IOT devices. It's a cool start.</p>
                    </Container>
                </Col>
                <Col md={4}>
                    <Row>
                        <Container className="Right-Top-Card">
                            <Container className="Right-Card">
                                <p className="Card-Title">Events</p>
                                <p className="Card-Content">Last week, we just started to build a new operating system for IOT devices. It's a cool start.</p>
                            </Container>
                        </Container>
                    </Row>
                    <Row>
                        <Container className="Right-Bottom-Card">
                            <Container className="Right-Card">
                                <p className="Card-Title">Blog</p>
                                <p className="Card-Content">Last week, we just started to build a new operating system for IOT devices. It's a cool start.</p>
                            </Container>
                        </Container>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}

export default Events;
