import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/ll.png";
import {Button, Form} from "react-bootstrap";

import IOT from '../../static/images/iot.png';

class Home extends Component {
    render() {
        return (<Container className="Home">
            <Row style={{height: '15em', textAlign: 'center', paddingTop: '3em'}}>
                <Col style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "auto", paddingBottom: 'auto'}}>
                    <Image src={Logo} className="logo-img"/>
                    <h1 style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Open Source Operating System</h1>
                </Col>
            </Row>
            <Row style={{
                backgroundImage: "linear-gradient(180deg,#381863 0,#000 80%)",
                boxShadow: "inset 0 100px 200px rgba(0,0,0,.5)",
                height: '25em',
                overflow: 'hidden',
            }}>
                <div className={"ribbon"}>NEW</div>
                <Row style={{paddingTop: "8em", textAlign: 'center', marginLeft: 0}}>
                    {/*<Col md={12} style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>*/}
                    {/*    /!*<Image src={Logo} className="logo-img"/>*!/*/}
                    {/*</Col>*/}
                    <Col md={12} style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                        <h1 style={{color: '#fff', fontWeight: 'light'}}>SynestiaOS</h1>
                        <h4 style={{color: '#fff'}}>A new operating system for IOT devices</h4>
                    </Col>
                </Row>
            </Row>

            <Row style={{textAlign: 'left'}}>
                <Col style={{background: '#000', padding: '1em', marginTop: '1em'}}>
                    <h5 style={{background: '#fff', padding: '0.3em', fontWeight: 'bold', display: 'inline-block'}}>Create With Synestia</h5>
                    <h2 style={{color: '#fff'}}>Synestia Develop Resources</h2>
                    <h6 style={{color: '#fff'}}>Build your own iot device with Synestia</h6>
                    <a href={"https://github.com/SynestiaOS/SynestiaOS"} style={{fontWeight: 'normal', marginTop: '2em'}}>Learn More</a>
                </Col>

                <Col style={{background: '#000', padding: '1em', marginTop: '1em', marginLeft: '1em'}}>
                    <h5 style={{background: '#fff', padding: '0.3em', fontWeight: 'bold', display: 'inline-block'}}>Request Issues</h5>
                    <h2 style={{color: '#fff'}}>Communicate with develop team</h2>
                    <h6 style={{color: '#fff'}}>Request new feature you want us to add</h6>
                    <a href={"https://github.com/SynestiaOS/SynestiaOS/issues/new/choose"} style={{fontWeight: 'normal', marginTop: '2em'}}>Learn
                        More</a>
                </Col>

                <Col style={{background: '#000', padding: '1em', marginTop: '1em', marginLeft: '1em'}}>
                    <h5 style={{background: '#fff', padding: '0.3em', fontWeight: 'bold', display: 'inline-block'}}>Report Bugs</h5>
                    <h2 style={{color: '#fff'}}>Work with Synestia team</h2>
                    <h6 style={{color: '#fff'}}>Report the bug you found to make Synestia Better</h6>
                    <a href={"https://github.com/SynestiaOS/SynestiaOS/issues/new/choose"} style={{fontWeight: 'normal', marginTop: '2em'}}>Learn
                        More</a>
                </Col>
            </Row>
            <Row style={{padding: '4em', textAlign: 'center'}}>
                <h1 style={{padding: '0.1em', marginLeft: 'auto', marginRight: 'auto'}}>Build IOT Devices with Synestia</h1>
                <h4 style={{color: '#333', marginLeft: 'auto', marginRight: 'auto'}}>An Open Source, standards-based software platform for IOT
                    devices, including smartwatch, TVs and automotive infotainment platforms.</h4>
                <a href={"https://github.com/SynestiaOS/SynestiaOS"}
                   style={{fontWeight: 'normal', marginTop: '2em', marginLeft: 'auto', marginRight: 'auto'}}>Learn More</a>
            </Row>

            <Row style={{background: 'rgb(36, 34, 130)', padding: '3em', textAlign: 'left'}}>
                <Col style={{paddingLeft: '2em'}}>
                    <Image style={{width: '100%', marginTop: '2em'}} src={IOT}/>
                </Col>
                <Col style={{paddingLeft: '2em'}}>
                    <h1 style={{color: '#fff'}}>What's Next?</h1>
                    <h6 style={{color: '#fff'}}>Get the Zion Labs newsletter for updates on our latest tech and product innovations.</h6>

                    <Form style={{marginTop: '1em'}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{color: '#fff', fontWeight: 'normal'}}>Your Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={{borderRadius: 0}}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" style={{color: '#fff', fontWeight: 'normal'}}
                                        label="I'm okay with ZionLab handling my info as explained in this"/>
                        </Form.Group>
                        <Button variant="primary" size="lg" style={{height: '1.8em', lineHeight: '1em', background: '#006fff'}} block>
                            Subscribe
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row style={{padding: 0, textAlign: 'left'}}>
                <Col style={{padding: '5em'}}>
                    <span style={{color: '#fff', background: '#000', fontWeight: 'bold', fontSize: '2em', padding: '0.1em'}}>ZionLab</span>
                    <span style={{
                        color: '#fff',
                        background: '#000',
                        fontWeight: 'bold',
                        marginLeft: '0.2em',
                        fontSize: '2em',
                        padding: '0.1em'
                    }}>SynestiaOS</span>

                    <h6 style={{color: '#000', marginTop: '2em'}}>Our mission is to keep the operating system open to innovators, creators, and
                        builders for the IoT. SynestiaOS is set to change the future of the IoT device platform. The ability for anyone to access and
                        enjoy IoT experiences is critical. This is why ZionLab set out to bring SynestiaOS to IoT devices.</h6>
                </Col>
                <Col style={{
                    paddingLeft: '2em',
                    background: 'url("https://dynamic.thoughtworks.com/landing_pages/content_collection1-5e60d07874090fbbf3d363f2e10755da.jpeg")'
                }}>
                </Col>
            </Row>
        </Container>);
    };
}

export default Home;
