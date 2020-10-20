import React, {Component} from 'react';
import './Sponsor.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Button, Modal, OverlayTrigger, Popover} from "react-bootstrap";
import WePay from "../../static/images/wepay.png"
import AliPay from "../../static/images/alipay.png"
import LogoRe from "../../static/images/logo_re.png";
import {sponsorsData} from "./sponsorsData";

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
            <Modal.Body className="show-grid"  style={{borderRadius:'0'}}>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <h5>WeChatPay</h5>
                            <Image style={{width: '100%'}} src={WePay}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <h5>AliPay</h5>
                            <Image style={{width: '100%'}} src={AliPay}/>
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
                    background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                    border: 'none',
                    borderRadius: '0'
                }} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


class Sponsor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
        }
    }


    render() {
        const popup = function (item, gradient) {
            return (
                <Popover style={{borderRadius: '0',border:'solid 1px #000'}} id="popover-basic">
                    <Popover.Title as="h3" style={{
                        borderRadius: '0',
                        borderBottom:'solid 1px #000',
                        background: gradient
                    }}>{item.name}</Popover.Title>
                    <Popover.Content style={{padding: 0}}>
                        <Row style={{margin: 0, padding: 0}}>
                            <Col md={4} style={{margin: 0, padding: 0}}>
                                {item.img ? <Image style={{width: '6em', height: '6em', padding: '0.5em'}} src={item.img}/> :
                                    <Image style={{width: '6em', height: '6em', padding: '0.5em'}} src={LogoRe}/>}
                            </Col>
                            <Col md={8} style={{padding: '1em', paddingLeft: '2em', paddingRight: '1.5em'}}>
                                {item.desc ? <Row style={{fontSize: '0.8em'}}>{item.desc}</Row> :
                                    <Row style={{fontSize: '0.8em'}}>Thanks for {item.name}</Row>}
                                <Row><a href={item.url}>Learn More</a></Row>
                            </Col>
                        </Row>
                    </Popover.Content>
                </Popover>
            );
        };
        return (<Container className="Sponsor">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Sponsors</h1>
                    <h4>Help us do better</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0}}>
                <Col md={6} style={{paddingTop: '1em', paddingRight: '1em'}}>
                    <h3 style={{padding: 0, marginTop: '0.5em'}}>What We Need ></h3>
                    <Row style={{background: '#fff', padding: '2em'}}>
                        <p>We need some open source hardware to test the function and performance of our operating system in different scenarios.</p>
                        <p>The following is the hardware platform we currently need.</p>
                        <Container>
                            <Row><a href={"https://www.pine64.org/pinebook-pro/"}>pinebook-pro(1)</a></Row>
                            <Row><a href={"https://www.pine64.org/pinetab/"}>pinetab(1)</a></Row>
                            <Row><a href={"https://www.pine64.org/pinephone/"}>pinephone(1)</a></Row>
                            <Row><a href={"https://www.pine64.org/pinetime/"}>pinetime(3)</a></Row>
                        </Container>

                    </Row>
                    <Row style={{background: '#fff', padding: 0, paddingLeft: '2em'}}>
                        <p>If you are willing to help us, please contact us:</p>
                    </Row>
                    <Row style={{background: '#fff', padding: 0, paddingLeft: '2em'}}>
                        <p><a href={"mailto:nerosoft@outlook.com"}>nerosoft@outlook.com</a></p>
                    </Row>
                </Col>
                <Col md={6} style={{paddingTop: '1em', paddingLeft: '1em'}}>
                    <h3 style={{padding: 0, marginTop: '0.5em'}}>Our Sponsors ></h3>
                    <Row style={{background: '#fff', padding: '2em'}}>
                        <p>Thank the following sponsors for their support to the team, thank you very much.</p>
                        <Container>
                            <Row>
                                {
                                    sponsorsData.map((item, index) => {
                                        let linearGradient;
                                        switch (item.level) {
                                            case 1:
                                                linearGradient = "linear-gradient(to right, rgb(229,199,173), rgb(182,152,124))";
                                                break;
                                            case 2:
                                                linearGradient = "linear-gradient(to right, rgb(239,205,109), rgb(215,159,61))";
                                                break;
                                            case 3:
                                                linearGradient = "linear-gradient(to right, rgb(228,226,227), rgb(195,193,196))";
                                                break;
                                            case 4:
                                                linearGradient = "linear-gradient(to right, rgb(166,219,246), rgb(77,164,216))";
                                                break;
                                            default:
                                                linearGradient = "linear-gradient(to right, rgb(166,219,246), rgb(77,164,216))";
                                                break;

                                        }
                                        return <OverlayTrigger trigger="click" placement="right" overlay={popup(item, linearGradient)}>
                                            {this.renderSponsor(item, linearGradient)}
                                        </OverlayTrigger>
                                    })
                                }

                            </Row>
                        </Container>

                        <p style={{marginTop: '1em'}}><Button style={{
                            color: '#fff',
                            background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                            border: 'none',
                            borderRadius: '0',
                        }} onClick={() => this.setModalShow(true)}>Be Our Personal Sponsor</Button></p>
                    </Row>
                </Col>
            </Row>
            <DonateModalWithGrid show={this.state.modalShow} onHide={() => this.setModalShow(false)}/>
        </Container>);
    };

    renderSponsor(item, linearGradient) {
        return <p style={{
            padding: "0.3em",
            marginRight: '1em',
            backgroundImage: linearGradient
        }}>{item.name}</p>;

    }

    setModalShow(visible) {
        this.setState({
            modalShow: visible
        });
    }
}

export default Sponsor;
