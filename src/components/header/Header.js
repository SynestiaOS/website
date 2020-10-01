import React from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import LogoRe from "../../static/images/logo_re.png";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
    return (
        <Container className="Header">
            <Row style={{padding: 0, height: '2em', background: "rgb(245,245,245)"}}>
                <Dropdown style={{flex: 1,textAlign: "right"}}>
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                        English
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Chinese</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <Row style={{padding: 0,borderBottom: "1px solid #e8e8e8",backgroundColor:" #fff",color:"#000", display: "flex"}}>
                <Navbar bg="#fff" variant="light" style={{textAlign: 'left', padding: 0}}>
                    <Image src={LogoRe} className="logo-img"/>
                    <Nav.Link href="/home"
                              style={{color: '#000',fontSize:'1.5em'}}>SynestiaOS</Nav.Link>
                    <Nav.Link href="/sponsor"
                              style={{color: '#000'}}>Sponsor</Nav.Link>
                    <Nav.Link href="/blog"
                              style={{color: '#000'}}>Blog</Nav.Link>
                    <Nav.Link href="/docs"
                              style={{color: '#000'}}>Docs</Nav.Link>
                </Navbar>
            </Row>
        </Container>
    );
}

export default Header;
