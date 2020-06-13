import React from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo_re.png"

function Header() {
    return (
        <Container className="Header">
            <Row>
                <Col>
                    <Navbar bg="#fff" variant="light" style={{textAlign:'center'}}>
                        <Nav style={{textAlign:'center',width:'auto',marginLeft:'auto',marginRight:'auto'}}>
                            <Nav.Link href="#home" style={{color:'#fff'}}>HOME</Nav.Link>
                            <Nav.Link href="#features" style={{color:'#fff'}}>ABOUT</Nav.Link>
                            <Nav.Link href="#homme" style={{color:'#fff'}}>FEATURES</Nav.Link>
                            <Link to="/home"><Image src={Logo} className="logo-img" rounded/></Link>
                            <Nav.Link href="#home" style={{color:'#fff'}}>USAGE</Nav.Link>
                            <Nav.Link href="#features" style={{color:'#fff'}}>COMMUNITY</Nav.Link>
                            <Nav.Link href="#home" style={{color:'#fff'}}>GET START</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
