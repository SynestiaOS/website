import React, {Component} from 'react';
import './Cpu.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Cpu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Cpu">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col md={1}/>
                <Col md={10}>
                    <h1>Cpu</h1>
                    <h4>Ths Cpus we support</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '2em', paddingBottom: '2em'}}>
                <Col md={1}/>
                <Col md={10}><h1>Cpu ></h1></Col>
                <Col md={1}/>
                <Col md={1}/>
                <Col md={10} style={{paddingLeft: '2em', paddingRight: '2em'}}>
                    <Row>
                        <Col md={6} style={{
                            padding: '2em',
                            background: '#fff',
                            borderRight: '1px solid rgb(238, 238, 238)',
                            borderBottom: '1px solid rgb(238, 238, 238)'
                        }}>
                            <Container style={{marginBottom: 0}}>
                                <Row>
                                    <h4>BCM 2835</h4>
                                </Row>
                                <Row>
                                    <p>This is the Broadcom chip used in the Raspberry Pi Model A, B, B+, the Compute Module, and the Raspberry Pi Zero.</p>
                                </Row>
                                <Row>
                                    <a href={"https://datasheets.raspberrypi.org/bcm2835/bcm2835-peripherals.pdf"}>Data Sheet</a>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={6} style={{
                            padding: '2em',
                            background: '#fff',
                            borderRight: '1px solid rgb(238, 238, 238)',
                            borderBottom: '1px solid rgb(238, 238, 238)'
                        }}>
                            <Container style={{marginBottom: 0}}>
                                <Row>
                                    <h4>NEW</h4>
                                </Row>
                                <Row>
                                    <p>I hope to support the chip.</p>
                                </Row>
                                <Row>
                                    <a href={"https://github.com/SynestiaOS"}>Request</a>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>  
        </Container>);
    };
}

export default Cpu;
