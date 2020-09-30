import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                            background: '#000',
                            border: 'none',
                            borderRadius: '100em',
                        }}>Learn More
                        </button>
                    </a>
                </Col>
            </Row>
        </Container>);
    };
}

export default Home;
