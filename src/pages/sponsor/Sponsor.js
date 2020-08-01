import React, {Component} from 'react';
import './Sponsor.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/ll.png";
import {Button, Modal} from "react-bootstrap";

import WePay from "../../static/images/wepay.png"
import AliPay from "../../static/images/alipay.png"

function DonateModalWithGrid(props) {
    return (
        <Modal {...props}
               aria-labelledby="contained-modal-title-vcenter"
               dialogClassName="modal-70w">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Donate Us
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <h5>WeChatPay</h5>
                            <Image style={{width:'100%'}} src={WePay}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <h5>AliPay</h5>
                            <Image style={{width:'100%'}} src={AliPay}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <h5>Others</h5>
                            <a style={{fontWeight: 'bold', margin: 0, padding: 0, display: 'block'}}
                               href={"https://patreon.com/SynestiaOS"}>Patreon</a>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{
                    color: '#fff',
                    background: '#000',
                    border: 'none',
                    borderRadius: '0',
                    fontWeight: 'lighter',
                    margin: 0,
                    padding: 0,
                    paddingLeft: '0.2em',
                    paddingRight: '0.2em'
                }} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


class Sponsor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalShow: false
        }
    }

    render() {
        return (<Container className="Sponsor">
            <Row style={{height: '16em', textAlign: 'center', paddingTop: '4em'}}>
                <Col style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "auto", paddingBottom: 'auto', marginBottom: 0, padding: 0}}>
                    <Image src={Logo} className="logo-img"/>
                    <h1 style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Sponsors</h1>
                    <p style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Help us do better</p>
                </Col>
            </Row>
            <Row style={{background: '#fff', padding: 0}}>
                <Col md={6} style={{padding: '2em'}}>
                    <h3>What We Need?</h3>
                    <p>We need some open source hardware to test the function and performance of our operating system in different scenarios.</p>
                    <p>The following is the hardware platform we currently need.</p>
                    <Container>
                        <Row><a href={"https://www.pine64.org/pinebook-pro/"}>pinebook-pro(1)</a></Row>
                        <Row><a href={"https://www.pine64.org/pinetab/"}>pinetab(1)</a></Row>
                        <Row><a href={"https://www.pine64.org/pinephone/"}>pinephone(1)</a></Row>
                        <Row><a href={"https://www.pine64.org/pinetime/"}>pinetime(3)</a></Row>
                    </Container>
                    <p></p>
                    <p>If you are willing to help us, please contact us:</p>
                    <a href={"mailto:nerosoft@outlook.com"}>nerosoft@outlook.com</a>
                    <p>or <Button style={{
                        color: '#fff',
                        background: '#000',
                        border: 'none',
                        borderRadius: '0',
                        fontWeight: 'lighter',
                        margin: 0,
                        padding: 0,
                        paddingLeft: '0.2em',
                        paddingRight: '0.2em'
                    }}
                                  onClick={() => this.setModalShow(true)}>Donate</Button></p>

                </Col>
                <Col md={6} style={{paddingTop: '2em'}}>
                    <h3>Sponsors</h3>
                    <p>Thank the following sponsors for their support to the team, thank you very much.</p>
                    <Container>
                        <Row><a href={"https://blog.torchz.net/"}>Fan·Jiang</a></Row>
                    </Container>
                </Col>
            </Row>
            <DonateModalWithGrid show={this.state.modalShow} onHide={() => this.setModalShow(false)}/>
        </Container>);
    };

    setModalShow(visible) {
        this.setState({
            modalShow: visible
        });
    }

    renderMarkdownDoc(markdown) {
        this.setState({
            currentMarkDown: markdown
        })
    }
}

export default Sponsor;
