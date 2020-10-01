import React, {Component} from 'react';
import './Docs.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

class Docs extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<Container className="Docs">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Documents for developer</h1>
                    <h4>Join the SynestiaOS ecosystem and build a new era of Internet of Everything with us!</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '2em'}}>
                <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <h1>Let's build it ></h1>
                </Col>
                <Col md={3} style={{
                    textAlign: 'center',
                    background: '#fff',
                    height: '15em',
                    paddingTop: '2em',
                    borderRight: 'solid 1px #eee',
                    borderBottom: 'solid 1px #eee'
                }}>
                    <Link to={"/faq"} style={{color: '#000'}}>
                        <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <img style={{width: "8em", height: "8em"}}
                                 alt="FAQ"
                                 src="https://images.squarespace-cdn.com/content/v1/5c16b5974eddec882174ca75/1582058073124-4D2Z0954TU4D5RRUFD3M/ke17ZwdGBToddI8pDm48kB-9GYlrABRnirIA2a_AHjd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmym1-sL9rIZ5HM_UOviYKV5Y2qJzdEvp_sP3Xxvvbwy-tuOF86sOfVnv8Ab2kfh8S/faq_logo.PNG?format=500w"/>
                        </Col>
                        <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <h4>FAQ</h4>
                        </Col>
                    </Link>
                </Col>
                <Col md={3} style={{
                    textAlign: 'center',
                    background: '#fff',
                    height: '15em',
                    paddingTop: '2em',
                    borderRight: 'solid 1px #eee',
                    borderBottom: 'solid 1px #eee'
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
                <Col md={3} style={{
                    textAlign: 'center',
                    background: '#fff',
                    height: '15em',
                    paddingTop: '2em',
                    borderRight: 'solid 1px #eee',
                    borderBottom: 'solid 1px #eee'
                }}>
                    <a href={"https://github.com/SynestiaOS/SynestiaOS"} style={{color: '#000'}}>
                        <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <img style={{width: "8em", height: "8em"}}
                                 alt="Repos"
                                 src="https://images.squarespace-cdn.com/content/v1/5c16b5974eddec882174ca75/1582058073900-WVGTGL3L31VB4GOKJMLJ/ke17ZwdGBToddI8pDm48kIaRRqZIZigB-m6pyLCfme17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmoSbrsZANSlg2c7ntKg0xqn6tNu6SCqFhEN4mC7jqvrVUtmHEoE1LyVcxA9GiIFsw/git_logo.PNG?format=500w"/>
                        </Col>
                        <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <h4>Repos</h4>
                        </Col>
                    </a>
                </Col>
                <Col md={3} style={{textAlign: 'center', background: '#fff', height: '15em', paddingTop: '2em', borderBottom: 'solid 1px #eee'}}>
                    <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <img style={{width: "8em", height: "8em"}}
                             alt="Videos"
                             src="https://images.squarespace-cdn.com/content/v1/5c16b5974eddec882174ca75/1582058072361-6BAZK6WOQVHDLIXQGNC2/ke17ZwdGBToddI8pDm48kNQeTggaIOlRX9bkwROWejF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm60PLM3IYeVzy64Wg-koOodVAmjpaHAZD3JztAEJlWhjZAp-1gBeDTnWFwhpl6he_/video_logo.PNG?format=500w"/>
                    </Col>
                    <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h4>Videos</h4>
                        <p>(building)</p>
                    </Col>
                </Col>
                <Col md={3} style={{textAlign: 'center', background: '#fff', height: '15em', paddingTop: '2em', borderRight: 'solid 1px #eee'}}>
                    <a href={"https://github.com/SynestiaOS/Documentation"} style={{color: '#000'}}>
                        <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <img className="thumb-image loaded"
                                 style={{width: "8em", height: "8em"}}
                                 alt="Docs"
                                 src="https://images.squarespace-cdn.com/content/v1/5c16b5974eddec882174ca75/1582058073215-RO2ROZ4YCCQWMV91CD75/ke17ZwdGBToddI8pDm48kNTz3eyGtDo4QTeoVbk60fl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm77b3aMoxlc0duZREiKix3qw0PFOrX67-8pWa41WR2KUYBcYeBpnicIz0xxzN7tvP/documentation_logo.PNG?format=500w"/>
                        </Col>
                        <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <h4>Docs</h4>
                        </Col>
                    </a>
                </Col>
                <Col md={3} style={{textAlign: 'center', background: '#fff', height: '15em', paddingTop: '2em', borderRight: 'solid 1px #eee'}}>
                    <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <img className="thumb-image loaded"
                             style={{width: "8em", height: "8em"}}
                             alt="Tool Share"
                             src="https://images.squarespace-cdn.com/content/v1/5c16b5974eddec882174ca75/1582058072818-ZD37NLAOA1IQ9WBXGHGR/ke17ZwdGBToddI8pDm48kLPrH-eUyRPeXq6cbt4AjsB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmC_XKz7woDqXWNVYlmJ2TM2NtZ2hEJVENtG9pTzc1jPFNws-e4TuyPzAKCUrCdvn2/wrench_logo.PNG?format=500w"/>
                    </Col>
                    <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h4>Tool Share</h4>
                        <p>(building)</p>
                    </Col>
                </Col>
                <Col md={3} style={{textAlign: 'center', background: '#fff', height: '15em', paddingTop: '2em', borderRight: 'solid 1px #eee'}}>
                    <Link to={"/blog"} style={{color: '#000'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <img className="thumb-image loaded"
                                 style={{width: "8em", height: "8em"}}
                                 alt="News"
                                 src="https://images.squarespace-cdn.com/content/v1/5c16b5974eddec882174ca75/1591804137817-S577GCV49HJ20K7B6A2P/ke17ZwdGBToddI8pDm48kJgA4Aiv2RIeIWWUvLYvbEp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm8WBMyhSE1e2N-_2ueoaGrcUsjq1CQVxeKzuT0oiquQ2hKep5iLcGpbnjjieWKJkh/twitter7.PNG?format=500w"/>
                        </Col>
                        <Col md={12} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <h4>News & Event</h4>
                        </Col>
                    </Link>
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

export default Docs;
