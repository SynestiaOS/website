import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";

function Footer() {
    return (
        <Container className="Footer">
            <Row>
                <Col md={3}>
                    <h5 style={{marginBottom:'0.5em'}}>AboutUs</h5>
                    <a style={{ color:'#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"https://github.com/SynestiaOS"}>About</a>
                    <a style={{ color:'#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}} href={"https://github.com/SynestiaOS"}>Contact
                        Us</a>
                </Col>
                <Col md={3}>
                    <h5 style={{marginBottom:'0.5em'}}>Develop</h5>
                    <a style={{ color:'#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"/docs"}>Docs</a>
                </Col>
                <Col md={3}>
                    <h5 style={{marginBottom:'0.5em'}}>Support</h5>
                    <a style={{ color:'#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"/sponsor"}>Sponsor</a>
                    <a style={{ color:'#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"https://patreon.com/SynestiaOS"}>Donate</a>
                </Col>
                <Col md={3}>
                    <h5 style={{marginBottom:'0.5em'}}>Additional Links</h5>
                    <a style={{ color:'#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"http://kerneltravel.net"}>Linux Kernel Travel</a>
                    <a style={{ color:'#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"http://www.book-os.org/"}>BookOS</a>
                    <a style={{ color:'#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"https://templeos.org/"}>RIP Terry A. Davis</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
