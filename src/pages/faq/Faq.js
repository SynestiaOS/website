import React, {Component} from 'react';
import './Faq.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";

class Faq extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Faq">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col md={1}/>
                <Col md={10}>
                    <h1>{this.props.t("FAQ")}</h1>
                    <h4>Something you want to know</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '2em', paddingBottom: '2em'}}>
                <Col md={1}/>
                <Col md={10}>
                    <h1>What is this project ></h1>
                    <Col md={12} style={{padding: '2em', background: '#fff'}}>
                        <Container style={{marginTop: '1em'}}>
                            <Row>
                                <h5 style={{lineHeight: '1.2em'}}>An Open Source, standards-based software platform for IOT devices, including
                                    smartwatch,
                                    TVs and automotive infotainment platforms.</h5>
                            </Row>
                        </Container>
                    </Col>
                    <h1 style={{marginTop: '1em'}}>What is your open source policy ></h1>
                    <Col md={12} style={{padding: '2em', background: '#fff'}}>
                        <Container style={{marginTop: '1em'}}>
                            <Row>
                                <h5 style={{lineHeight: '1.2em'}}>This is a completely free source code, you can use it to do anything, including
                                    modification, sale and earn profit or use it in some commercial products, without providing us with
                                    anything. <strike>If you
                                        can, you can buy us a cup of coffee.</strike>
                                </h5>
                            </Row>
                        </Container>
                    </Col>
                    <h1 style={{marginTop: '1em'}}>What is your sponsor level ></h1>
                    <Col md={12}>
                        <Row>
                            <Col md={3} style={{background: '#fff', padding: '1em', borderRight: 'solid 1px #eee'}}>
                                <p style={{
                                    padding: "1em",
                                    backgroundImage: "linear-gradient(to right, rgb(229,199,173), rgb(182,152,124))",
                                }}>Platinum Sponsor</p>
                                <Link to={"/sponsor"}>
                                    <button style={{
                                        color: '#fff',
                                        background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                        border: 'none',
                                        width: '6em',
                                        height: '2em',
                                    }}>{this.props.t("LearnMore")}</button>
                                </Link>
                            </Col>
                            <Col md={3} style={{background: '#fff', padding: '1em', borderRight: 'solid 1px #eee'}}>
                                <p style={{
                                    padding: "1em",
                                    backgroundImage: "linear-gradient(to right, rgb(239,205,109), rgb(215,159,61))",
                                }}>Gold Sponsor</p>
                                <Link to={"/sponsor"}>
                                    <button style={{
                                        color: '#fff',
                                        background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                        border: 'none',
                                        width: '6em',
                                        height: '2em',
                                    }}>{this.props.t("LearnMore")}</button>
                                </Link>
                            </Col>
                            <Col md={3} style={{background: '#fff', padding: '1em', borderRight: 'solid 1px #eee'}}>
                                <p style={{
                                    padding: "1em",
                                    backgroundImage: "linear-gradient(to right, rgb(228,226,227), rgb(195,193,196))",
                                }}>Silver Sponsor</p>
                                <Link to={"/sponsor"}>
                                    <button style={{
                                        color: '#fff',
                                        background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                        border: 'none',
                                        width: '6em',
                                        height: '2em',
                                    }}>{this.props.t("LearnMore")}</button>
                                </Link>
                            </Col>
                            <Col md={3} style={{background: '#fff', padding: '1em'}}>
                                <p style={{
                                    padding: "1em",
                                    backgroundImage: "linear-gradient(to right, rgb(166,219,246), rgb(77,164,216))",
                                }}>Normal Sponsor</p>
                                <Link to={"/sponsor"}>
                                    <button style={{
                                        color: '#fff',
                                        background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                        border: 'none',
                                        width: '6em',
                                        height: '2em',
                                    }}>{this.props.t("LearnMore")}</button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>);
    };
}

export default withTranslation()(Faq);
