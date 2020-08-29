import React, {Component} from 'react';
import './Blog.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import LogoRe from "../../static/images/logo_re.png";
import {blogsData} from './blogsData';

class Blog extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Sponsor">
            <Row style={{height: '16em', textAlign: 'center', paddingTop: '2em'}}>
                <Col style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "auto", paddingBottom: 'auto', marginBottom: 0, padding: 0}}>
                    <Image src={LogoRe} className="logo-img"/>
                    <h1 style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Blog</h1>
                    <p style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Our blog and status updates</p>
                </Col>
            </Row>
            {blogsData.map((item,index)=>{
                return  <Row style={{background: '#fff', padding: 0}}>
                    <Col md={4} style={{padding: '2em'}}>
                        <Image style={{width:'100%'}} src={item.image} />
                    </Col>
                    <Col md={8} style={{paddingTop: '3em'}}>
                        <h3>{item.title}</h3>
                        <p><strong>{item.author}</strong>&nbsp;&nbsp;&nbsp;&nbsp; {item.time}</p>
                        <Container>
                            <Row>
                                <p>{item.content}</p>
                            </Row>
                        </Container>
                        <a href={item.url}>GO >></a>
                    </Col>
                </Row>
            })}
        </Container>);
    };

    renderMarkdownDoc(markdown) {
        this.setState({
            currentMarkDown: markdown
        })
    }
}

export default Blog;
