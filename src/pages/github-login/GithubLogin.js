import React, {Component} from 'react';
import './GithubLogin.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function getUrlToken(name, str) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const r = str.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

class GithubLogin extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const code = getUrlToken('code', this.props.location.search);
        if (code) {
            fetch('https://github.com/login/oauth/access_token?client_id=651845ca2b8026fa6b47&client_secret=0d25948cb58bb01dc0c4deb3e3dae411d71aadf9&code=' + code + '&redirect_uri=http%3a%2f%2flocalhost%3a3000%2fgithub%2fcallback&state=xxx', {
                method: 'POST',
                mode: 'no-cors'
            }).then(response => {
                if (response.ok) {
                    return response.text()
                }
                throw new Error('Network response was not ok.');
            }).then(data => {
                console.log(data);
            }).catch(err=>{
                console.log(err);
            });
        } else {
            alert("OK");
        }
    }

    render() {
        return (<Container className="GithubLogin">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Login ...</h1>
                </Col>
            </Row>
        </Container>);
    };
}

export default GithubLogin;
