import React, {Component} from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col, Image} from "react-bootstrap";
import {withTranslation} from 'react-i18next'

class Footer extends Component{
    render() {
        return (
            <Container className="Footer">
                <Row>
                    <Col md={1}/>
                    <Col md={2} style={{paddingLeft: '2em', paddingRight: '2em'}}>
                        <Image src={'./imgs/WeiJi.png'}/>
                    </Col>
                    <Col md={8} style={{paddingLeft: '3em', paddingRight: '8em'}}>
                        <Row>
                            <Col md={3}>
                                <h5 style={{marginBottom: '0.5em'}}>{this.props.t("About")}</h5>
                                <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                                   href={"/home"}>{this.props.t("AboutUS")}</a>
                                <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                                   href={"/home"}>{this.props.t("ContactUS")}</a>
                            </Col>
                            <Col md={3}>
                                <h5 style={{marginBottom: '0.5em'}}>{this.props.t("Developer")}</h5>
                                <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                                   href={"/docs"}>{this.props.t("Docs")}</a>
                                <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                                   href={"/blog"}>{this.props.t("News")}</a>
                                <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                                   href={"/faq"}>{this.props.t("FAQ")}</a>
                            </Col>
                            <Col md={3}>
                                <h5 style={{marginBottom: '0.5em'}}>{this.props.t("Support")}</h5>
                                <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                                   href={"/sponsor"}>{this.props.t("Sponsor")}</a>
                                <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                                   href={"https://patreon.com/SynestiaOS"}>{this.props.t("Donate")}</a>
                            </Col>
                            <Col md={3}>
                                <h5 style={{marginBottom: '0.5em'}}>{this.props.t("AddLink")}</h5>
                                <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                                   href={"http://kerneltravel.net"}>{this.props.t("LinuxKernelTravel")}</a>
                                <a style={{color: '#888', fontWeight: 'lighter', margin: 0, padding: 0, display: 'block'}}
                                   href={"https://templeos.org/"}>{this.props.t("RIP")}</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withTranslation()(Footer);
