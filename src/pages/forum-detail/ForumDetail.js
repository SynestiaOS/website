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
                <Col md={1}/>
                <Col md={10}>
                    <h1>Forum Detail</h1>
                    <h4>&lt;{type}/&gt;</h4>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', padding: 0, paddingBottom: '2em', paddingLeft: '2em', paddingRight: '2em'}}>
                <Col md={1}/>
                <Col md={10} style={{marginTop: "1em"}}>
                </Col>
                <Col md={1}/>
                <Col md={1}/>
                <Col md={10} style={{background: '#fff', padding: '0'}}>
                    <Row style={{margin: 0, padding: 0}}>
                        <Col md={9} style={{padding: 0, borderRight: 'solid 1px #eee'}}>
                            <Row style={{margin: 0, padding: 0}}>
                                <Col md={12} style={{paddingTop: '2em'}}>
                                    <Container><h3>{detail.title}</h3></Container>
                                    <Container>
                                        {
                                            detail.tags.map((tag, tagIndex) => {
                                                return <span key={tagIndex} style={{
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
                                <Col md={12} style={{padding: 0}}>
                                    <Container style={{padding: 0}}>
                                        {detail.comments.length === 0 ?
                                            <Container style={{
                                                padding: '1em',
                                                borderTop: 'solid 1px #eee'
                                            }}>Empty</Container> : detail.comments.map((comment, index) => {
                                                return <Row key={index} style={{padding: 0, margin: 0}}>
                                                    <Col md={1} style={{background: '#eee', textAlign: 'center', padding: '1em'}}><h1>{index + 1}</h1>
                                                    </Col>
                                                    <Col md={11} style={{padding: '1em', borderTop: 'solid 1px #eee'}}>
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
                        <Col md={3} style={{padding: 0, textAlign: 'center', paddingTop: '2em'}}>
                            <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                <img style={{width: "8em", height: "8em"}}
                                     alt="Forum"
                                     src="https://images.squarespace-cdn.com/content/v1/5c16b5974eddec882174ca75/1582058123638-H4VTXMHVGK47D4A2VC54/ke17ZwdGBToddI8pDm48kEoK7p2cuopIbMpnY-qU4Xt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmPCjdaixatBq74HpDU8-1BG_BTZdSbG6SN-2894KVoY0GT6uSxH2T086BFBPl3LIm/forum_logo.PNG?format=500w"/>
                            </Col>
                            <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                <h4>Forum</h4>
                                <p>(building)</p>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };
}

export default ForumDetail;
