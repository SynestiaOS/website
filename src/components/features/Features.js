import React from 'react';
import './Features.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Features() {
    return (
        <Container className="Features">
            <Row>
                <Col>
                    <Container className="Card">
                        <p className="Card-Title">OpenSource</p>
                        <p className="Card-Content">SynestiaOS is released under the MIT open source license, which is a loose license with few restrictions on reuse.</p>
                    </Container>
                </Col>
                <Col>
                    <Container className="Card">
                        <p className="Card-Title">Trusted</p>
                        <p className="Card-Content">The SynestiaOS kernel was developed by the thoughtworks kernel security team. It has proven reliability.</p>
                    </Container>
                </Col>
                <Col>
                    <Container className="Card">
                        <p className="Card-Title">Reduce time to market</p>
                        <p className="Card-Content">Simple development</p>
                    </Container>
                </Col>
                <Col>
                    <Container className="Card">
                        <p className="Card-Title">MicroKernel architecture</p>
                        <p className="Card-Content">MicroKernel architecture,  provides scene engine and low power consumption framework</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Features;
