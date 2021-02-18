import React, {Component} from 'react';
import './Resources.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import LogoBlack from '../../static/images/logo/高清Logo/透明底反黑图-2.png';
import LogoColor from '../../static/images/logo/高清Logo/logo配色图-2.png';
import LogoWhite from '../../static/images/logo/高清Logo/黑色底白色字-2.png';
import Logo from '../../static/images/logo/高清Logo/透明底logo-2.png';

class Resources extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<Container className="Resources">

            <Row style={{textAlign: 'left', paddingTop: '2em', paddingBottom: '2em'}}>
                <Col md={1}/>
                <Col md={10}>
                    <h1>{this.props.t("Resources")}</h1>
                    <h4>Here are some resources and files you may need！</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '2em', paddingBottom: '2em'}}>
                <Col md={1}/>
                <Col md={10}>
                    <Row>
                        <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <h1>Logo Resources ></h1>
                        </Col>
                        <Col md={3} style={{
                            textAlign: 'center',
                            background: '#fff',
                            height: '15em',
                            padding: 0,
                            borderRight: 'solid 1px #eee',
                            borderBottom: 'solid 1px #eee'
                        }}>
                            <Link to={"/faq"} style={{color: '#000'}}>
                                <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto', padding: 0,}}>
                                    <img style={{width: "100%", height: "15em"}}
                                         alt="FAQ"
                                         src={LogoBlack}/>
                                </Col>
                            </Link>
                        </Col>
                        <Col md={3} style={{
                            textAlign: 'center',
                            background: '#fff',
                            height: '15em',
                            padding: 0,
                            borderRight: 'solid 1px #eee',
                            borderBottom: 'solid 1px #eee'
                        }}>
                            <Link to={"/faq"} style={{color: '#000'}}>
                                <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto', padding: 0,}}>
                                    <img style={{width: "100%", height: "15em"}}
                                         alt="FAQ"
                                         src={LogoColor}/>
                                </Col>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };
}

export default withTranslation()(Resources);
