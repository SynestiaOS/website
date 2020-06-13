import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
    return (
        <Container className="Footer">
            <Container style={{textAlign:'center'}}>
                <Row style={{textAlign:'center'}}>
                    <Row style={{color: '#fff',textAlign:'center'}}>© 2019-2020. All Rights Reserved. SynestiaOS.</Row>
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;
