import React, {Component} from 'react';
import './Docs.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'video-react/dist/video-react.css';
import {docsData} from "./docsData";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";


async function getDoc(url) {
    const res = await fetch(url);
    return await res.text();
}

class Docs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentDocIndex: 0,
            currentDoc: "Loading..."
        };

        this.changeDoc = this.changeDoc.bind(this);
    }

    async componentDidMount() {
        const doc = await getDoc(docsData[0].path);
        this.setState({
            currentDocIndex: 0,
            currentDoc: doc
        });
    }

    async changeDoc(index) {
        const doc = await getDoc(docsData[index].path);
        this.setState({
            currentDocIndex: index,
            currentDoc: doc
        });
    }

    render() {
        return (<Container className="Videos">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Documents </h1>
                    <h4>Our documents for kernel or components.</h4>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', padding: 0}}>
                <Col md={12} style={{marginTop: "1em"}}>
                    <h1>Kernel Documents > </h1>
                </Col>
                <Col md={12} style={{padding: 0}}>
                    <Row style={{paddingLeft: '1em', paddingRight: '1em'}}>
                        <Col md={3} style={{paddingLeft: '1em', borderRight: 'solid 1px #eee', background: '#eee'}}>
                            {docsData.map((item, index) => {
                                return <Row onClick={this.changeDoc.bind(this, index)} style={{
                                    paddingTop: '0.5em',
                                    paddingBottom: '0.5em',
                                    paddingLeft: '2em',
                                    fontSize: '1.5em',
                                    background: index === this.state.currentDocIndex ? '#fff' : '#eee'
                                }}>{item.chapter}</Row>
                            })}
                        </Col>
                        <Col md={9} style={{padding: '1em', background: '#fff'}}>
                            <Row style={{padding: 0, margin: 0}}>
                                <h1>{docsData[this.state.currentDocIndex].chapter}</h1>
                                <Container style={{
                                    flex: 1,
                                    textAlign: "right",
                                    marginTop: '1em',
                                }}><a style={{
                                    background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                    padding: '0.5em',
                                    color: '#fff',
                                    borderRadius: '3px',
                                }} href={docsData[this.state.currentDocIndex].url}>detail</a></Container>
                            </Row>
                            <ReactMarkdown
                                className={"markdown"}
                                source={this.state.currentDoc}
                                escapeHtml={false}
                                renderers={{
                                    code: CodeBlock,
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };
}

export default Docs;
