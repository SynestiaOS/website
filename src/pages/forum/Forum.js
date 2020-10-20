import React, {Component, Fragment} from 'react';
import './Forum.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {forumData} from "./forumData";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";

class Forum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'issues',
            issues: [],
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/SynestiaOS/SynestiaOS/issues')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState(
                    {
                        issues: data
                    }
                );
            });
    }

    render() {
        return (<Container className="Forum">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Community</h1>
                    <h4>Sharing and cooperation make us better!</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '1em'}}>
                <Col md={9} style={{
                    borderRight: 'solid 1px #eee',
                }}>
                    <Row style={{padding: 0}}>
                        <Col md={12} style={{padding: 0, background: '#eee'}}>
                            <Navbar bg="#fff" variant="light" style={{textAlign: 'left', padding: 0}}>
                                {
                                    Object.keys(forumData).map((item, index) => {
                                        let background = '#eee';
                                        if (this.state.selected === item) {
                                            background = '#fff';
                                        }
                                        return <Nav.Link key={index} onClick={this.selectTag.bind(this, item)}
                                                         style={{color: '#000', background}}>{item}</Nav.Link>
                                    })
                                }
                                <Nav.Link href="/forum"
                                          style={{color: '#000', flex: 1, textAlign: "right"}}>More</Nav.Link>
                            </Navbar>
                        </Col>
                        <Col md={12} style={{borderTop: 'solid 1px #eee', background: '#fff'}}>
                            {this.renderItem()}
                        </Col>
                    </Row>
                    <Row style={{padding: 0, background: '#fff'}}>
                        <Navbar bg="#fff" variant="light" style={{textAlign: 'left', padding: 0, background: '#fff'}}>
                            <Nav.Link href="/home"
                                      style={{color: '#000'}}>&lt;&lt;</Nav.Link>
                            <Nav.Link href="/sponsor"
                                      style={{color: '#000'}}>&lt;</Nav.Link>
                            <Nav.Link href="/blog"
                                      style={{color: '#000', background: '#eee'}}>1</Nav.Link>
                            <Nav.Link href="/docs"
                                      style={{color: '#000'}}>&gt;</Nav.Link>
                            <Nav.Link href="/docs"
                                      style={{color: '#000'}}>&gt;&gt;</Nav.Link>
                        </Navbar>
                    </Row>
                </Col>
                <Col md={3} style={{
                    textAlign: 'center',
                    background: '#fff',
                    paddingTop: '2em',
                    borderRight: 'solid 1px #eee',
                }}>
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
        </Container>);
    };

    renderItem() {
        if (this.state.selected !== 'issues') {
            return <Fragment>
                {
                    forumData[this.state.selected].length !== 0 ? forumData[this.state.selected].map((item, index) => {
                        return <Row key={index}
                            style={{padding: '1em', borderBottom: 'solid 1px #eee'}}>
                            <Col md={9}>
                                <Row><h5><strong>&lt;{item.type}/&gt;</strong>
                                    <Link style={{color: '#000'}}
                                          to={'/forum-detail/' + this.state.selected + '/' + index}> {item.title}</Link>
                                </h5></Row>
                                <Row>
                                    <span style={{fontWeight: 'bold'}}>{item.author}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>{item.time}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {
                                        item.tags.map((tag, tagIndex) => {
                                            return <span key={tagIndex} style={{
                                                background: '#eee',
                                                paddingLeft: '0.3em',
                                                paddingRight: '0.3em',
                                                marginLeft: '0.5em'
                                            }}>{tag}</span>
                                        })
                                    }
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row>
                                    <Col md={5} style={{textAlign: 'right'}}>
                                        <Row>view</Row>
                                        <Row style={{fontWeight: 'bold'}}>{item.view}</Row>
                                    </Col>
                                    <Col md={7} style={{textAlign: 'right'}}>
                                        <Row>comment</Row>
                                        <Row style={{fontWeight: 'bold'}}>{item.comments.length}</Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    }) : <Row style={{padding: '1em', fontWeight: 'bold'}}>Empty</Row>
                }
            </Fragment>;
        } else {
            return <Fragment>
                {
                    this.state.issues.length !== 0 ? this.state.issues.map((item, index) => {
                        return <Row key={index}
                            style={{padding: '1em', borderBottom: 'solid 1px #eee'}}>
                            <Col md={1} style={{padding:0}}>
                                <Image style={{borderRadius: '2px'}} src={item.user.avatar_url}/>
                            </Col>

                            <Col md={10} style={{paddingLeft:'2em'}}>
                                <Row><h5><strong>&lt;{item.state}/&gt;</strong>
                                    <Link style={{color: '#000'}}
                                          to={'/forum-detail/github/issue/' + item.number}> {item.title}</Link>
                                </h5></Row>
                                <Row>
                                    <span style={{fontWeight: 'bold'}}>{item.user.login}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>{item.created_at}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {
                                        item.labels.map((label, tagIndex) => {
                                            return <span key={tagIndex} style={{
                                                background: '#eee',
                                                paddingLeft: '0.3em',
                                                paddingRight: '0.3em',
                                                marginLeft: '0.5em'
                                            }}>{label.name}</span>
                                        })
                                    }
                                </Row>
                            </Col>
                            <Col md={1}>
                                <Row>
                                    <Col md={12} style={{textAlign: 'right'}}>
                                        <Row>comment</Row>
                                        <Row style={{fontWeight: 'bold'}}>{item.comments}</Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    }) : <Row style={{padding: '1em', fontWeight: 'bold'}}>Empty</Row>
                }
            </Fragment>;
        }
    }

    selectTag(tag) {
        this.setState(
            {
                selected: tag
            }
        );
    }
}

export default Forum;
