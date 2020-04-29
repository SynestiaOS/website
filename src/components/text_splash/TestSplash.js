import React from 'react';
import './TestSplash.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TestSplash() {
    return (
        <Container className="TestSplash">
            <Row>
                <Col><h1 className="textTitle">SynestiaOS</h1></Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="textContent">An <h2 className="high-light-font">open source</h2>, standards-based software platform for <h2
                        className="high-light-font">iot</h2> devices, including smartwatch, TVs and automotive infotainment platforms.
                    </h2>
                </Col>
            </Row>
        </Container>
    );
}

export default TestSplash;
