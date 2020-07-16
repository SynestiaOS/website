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
                <Col style={{padding: 0, height: '4em'}}>
                    <Navbar bg="#fff" variant="light" style={{textAlign: 'left', padding: 0}}>
                        <Nav style={{textAlign: 'left'}}>
                            <Nav.Link href="#home" style={{color: '#fff', background: '#000', fontWeight: 'bold'}}>ZionLab</Nav.Link>
                            <Nav.Link href="#home"
                                      style={{color: '#fff', background: '#000', fontWeight: 'bold', marginLeft: '0.2em'}}>SynestiaOS</Nav.Link>
                            {/*<Nav.Link href="#home" style={{color: '#000', fontWeight: 'bold'}}>BLOG</Nav.Link>*/}
                            {/*<Nav.Link href="#features" style={{color: '#000', fontWeight: 'bold'}}>DOCS</Nav.Link>*/}
                        </Nav>
                    </Navbar>x
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
