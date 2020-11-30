import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col, Image} from "react-bootstrap";

function Footer() {
    return (
        <Container className="Footer">
            <Row>
                <Col md={2} style={{paddingLeft: '3em', paddingRight: '8em'}}>
                    <Image src={'./imgs/WeiJi.png'}/>
                </Col>
                <Col md={10} style={{paddingLeft: '3em', paddingRight: '8em'}}>
                    <Row>
                        <Col md={3}>
                            <h5 style={{marginBottom: '0.5em'}}>About</h5>
                            <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                               href={"/home"}>About us</a>
                            <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                               href={"/home"}>Contact us</a>
                        </Col>
                        <Col md={3}>
                            <h5 style={{marginBottom: '0.5em'}}>Develop</h5>
                            <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                               href={"/docs"}>Docs</a>
                            <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                               href={"/blog"}>News</a>
                            <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                               href={"/faq"}>FAQ</a>
                        </Col>
                        <Col md={3}>
                            <h5 style={{marginBottom: '0.5em'}}>Support</h5>
                            <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                               href={"/sponsor"}>Sponsor</a>
                            <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                               href={"https://patreon.com/SynestiaOS"}>Donate</a>
                        </Col>
                        <Col md={3}>
                            <h5 style={{marginBottom: '0.5em'}}>Additional Links</h5>
                            <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                               href={"http://kerneltravel.net"}>Linux Kernel Travel</a>
                            <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                               href={"https://templeos.org/"}>RIP Terry A. Davis</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
