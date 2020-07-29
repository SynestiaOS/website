import React, {Component} from 'react';
import './Sponsor.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/ll.png";

class Sponsor extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Sponsor">
            <Row style={{height: '16em', textAlign: 'center', paddingTop: '4em'}}>
                <Col style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "auto", paddingBottom: 'auto', marginBottom: 0, padding: 0}}>
                    <Image src={Logo} className="logo-img"/>
                    <h1 style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Sponsors</h1>
                    <p style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Help us do better</p>
                </Col>
            </Row>
            <Row style={{background: '#fff', padding: 0}}>
                <Col md={6} style={{padding: '2em'}}>
                    <h3>What We Need?</h3>
                    <p>We need some open source hardware to test the function and performance of our operating system in different scenarios.</p>
                    <p>The following is the hardware platform we currently need.</p>
                    <Container>
                        <Row><a href={"https://www.pine64.org/pinebook-pro/"}>pinebook-pro</a></Row>
                        <Row><a href={"https://www.pine64.org/pinetab/"}>pinetab</a></Row>
                        <Row><a href={"https://www.pine64.org/pinephone/"}>pinephone</a></Row>
                        <Row><a href={"https://www.pine64.org/pinetime/"}>pinetime</a></Row>
                    </Container>
                    <p></p>
                    <p>If you are willing to help us, please contact us:</p>
                    <a href={"mailto:nerosoft@outlook.com"}>nerosoft@outlook.com</a>
                    <p>or <a style={{color: '#000', fontWeight: 'lighter', margin: 0, padding: 0}}
                             href={"https://patreon.com/SynestiaOS"}>Donate</a></p>

                </Col>
                <Col md={6} style={{paddingTop: '2em'}}>
                    <h3>Sponsors</h3>
                    <p>Thank the following sponsors for their support to the team, thank you very much.</p>
                    <Container>
                        <Row><a href={"https://blog.torchz.net/"}>帆叔</a></Row>
                    </Container>
                </Col>
            </Row>
        </Container>);
    };

    renderMarkdownDoc(markdown) {
        this.setState({
            currentMarkDown: markdown
        })
    }
}

export default Sponsor;
