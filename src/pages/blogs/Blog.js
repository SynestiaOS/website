import React, {Component} from 'react';
import './Blog.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/ll.png";
import SnapShotScreen from "../../static/images/WechatIMG5497.jpeg";

class Blog extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Sponsor">
            <Row style={{height: '16em', textAlign: 'center', paddingTop: '4em'}}>
                <Col style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "auto", paddingBottom: 'auto', marginBottom: 0, padding: 0}}>
                    <Image src={Logo} className="logo-img"/>
                    <h1 style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Blog</h1>
                    <p style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Our blog and status updates</p>
                </Col>
            </Row>
            <Row style={{background: '#fff', padding: 0}}>
                <Col md={4} style={{padding: '2em'}}>
                    <Image style={{width:'100%'}} src={SnapShotScreen} />
                </Col>
                <Col md={8} style={{paddingTop: '3em'}}>
                    <h3>We released the first development version 0.1.1</h3>
                    <p><strong>Core Team</strong>&nbsp;&nbsp;&nbsp;&nbsp; Wed, 29 Jul 2020 23:46:41 GMT</p>
                    <Container>
                        <Row>
                            <p>This version supports Raspberry Pi 2, which implements basic data structures such as virtual memory management, multi-thread management, heap memory management, and linked lists. We also did basic unit testing and developed a simple 2D/3D graphics library. Basic GUI library, and system calls.</p>
                        </Row>
                    </Container>
                    <a href={"https://github.com/SynestiaOS/SynestiaOS/releases/tag/kernel"}>GO >></a>
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

export default Blog;
