import React, {Component} from 'react';
import './GithubIssuesDetail.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../docs/CodeBlock";

class GithubIssuesDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            comments: []
        };
    }

    componentDidMount() {
        if (this.props.match.params) {
            const id = this.props.match.params.id;
            fetch('https://api.github.com/repos/SynestiaOS/SynestiaOS/issues/' + id)
                .then(response => response.json())
                .then(data => {
                    this.setState(
                        {
                            detail: data
                        }
                    );
                    console.log(data);
                    fetch(data.comments_url).then(response => response.json())
                        .then(comments => {
                                this.setState(
                                    {
                                        comments: comments
                                    }
                                );
                                console.log(comments);
                            }
                        )
                });
        }
    }

    render() {
        return (<Container className="GithubIssuesDetail">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col md={1}/>
                <Col md={10}>
                    <h1>Forum Detail</h1>
                    <h4>&lt;Issue/&gt;</h4>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', padding: 0, paddingBottom: '2em', paddingLeft: '2em', paddingRight: '2em'}}>
                <Col md={1}/>
                <Col md={10} style={{marginTop: "2em"}}>
                </Col>
                <Col md={1}/>
                <Col md={1}/>
                <Col md={10} style={{background: '#fff', padding: '0'}}>
                    <Row style={{margin: 0, padding: 0}}>
                        <Col md={9} style={{padding: 0, borderRight: 'solid 1px #eee'}}>
                            <Row style={{margin: 0, padding: 0}}>
                                <Col md={12} style={{paddingTop: '2em'}}>
                                    <Container><h3>{this.state.detail.title ? this.state.detail.title : 'loading'}</h3></Container>
                                    <Container>
                                        {
                                            this.state.detail.labels ? this.state.detail.labels.map((label, tagIndex) => {
                                                return <span key={tagIndex} style={{
                                                    background: '#eee',
                                                    paddingLeft: '0.3em',
                                                    paddingRight: '0.3em',
                                                    marginRight: '0.5em'
                                                }}>{label.name}</span>
                                            }) : null
                                        }
                                        <p>
                                            <strong>{this.state.detail.user ? this.state.detail.user.login : 'loading'}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>{this.state.detail.created_at ? this.state.detail.created_at : 'loading'}</span></p>
                                    </Container>
                                    <Container style={{marginTop: '2em'}}><p>
                                        {this.state.detail.body ?
                                            <ReactMarkdown
                                                className={"markdown"}
                                                source={this.state.detail.body}
                                                escapeHtml={false}
                                                renderers={{
                                                    code: CodeBlock,
                                                }}
                                            /> : 'loading'}
                                    </p>
                                    </Container>
                                </Col>
                                <Col md={12} style={{padding: 0}}>
                                    <Container style={{padding: 0}}>
                                        {!this.state.comments || this.state.comments.length === 0 ?
                                            <Container style={{
                                                padding: '1em',
                                                borderTop: 'solid 1px #eee'
                                            }}>Empty</Container> : this.state.comments.map((comment, index) => {
                                                return <Row key={index} style={{padding: 0, margin: 0}}>
                                                    <Col md={1} style={{background: '#eee', textAlign: 'center', padding: '1em'}}><h1>{index + 1}</h1>
                                                    </Col>
                                                    <Col md={11} style={{padding: '1em', borderTop: 'solid 1px #eee'}}>
                                                        <Row style={{margin: 0}}>
                                                            <ReactMarkdown
                                                                className={"markdown"}
                                                                source={comment.body}
                                                                escapeHtml={false}
                                                                renderers={{
                                                                    code: CodeBlock,
                                                                }}
                                                            />
                                                        </Row>
                                                        <Row style={{margin: 0}}><strong>{comment.user.login}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <span>{comment.created_at}</span></Row>
                                                    </Col>
                                                </Row>
                                            })}
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3} style={{padding: 0, paddingTop: '2em', paddingBottom: '2em', textAlign: 'center'}}>
                            <Col md={12}>
                                <img style={{width: "8em", height: "8em", borderRadius: '100em'}}
                                     alt="Forum"
                                     src={this.state.detail.user ? this.state.detail.user.avatar_url : "https://images.squarespace-cdn.com/content/v1/5c16b5974eddec882174ca75/1582058123638-H4VTXMHVGK47D4A2VC54/ke17ZwdGBToddI8pDm48kEoK7p2cuopIbMpnY-qU4Xt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmPCjdaixatBq74HpDU8-1BG_BTZdSbG6SN-2894KVoY0GT6uSxH2T086BFBPl3LIm/forum_logo.PNG?format=500w"}/>
                            </Col>
                            <Col md={12} style={{marginTop: '2em'}}>
                                <button style={{
                                    color: '#fff',
                                    background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                    border: 'none',
                                    width: '8em',
                                    height: '2em',
                                }}>
                                    <a style={{color: '#fff'}}
                                       href={this.state.detail.user ? this.state.detail.user.html_url : '#'}>{this.state.detail.user ? this.state.detail.user.login : 'Loading'}</a>
                                </button>
                            </Col>
                            <Col md={12} style={{marginTop: '1em'}}>
                                <button style={{
                                    color: '#fff',
                                    background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                    border: 'none',
                                    width: '8em',
                                    height: '2em',
                                }}>
                                    <a style={{color: '#fff'}} href={this.state.detail ? this.state.detail.url : '#'}>Go To Github</a>
                                </button>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };
}

export default GithubIssuesDetail;
