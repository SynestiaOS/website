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
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>FAQ</h1>
                    <h4>Something you want to know</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '2em', paddingBottom: '2em'}}>
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
                                <button style={{
                                    color: '#fff',
                                    background: '#000',
                                    border: 'none',
                                    borderRadius: '100em',
                                }}>COFFEE</button></Link>
                            </h5>
                        </Row>
                    </Container>
                </Col>
                <Col md={12} style={{paddingTop: '1em', paddingBottom: '1em'}}>
                    <h1>What is your sponsor level?</h1>
                    <Container style={{marginTop: '1em'}}>
                        <Row>
                            <Col md={3}>
                                <p style={{
                                    padding: "1em",
                                    borderRadius: "2px",
                                    backgroundImage: "linear-gradient(to right, rgb(229,199,173), rgb(182,152,124))",
                                }}>Platinum Sponsor</p>
                            </Col>
                            <Col md={3}>
                                <p style={{
                                    padding: "1em",
                                    borderRadius: "2px",
                                    backgroundImage:  "linear-gradient(to right, rgb(239,205,109), rgb(215,159,61))",
                                }}>Gold Sponsor</p>
                            </Col>
                            <Col md={3}>
                                <p style={{
                                    padding: "1em",
                                    borderRadius: "2px",
                                    backgroundImage: "linear-gradient(to right, rgb(228,226,227), rgb(195,193,196))",
                                }}>Silver Sponsor</p>
                            </Col>
                            <Col md={3}>
                                <p style={{
                                    padding: "1em",
                                    borderRadius: "2px",
                                    backgroundImage: "linear-gradient(to right, rgb(166,219,246), rgb(77,164,216))",
                                }}>Normal Sponsor</p>
                            </Col>
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
