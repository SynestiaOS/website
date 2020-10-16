import React, {Component} from 'react';
import './Videos.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {videosData} from './videosData';
import 'video-react/dist/video-react.css';

class Videos extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Videos">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Videos </h1>
                    <h4>Our videos info or tutorial updates</h4>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', padding: 0}}>
                <Col md={12} style={{marginTop: "1em"}}>
                    <h1>Dev Log > </h1>
                </Col>
                {videosData.map((item, index) => {

                    return <Col md={12} style={{background: '#fff', padding: 0}}>
                        <Row>
                            <Col md={8} style={{paddingLeft: '1em'}}>
                                <iframe width={'100%'} height={'400px'} src={item.url} frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </Col>
                            <Col md={4} style={{paddingTop: '2em', paddingLeft: '0'}}>
                                <h3>{item.title}</h3>
                                <p>{item.time}</p>
                            </Col>
                        </Row>
                    </Col>
                })}
            </Row>
        </Container>);
    };
}

export default Videos;
