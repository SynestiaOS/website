import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";

function Footer() {
    return (
        <Container className="Footer">
            <Row>
                <Col md={4} style={{borderRight: 'solid 1px #fff', paddingRight: '1em',textAlign: 'center'}}>
                    <span style={{color: '#fff', fontWeight: 'bold', fontSize: '2em'}}>ZionLab</span>
                    <span style={{
                        color: '#fff',
                        fontWeight: 'lighter',
                        marginLeft: '0.2em',
                        fontSize: '2em'
                    }}>SynestiaOS</span>
                    <p style={{color:"#999"}}>© 2020 SynestiaOS. All Rights Reserved</p>
                </Col>
                <Col md={1}></Col>
                <Col md={3}>
                    <h4 style={{color: '#fff'}}>Additional Links</h4>
                    <a style={{color: '#fff', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"http://kerneltravel.net"}>Linux Kernel Travel</a>
                    <a style={{color: '#fff', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"https://templeos.org/"}>RIP Terry A. Davis</a>
                    <a style={{color: '#fff', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"https://github.com/SynestiaOS"}>Github</a>
                </Col>
                <Col md={2}>
                    <h4 style={{color: '#fff'}}>ZionLab</h4>
                    <a style={{color: '#fff', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"https://github.com/SynestiaOS"}>About</a>
                    <a style={{color: '#fff', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}} href={"https://github.com/SynestiaOS"}>Contact
                        Us</a>
                </Col>
                <Col md={2}>
                    <h4 style={{color: '#fff'}}>Foundation</h4>
                    <a style={{color: '#fff', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"/sponsor"}>Sponsor</a>
                    <a style={{color: '#fff', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                       href={"https://patreon.com/SynestiaOS"}>Donate</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
