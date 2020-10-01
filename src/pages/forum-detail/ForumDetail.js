import React, {Component} from 'react';
import './ForumDetail.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {forumData} from "../forum/forumData";

class ForumDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let type = 0;
        let id = 0;
        if (this.props.match.params) {
            type = this.props.match.params.type;
            id = this.props.match.params.id;
        }

        let detail = forumData[type][id];

        return (<Container className="ForumDetail">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Forum Detail</h1>
                    <h4>&lt;{type}/&gt;</h4>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', padding: 0}}>
                <Col md={12} style={{marginTop: "1em"}}>
                </Col>
                <Col md={12} style={{background: '#fff', padding: '0'}}>
                    <Row style={{margin: 0, padding: 0}}>
                        <Col md={12} style={{padding: 0}}>
                            <Row style={{margin: 0, padding: 0}}>
                                <Col md={12} style={{background: '#f5f5f6'}}>
                                    <h1>Detail ></h1>
                                </Col>
                                <Col md={12} style={{paddingTop: '2em'}}>
                                    <Container><h3>{detail.title}</h3></Container>
                                    <Container>
                                        {
                                            detail.tags.map((tag, tagIndex) => {
                                                return <span style={{
                                                    background: '#eee',
                                                    paddingLeft: '0.3em',
                                                    paddingRight: '0.3em',
                                                    marginRight: '0.5em'
                                                }}>{tag}</span>
                                            })
                                        }
                                        <p><strong>{detail.author}</strong>&nbsp;&nbsp;&nbsp;&nbsp;<span>{detail.time}</span></p>
                                    </Container>
                                    <Container style={{marginTop: '2em'}}><p>{detail.content}</p></Container>
                                </Col>
                                <Col md={12} style={{background: '#f5f5f6', paddingTop: '1em'}}>
                                    <h1>Comments ></h1>
                                </Col>
                                <Col md={12} style={{padding: 0}}>
                                    <Container style={{padding: 0}}>
                                        {detail.comments.length === 0 ?
                                            <Container style={{padding: '1em'}}>Empty</Container> : detail.comments.map((comment, index) => {
                                                return <Row style={{padding: 0, margin: 0}}>
                                                    <Col md={1} style={{background: '#eee', textAlign: 'center', padding: '1em'}}><h1>{index + 1}</h1>
                                                    </Col>
                                                    <Col md={11} style={{padding: '1em', borderBottom: index % 2 === 0 ? 'solid 1px #eee' : 'none'}}>
                                                        <Row style={{margin: 0}}>{comment.content}</Row>
                                                        <Row style={{margin: 0}}><strong>{comment.author}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <span>{comment.time}</span></Row>
                                                    </Col>
                                                </Row>
                                            })}
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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

export default ForumDetail;
