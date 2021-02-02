import React, {Component} from 'react';
import './Blog.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {blogsData} from './blogsData';
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";

class Blog extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Blog">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>{this.props.t("News")}</h1>
                    <h4>Our new and status updates</h4>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', padding: 0}}>
                <Col md={12} style={{marginTop: "1em"}}>
                    <h1>{this.props.t("Posts")} > </h1>
                </Col>
                {blogsData.map((item, index) => {
                    return <Col key={index} md={6} style={{background: '#fff', padding: 0, borderRight: 'solid 1px #eee',borderBottom:'solid 1px #eee'}}>
                        <Row>
                            <Col md={6} style={{padding: '1em'}}>
                                <Image style={{width: '100%'}} src={item.image}/>
                            </Col>
                            <Col md={6} style={{paddingTop: '2em', paddingLeft: '0'}}>
                                <h4>{item.title}</h4>
                                <p>{item.time}</p>
                                <Link to={'/blog-detail/' + index}
                                      style={{fontWeight: 'normal', marginTop: '2em', marginLeft: 'auto', marginRight: 'auto'}}>
                                    <button style={{
                                        color: '#fff',
                                        background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                        border: 'none',
                                        width:'6em',
                                        height:'2em',
                                    }}>{this.props.t("LearnMore")}
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                })}
            </Row>
        </Container>);
    };
}

export default withTranslation()(Blog);
