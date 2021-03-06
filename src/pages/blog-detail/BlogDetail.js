import React, {Component} from 'react';
import './BlogDetail.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {blogsData} from "../blogs/blogsData";
import {Image} from "react-bootstrap";
import {withTranslation} from "react-i18next";

class BlogDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let id = 0;
        if (this.props.match.params) {
            id = this.props.match.params.id;
        }

        let detail = blogsData[id];

        return (<Container className="BlogDetail">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col md={1}/>
                <Col md={10}>
                    <h1>{this.props.t("News")} {this.props.t("Detail")}</h1>
                    <h4>{detail.title}</h4>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', padding: 0, paddingBottom: '2em', paddingLeft: '2em', paddingRight: '2em'}}>
                <Col md={1}/>
                <Col md={10} style={{marginTop: "1em"}}>
                    <h1>{this.props.t("Detail")} > </h1>
                </Col>
                <Col md={1}/>
                <Col md={1}/>
                <Col md={10} style={{background: '#fff', padding: '0', paddingLeft: '2em'}}>
                    <Row>
                        <Col md={8} style={{padding: '2em', borderRight: 'solid 1px #eee'}}>
                            <h3>{detail.content}</h3>
                            <Image style={{width: '100%', padding: 0, margin: 0}} src={detail.image}/>
                        </Col>
                        <Col md={4} style={{padding: '2em', textAlign: 'left'}}>
                            <h4>Author:</h4>
                            <h5>{detail.author}</h5>
                            <h4>Time:</h4>
                            <h5>{detail.time}</h5>
                            <Row style={{textAlign: 'left', marginLeft: '0em'}}>
                                <a href={detail.url}
                                   style={{fontWeight: 'normal', marginTop: '1em'}}>
                                    <button style={{
                                        color: '#fff',
                                        background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                        border: 'none',
                                        width: '6em',
                                        height: '2em',
                                    }}>{this.props.t("LearnMore")}
                                    </button>
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };
}

export default withTranslation()(BlogDetail);
