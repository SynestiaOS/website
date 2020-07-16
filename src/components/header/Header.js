import React from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Header() {
    return (
        <Container className="Header">
            <Row style={{padding: 0, paddingTop: '1em'}}>
                <Col style={{padding: 0, margin: 0}}>
                    <Navbar bg="#fff" variant="light" style={{textAlign: 'left', padding: 0}}>
                        <Nav style={{width: '100%'}}>
                            <Nav.Link href="#home" style={{color: '#fff', background: '#000', fontWeight: 'bold'}}>ZionLab</Nav.Link>
                            <Nav.Link href="#home"
                                      style={{color: '#fff', background: '#000', fontWeight: 'normal', marginLeft: '0.2em'}}>SynestiaOS</Nav.Link>
                            <Nav.Link href="https://github.com/SynestiaOS"
                                      style={{color: '#000', fontWeight: 'bold', right: 0, position: 'absolute'}}>Blog</Nav.Link>
                            <Nav.Link href="https://github.com/SynestiaOS"
                                      style={{color: '#000', fontWeight: 'bold', right: '3em', position: 'absolute'}}>Docs</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
