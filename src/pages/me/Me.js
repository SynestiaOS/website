import React, {Component} from 'react';
import './Me.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {withTranslation} from "react-i18next";

class Me extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<Container className="Me">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>{this.props.t("Me")}</h1>
                    <h4>Me</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '1em'}}>
                <Col md={12}>
                    <h2>{this.props.t("Me")} ></h2>
                    <Row style={{
                        background: '#fff',
                        borderRight: '1px solid rgb(238, 238, 238)',
                        borderBottom: '1px solid rgb(238, 238, 238)'
                    }}>
                        <Col md={6} style={{borderRight: '1px solid rgb(238, 238, 238)',}}>
                            <Container style={{padding: '0'}}>
                                sss
                            </Container>
                        </Col>
                        <Col md={6}>
                            <Container style={{padding: '0'}}>
                                aaa
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };
}

export default withTranslation()(Me);
