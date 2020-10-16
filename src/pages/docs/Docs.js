import React, {Component} from 'react';
import './Docs.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'video-react/dist/video-react.css';
import {markdown} from 'markdown';
import {docsData} from "./docsData";


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
        const doc = await getDoc(process.env.PUBLIC_URL + docsData[0].path);
        this.setState({
            currentDocIndex: 0,
            currentDoc: doc
        });
    }

    async changeDoc(index){
        const doc = await getDoc(process.env.PUBLIC_URL + docsData[index].path);
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
                <Col md={12} style={{background: '#fff', padding: 0}}>
                    <Row>
                        <Col md={3} style={{padding: '1em',borderRight:'solid 1px #eee'}}>
                            {docsData.map((item, index) => {
                                return <Row onClick={this.changeDoc.bind(this,index)} style={{paddingLeft:'2em'}}><h4>{item.chapter}</h4></Row>
                            })}
                        </Col>
                        <Col md={9} style={{padding: '1em',paddingRight:'2em'}}>
                            <h1>&gt;&nbsp;{docsData[this.state.currentDocIndex].chapter}</h1>
                            <section dangerouslySetInnerHTML={{__html: markdown.toHTML(process.env.PUBLIC_URL + this.state.currentDoc)}}>
                            </section>
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

export default Docs;
