import React, {Component} from 'react';
import './Board.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Board extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Board">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col md={1}/>
                <Col md={10}>
                    <h1>Board</h1>
                    <h4>The Boards we support.</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '2em', paddingBottom: '2em'}}>
                <Col md={1}/>
                <Col md={10}><h1>Boards ></h1></Col>
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
                                    <h4>Raspberry Pi Model A, B, B+</h4>
                                </Row>
                                <Row>
                                    <p>Is the raspberry pi you know.</p>
                                </Row>
                                <Row>
                                    <a href={"https://www.raspberrypi.org/"}>Detail</a>
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
                                    <p>I hope to support the board.</p>
                                </Row>
                                <Row>
                                    <a href={"https://github.com/SynestiaOSl"}>Request</a>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };
}

export default Board;
