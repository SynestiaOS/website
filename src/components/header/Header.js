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
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo.png"

function Header() {
    return (
        <Container className="Header">
            <Row>
                <Col>
                    <Navbar bg="#fff" variant="light">
                        <Link to="/home"><Image src={Logo} className="logo-img" rounded/>
                            <Navbar.Brand className="icon" href="#home"><span className="icon-left">Synestia</span><span
                                className="icon-right">OS</span></Navbar.Brand>
                        </Link>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Blog</Nav.Link>
                            <Nav.Link href="#features">Event</Nav.Link>
                            <Nav.Link href="https://templeos.org/">R.I.P Terry A. Davis</Nav.Link>
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
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
