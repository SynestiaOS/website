import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";

function Footer() {
    return (
        <Container className="Footer">
            <Container style={{textAlign: 'left'}}>
                <Row style={{textAlign: 'left'}}>
                    <Col style={{borderRight:'solid 1px #fff',paddingRight:'1em'}}>
                        <span style={{color: '#fff', fontWeight: 'bold', fontSize: '2em'}}>ZionLab</span>
                        <span style={{
                            color: '#fff',
                            fontWeight: 'normal',
                            marginLeft: '0.2em',
                            fontSize: '2em'
                        }}>SynestiaOS</span>
                    </Col>
                    <Col style={{marginLeft:'1em'}}>
                        <h4 style={{color: '#fff'}}>Additional Links</h4>
                        <a style={{color: '#fff', fontWeight: 'normal',margin:0,padding:0,display:'block'}} href={"https://github.com/SynestiaOS"}>Github</a>
                    </Col>
                    <Col>
                        <h4 style={{color: '#fff'}}>ZionLab</h4>
                        <a style={{color: '#fff', fontWeight: 'normal',margin:0,padding:0,display:'block'}} href={"https://github.com/SynestiaOS"}>About</a>
                        <a style={{color: '#fff', fontWeight: 'normal',margin:0,padding:0,display:'block'}} href={"https://github.com/SynestiaOS"}>Contact Us</a>
                        <a style={{color: '#fff', fontWeight: 'normal',margin:0,padding:0,display:'block'}} href={"https://patreon.com/SynestiaOS"}>Donate</a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;
