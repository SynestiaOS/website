import React, {Component} from 'react';
import './Blog.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {blogsData} from './blogsData';
import {Link} from "react-router-dom";

class Blog extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Sponsor">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>News & Events</h1>
                    <h4>Our new and status updates</h4>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', padding: 0}}>
                <Col md={12} style={{marginTop: "1em"}}>
                    <h1>Our Posts > </h1>
                </Col>
                {blogsData.map((item, index) => {
                    let borderR = 'solid 1px #eee';
                    if (index % 2 !== 0) {
                        borderR = 'none';
                    }

                    return <Col md={6} style={{background: '#fff', padding: 0, borderRight: borderR}}>
                        <Row>
                            <Col md={6} style={{padding: '1em'}}>
                                <Image style={{width: '100%'}} src={item.image}/>
                            </Col>
                            <Col md={6} style={{paddingTop: '2em', paddingLeft: '0'}}>
                                <h3>{item.title}</h3>
                                <p>{item.time}</p>
                                <Link to={'/blog-detail/' + index}
                                      style={{fontWeight: 'normal', marginTop: '2em', marginLeft: 'auto', marginRight: 'auto'}}>
                                    <button style={{
                                        color: '#fff',
                                        background: '#000',
                                        border: 'none',
                                        borderRadius: '100em',
                                    }}>Learn More
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                })}
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
