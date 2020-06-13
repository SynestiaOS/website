import React from 'react';
import './TestSplash.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TestSplash() {
    return (
        <Container className="TestSplash">
            <Row>
                <Col>
                    <h2 className="textContent">SynestiaOS : An Open Source, standards-based software platform for IOT devices, including smartwatch, TVs and automotive infotainment platforms.
                    </h2>
                </Col>
            </Row>
        </Container>
    );
}

export default TestSplash;
