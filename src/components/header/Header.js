import React from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {BrowserRouter as Router, Link} from "react-router-dom";

function Header() {
    return (
        <Container className="Header">
            <Row>
                <Col>
                    <Router>
                        <Navbar bg="#fff" variant="light">
                            <Navbar.Brand className="icon" href="#home"><span className="icon-left">Synestia</span><span
                                className="icon-right">OS</span></Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Blog</Nav.Link>
                                <Nav.Link href="#features">Event</Nav.Link>
                            </Nav>
                            <Form inline>
                                <DropdownButton variant="outline-dark"
                                                className="right-menu-icon"
                                                alignRight
                                                title="MENU"
                                                id="dropdown-menu-align-right">
                                    <Dropdown.Item eventKey="1"><Link to="/what-we-do">what we do?</Link></Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item eventKey="2"><Link to="/how-we-work">how we work?</Link></Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item eventKey="3"><Link to="/who-we-are">who we are?</Link></Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item eventKey="4"><Link to="/contact">contact</Link></Dropdown.Item>
                                    <Dropdown.Divider/>
                                </DropdownButton>
                            </Form>
                        </Navbar>
                    </Router>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
