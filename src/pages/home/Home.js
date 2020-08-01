import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/ll.png";
import {Button, Form} from "react-bootstrap";
import IOT from '../../static/images/iot.png';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (<Container className="Home">
            <Row style={{height: '16em', textAlign: 'center', paddingTop: '4em'}}>
                <Col style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "auto", paddingBottom: 'auto', marginBottom: 0, padding: 0}}>
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
                <Row style={{paddingTop: "4em", textAlign: 'center', marginLeft: '-2em'}}>
                    <Col md={12} style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', padding: 0}}>
                        <Image src={Logo} className="logo-lg" rounded/>
                    </Col>
                    <Col md={12} style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, padding: 0}}>
                        <h1 style={{color: '#fff', fontWeight: 'bold', fontSize: '5em'}}>Synestia&nbsp;&nbsp;<span
                            style={{fontWeight: 'lighter'}}>OS</span></h1>
                        <h4 style={{color: '#fff'}}>A new operating system for IOT devices</h4>
                        <a href={"https://github.com/SynestiaOS/SynestiaOS"}
                           style={{fontWeight: 'normal', marginTop: '2em', marginLeft: 'auto', marginRight: 'auto'}}>Learn More</a>
                    </Col>
                </Row>
            </Row>

            <Row style={{textAlign: 'left'}}>
                <Col md={5} style={{height: '30em', padding: 0,}}>
                    <Container style={{
                        background: "url(https://dynamic.thoughtworks.com/landing_pages/content_collection1-5e60d07874090fbbf3d363f2e10755da.jpeg)",
                        padding: '1em',
                        marginTop: '1em',
                        height: '15em'
                    }}>
                        <Container style={{background: "hsla(250 ,10% ,30%,.3)",height:'13em'}}>
                            <h5 style={{background: '#fff', padding: '0.3em', fontWeight: 'bold', display: 'inline-block'}}>Create With Synestia</h5>
                            <h2 style={{color: '#fff'}}>Synestia Develop Resources</h2>
                            <h6 style={{color: '#fff'}}>Build your own iot device with Synestia</h6>
                            <a href={"https://github.com/SynestiaOS/SynestiaOS"} style={{color:'#fff',fontWeight: 'normal', marginTop: '2em'}}>Learn More</a>
                        </Container>
                    </Container>

                    <Container style={{
                        background: "url(https://dynamic.thoughtworks.com/landing_pages/content_collection1-5e60d07874090fbbf3d363f2e10755da.jpeg)",
                        padding: '1em',
                        marginTop: '1em',
                        height: '15em'
                    }}>
                        <Container style={{background: "hsla(250 ,10% ,30%,.3)",height:'13em'}}>
                            <h5 style={{background: '#fff', padding: '0.3em', fontWeight: 'bold', display: 'inline-block'}}>Request Issues</h5>
                            <h2 style={{color: '#fff'}}>Communicate with develop team</h2>
                            <h6 style={{color: '#fff'}}>Request new feature you want us to add</h6>
                            <a href={"https://github.com/SynestiaOS/SynestiaOS/issues/new/choose"} style={{color:'#fff',fontWeight: 'normal', marginTop: '2em'}}>Learn
                                More</a>
                        </Container>
                    </Container>
                </Col>

                <Col md={7} style={{padding: 0, paddingLeft: '1em'}}>
                    <Container style={{
                        background: "url(https://dynamic.thoughtworks.com/landing_pages/content_collection1-5e60d07874090fbbf3d363f2e10755da.jpeg)",
                        padding: '1em',
                        marginTop: '1em',
                        height: '31em'
                    }}>
                        <Container style={{background: "hsla(250 ,10% ,30%,.3)",height:'29em'}}>
                            <h5 style={{background: '#fff', padding: '0.3em', fontWeight: 'bold', display: 'inline-block'}}>Report Bugs</h5>
                            <h2 style={{color: '#fff'}}>Work with Synestia team</h2>
                            <h6 style={{color: '#fff'}}>Report the bug you found to make Synestia Better</h6>
                            <a href={"https://github.com/SynestiaOS/SynestiaOS/issues/new/choose"} style={{color:'#fff',fontWeight: 'normal', marginTop: '2em'}}>Learn
                                More</a>
                        </Container>
                    </Container>
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
                <Col md={6} style={{paddingLeft: '2em'}}>
                    <Image style={{width: '100%', marginTop: '3em'}} src={IOT}/>
                </Col>
                <Col md={6} style={{paddingLeft: '2em'}}>
                    <h1 style={{color: '#fff'}}>What's Next?</h1>
                    <h6 style={{color: '#fff'}}>Get the Zion Labs newsletter for updates on our latest tech and product innovations.</h6>

                    <Form style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{color: '#fff', fontWeight: 'normal'}}>Your Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={{borderRadius: 0, border: 'none', height: '3em'}}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" style={{color: '#fff', fontWeight: 'normal'}}
                                        label="I'm okay with ZionLab handling my info as explained in this"/>
                        </Form.Group>
                        <Button variant="primary" size="lg" style={{height: '1.8em', lineHeight: '1em', background: '#006fff', borderRadius: '2px'}}
                                block>
                            Subscribe
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row style={{padding: 0, background: '#000', textAlign: 'left', paddingTop: '4em', paddingBottom: '4em', color: '#fff'}}>
                <Col md={12} style={{padding: 0, textAlign: 'center'}}>
                    <img className="mb4"
                         src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0NiA0MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SWNvbjwvdGl0bGU+PGcgZmlsbD0iIzlDOUNGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEuMTQ0IDI2LjQ5OGMyLjEzMyAyLjEgNS4wMTggMy4yNzQgOC4wOTIgMy4yNzQgMy4wNzUgMCA1Ljg5OC0xLjE3MyA4LjA5My0zLjI3NGwyLjYzMi0yLjU5M2MuNTAzLS40OTUuNTAzLTEuMjM2IDAtMS43My0uNTAzLS40OTYtMS4yNTUtLjQ5Ni0xLjc1NyAwbC0yLjY5NiAyLjUzYy0xLjY5MyAxLjY2Ny0zLjg4OCAyLjU5My02LjI3NCAyLjU5My0yLjM4NSAwLTQuNjQyLS45MjYtNi4yNzItMi41OTJMNS43NSAxNy42NjRDMi4zIDE0LjI2NyAyLjMgOC43MDggNS43NSA1LjI1YzMuNDUtMy4zOTcgOS4wOTUtMy4zOTcgMTIuNjA3IDBsMi4zMiAyLjI4NGMuNTAzLjQ5NSAxLjI1NS40OTUgMS43NTggMCAuNTAzLS40OTUuNTAzLTEuMjM2IDAtMS43M2wtMi4zMi0yLjI4NUMxNS42NjMtLjg2NyA4LjQ1LS44NjcgMy45OTUgMy41MmMtNC40NTIgNC4zODQtNC40NTIgMTEuNDg3IDAgMTUuODcybDcuMTUgNy4xMDZ6Ii8+PHBhdGggZD0iTTE2LjAzOCAxOC4xNmMtLjUwMy40OTUtLjUwMyAxLjIzNSAwIDEuNzMuNTAzLjQ5NiAxLjI1NS40OTYgMS43NTcgMGwyLjY5Ni0yLjU5NmMxLjY5My0xLjY2NiAzLjg4OC0yLjU5MiA2LjI3NC0yLjU5MiAyLjM4NSAwIDQuNjQyLjkyNiA2LjI3MiAyLjU5Mmw3LjIxNCA3LjEwM2MzLjQ1IDMuMzk3IDMuNDUgOC45NTYgMCAxMi40MTQtMy40NSAzLjM5OC05LjA5NSAzLjM5OC0xMi42MDcgMGwtMi4zMi0yLjI4M2MtLjUwMy0uNDk1LTEuMjU1LS40OTUtMS43NTggMC0uNTAzLjQ5NS0uNTAzIDEuMjM2IDAgMS43M2wyLjMyIDIuMjg1YzIuMTk1IDIuMTYyIDUuMTQyIDMuMjc0IDguMDkyIDMuMjc0IDIuOTQ3IDAgNS44MzYtMS4xMTIgOC4wOTMtMy4yNzQgNC40NTMtNC4zODQgNC40NTMtMTEuNDg3IDAtMTUuODczTDM0Ljg1NiAxNS41Yy0yLjEzMy0yLjEtNS4wMTgtMy4yNzQtOC4wOTItMy4yNzQtMy4wNzUgMC01Ljg5OCAxLjE3My04LjA5MyAzLjI3NEwxNi4wNCAxOC4xNnoiLz48L2c+PC9zdmc+"
                         alt="additional link"/>
                </Col>
                <Col md={12} style={{padding: 0, textAlign: 'center', marginTop: '2em'}}>
                    <h1>Tutorials & Resources</h1>
                </Col>
                <Col md={12} style={{padding: 0, textAlign: 'center', marginTop: '2em'}}>
                    <Row>
                        <Col md={6} style={{borderRight: 'solid 1px #fff'}}>
                            <h4>Kernel, Application develop tutorials</h4>
                            <Link to={"https://github.com/SynestiaOS"}>github.com</Link>
                        </Col>
                        <Col md={6}>
                            <h4>Board,Hardware and devices support</h4>
                            <Link to={"https://github.com/SynestiaOS"}>github.com</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{padding: 0, textAlign: 'left'}}>
                <Col style={{padding: '5em'}}>
                    <span style={{
                        color: '#fff',
                        background: '#000',
                        fontWeight: 'bold',
                        fontSize: '2em',
                        padding: '0.1em'
                    }}>Mission</span>

                    <h6 style={{color: '#000', marginTop: '2em'}}>Our mission is to keep the operating system open to innovators, creators, and
                        builders for the IoT. SynestiaOS is set to change the future of the IoT device platform. The ability for anyone to access and
                        enjoy IoT experiences is critical. This is why ZionLab builds the SynestiaOS and make it open-source.</h6>
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
