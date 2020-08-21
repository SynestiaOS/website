import React, {Component} from 'react';
import './Faq.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import LogoRe from "../../static/images/logo_re.png";
import {Link} from "react-router-dom";

class Faq extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Sponsor">
            <Row style={{height: '16em', textAlign: 'center', paddingTop: '2em'}}>
                <Col style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "auto", paddingBottom: 'auto', marginBottom: 0, padding: 0}}>
                    <Image src={LogoRe} className="logo-img"/>
                    <h1 style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>FAQ</h1>
                    <p style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Something you want to know</p>
                </Col>
            </Row>
            <Row style={{background: '#fff', padding: 0, paddingTop: '2em', paddingBottom: '2em'}}>
                <Col md={12} style={{paddingTop: '1em', paddingBottom: '1em'}}>
                    <h1>What is this project?</h1>
                    <Container style={{marginTop: '1em'}}>
                        <Row>
                            <h5 style={{lineHeight: '1.2em'}}>An Open Source, standards-based software platform for IOT devices, including smartwatch,
                                TVs and automotive infotainment platforms.</h5>
                        </Row>
                    </Container>
                </Col>
                <Col md={12} style={{paddingTop: '1em', paddingBottom: '1em'}}>
                    <h1>What is your open source policy?</h1>
                    <Container style={{marginTop: '1em'}}>
                        <Row>
                            <h5 style={{lineHeight: '1.2em'}}>This is a completely free source code, you can use it to do anything, including
                                modification, sale and earn profit or use it in some commercial products, without providing us with anything. If you
                                can, you can buy us a cup of coffee
                                &nbsp;
                                <Link to={"/sponsor"}>
                                <span style={{
                                    color: '#fff',
                                    background: '#000',
                                    border: 'none',
                                    borderRadius: '3px',
                                    fontWeight: 'lighter',
                                    margin: 0,
                                    padding: 0,
                                    paddingLeft: '0.2em',
                                    paddingRight: '0.2em'
                                }}>COFFEE</span></Link>
                            </h5>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>);
    };

    renderMarkdownDoc(markdown) {
        this.setState({
            currentMarkDown: markdown
        })
    }
}

export default Faq;
