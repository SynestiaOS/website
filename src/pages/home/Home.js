import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap";

class Home extends Component {
    render() {
        return (<Container className="Home">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Build IOT Devices with Synestia</h1>
                    <h4>An Open Source, standards-based software platform for IOT
                        devices, including smartwatch, TVs and automotive infotainment platforms.</h4>
                    <a href={"https://github.com/SynestiaOS/SynestiaOS"}
                       style={{fontWeight: 'normal', marginTop: '2em', marginLeft: 'auto', marginRight: 'auto'}}>
                        <button style={{
                            color: '#fff',
                            background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                            transition: 'all .3s ease',
                            height:'2em',
                            width:'6em',
                            border: 'none',
                            borderRadius: '0',
                        }}>Learn More
                        </button>
                    </a>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', paddingTop: '2em'}}>
                <Col md={4}>
                    <h2>Kernel ></h2>
                    <Row style={{background: '#fff', padding: '2em', borderRight: 'solid 1px #eee'}}>
                        <Col md={4}>Thread</Col>
                        <Col md={4}>Scheduler</Col>
                        <Col md={4}>VMM</Col>
                        <Col md={4}>Mutex</Col>
                        <Col md={4}>Semaphore</Col>
                        <Col md={4}>SysCall</Col>
                        <Col md={4}>...</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <h2>Components ></h2>
                    <Row style={{background: '#fff', padding: '2em', borderRight: 'solid 1px #eee'}}>
                        <Col md={4}>libC</Col>
                        <Col md={4}>libMath</Col>
                        <Col md={4}>libGFX</Col>
                        <Col md={4}>libGUI</Col>
                        <Col md={4}>libELF</Col>
                        <Col md={4}>libHTML</Col>
                        <Col md={4}>libJS</Col>
                        <Col md={4}>...</Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <h2>Device ></h2>
                    <Row style={{background: '#fff', padding: '2em'}}>
                        <Col md={6}>RaspberryPi-2</Col>
                        <Col md={6}>RaspberryPi-3</Col>
                        <Col md={6}>RaspberryPi-4</Col>
                        <Col md={6}>...</Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', paddingTop: '2em'}}>
                <Col md={3}>
                    <h2>GitHub ></h2>
                    <Row style={{background: '#fff', padding: '2em', borderRight: 'solid 1px #eee'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <h1 style={{fontWeight: 'bold'}}>945</h1>
                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <h4>Commits</h4>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <h2>&nbsp;</h2>
                    <Row style={{background: '#fff', padding: '2em', borderRight: 'solid 1px #eee'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <h1 style={{fontWeight: 'bold'}}>6</h1>
                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <h4>Contributors</h4>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <h2>&nbsp;</h2>
                    <Row style={{background: '#fff', padding: '2em', borderRight: 'solid 1px #eee'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <h1 style={{fontWeight: 'bold'}}>9</h1>
                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <h4>Forks</h4>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <h2>&nbsp;</h2>
                    <Row style={{background: '#fff', padding: '2em'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <h1 style={{fontWeight: 'bold'}}>50</h1>
                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <h4>Stars</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', paddingTop: '2em'}}>
                <Col md={3}>
                    <h2>Corporate ></h2>
                    <Row style={{background: '#fff', padding: '2em', borderRight: 'solid 1px #eee'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <Image style={{width: '5em', height: '5em', filter: 'grayscale(100%)'}}
                                   src={'https://avatars0.githubusercontent.com/u/66101949?s=200&v=4'}/>

                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <a style={{color: '#000'}} href={'https://security.thoughtworks.cn'}><h3>Zion Lab</h3></a>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <h2>&nbsp;</h2>
                    <Row style={{background: '#fff', padding: '2em'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <Image style={{width: '5em', height: '5em', padding: '0.5em', filter: 'grayscale(100%)'}}
                                   src={'https://raw.githubusercontent.com/CenoOS/CenoOS-IOT/master/docs/docs/img/logo.png'}/>

                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <a style={{color: '#000'}} href={'https://www.cenocloud.com'}><h3>Ceno OS</h3></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };
}

export default Home;
