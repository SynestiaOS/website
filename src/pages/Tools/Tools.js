import React, {Component} from 'react';
import './Tools.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

class Tools extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Tools">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Tools</h1>
                    <h4>Some tools you might use</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '2em', paddingBottom: '0em'}}>
                <h1>Tools ></h1>
                <Col md={12} style={{padding: '2em', background: '#fff'}}>
                    <Container style={{marginBottom: 0}}>
                        <Row>
                            <h4>ARM GCC</h4>
                        </Row>
                        <Row>
                            <p>The GNU Arm Embedded Toolchain is a ready-to-use, open-source suite of tools for C, C++ and assembly programming. The GNU Arm Embedded Toolchain targets the 32-bit Arm Cortex-A, Arm Cortex-M, and Arm Cortex-R processor families. The GNU Arm Embedded Toolchain includes the GNU Compiler (GCC) and is available free of charge directly from Arm for embedded software development on Windows, Linux, and Mac OS X operating systems.</p>
                        </Row>
                        <Row>
                            <a href={"https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads"}>Goto Download Page</a>
                        </Row>
                    </Container>
                </Col>
                <Col md={12} style={{padding: '2em', background: '#fff',borderTop:'1px solid rgb(238, 238, 238)'}}>
                    <Container style={{marginBottom: 0}}>
                        <Row>
                            <h4>CLion</h4>
                        </Row>
                        <Row>
                            <p>A cross-platform IDE for C and C++</p>
                        </Row>
                        <Row>
                            <a href={"https://www.jetbrains.com/clion/"}>Goto Download Page</a>
                        </Row>
                    </Container>
                </Col>
                <Col md={12} style={{padding: '2em', background: '#fff',borderTop:'1px solid rgb(238, 238, 238)'}}>
                    <Container style={{marginBottom: 0}}>
                        <Row>
                            <h4>Visual Studio Code</h4>
                        </Row>
                        <Row>
                            <p>Code editing. Redefined.</p>
                        </Row>
                        <Row>
                            <a href={"https://code.visualstudio.com/"}>Goto Download Page</a>
                        </Row>
                    </Container>
                </Col>
                <Col md={12} style={{padding: '2em', background: '#fff',borderTop:'1px solid rgb(238, 238, 238)'}}>
                    <Container style={{marginBottom: 0}}>
                        <Row>
                            <h4>Docker Desktop</h4>
                        </Row>
                        <Row>
                            <p>The fastest way to containerize applications on your desktop</p>
                        </Row>
                        <Row>
                            <a href={"https://www.docker.com/products/docker-desktop"}>Goto Download Page</a>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>);
    };
}

export default Tools;
