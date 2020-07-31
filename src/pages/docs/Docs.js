import React, {Component} from 'react';
import './Docs.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/ll.png";
import doc from "./doc.md";

const markdown = require("markdown").markdown;

class Docs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMarkDown: ''
        };
    }

    componentWillMount() {
        fetch(doc)
            .then(res => res.text())
            .then(text => this.setState({ currentMarkDown: text }));
    }


    render() {
        let tree = markdown.toHTMLTree(this.state.currentMarkDown);

        let ul = [];
        for (let line in tree) {
            if ('h1' === tree[line][0]) {
                ul.push(<li style={{fontWeight:'bold'}} onClick={this.renderMarkdownDoc.bind(this, "")}>{tree[line][1]}</li>);
            }
        }

        return (<Container className="Home">
            <Row style={{height: '16em', textAlign: 'center', paddingTop: '4em'}}>
                <Col style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "auto", paddingBottom: 'auto', marginBottom: 0, padding: 0}}>
                    <Image src={Logo} className="logo-img"/>
                    <h1 style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Documents for developer</h1>
                </Col>
            </Row>
            <Row style={{background: '#fff', padding: 0}}>
                <Col md={3} style={{padding: '2em'}}>
                    {ul}
                </Col>
                <Col md={9} style={{paddingTop: '2em'}}>
                    <Container dangerouslySetInnerHTML={{__html: markdown.toHTML(this.state.currentMarkDown)}}>
                    </Container>
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
