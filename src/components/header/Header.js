import React, {Component} from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import LogoRe from "../../static/images/logo_re.png";
import Dropdown from "react-bootstrap/Dropdown";

const headers = [
    {
        title: 'Developer',
        url: '/developer'
    },
    {
        title: 'Community',
        url: '/forum'
    }, {
        title: 'News & Events',
        url: '/blog'
    }, {
        title: 'Sponsor',
        url: '/sponsor'
    }
];

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedMenuIndex: 0
        };

        this.loginWithGithub = this.loginWithGithub.bind(this);
    }

    changeLanguage(lan) {
        alert("not support");
    }

    render() {
        return <Container className="Header">
            <Row style={{padding: 0, height: '2em', background: "rgb(245,245,245)"}}>
                <Dropdown style={{flex: 1, textAlign: "right"}}>
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                        English
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.changeLanguage.bind(this, 'en')} href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item onClick={this.changeLanguage.bind(this, 'zh')} href="#/action-2">Chinese</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <Row style={{padding: 0, borderBottom: "1px solid #eee", backgroundColor: " #fff", color: "#000", display: "flex"}}>
                <Navbar bg="#fff" variant="light" style={{padding: 0, width: '100%'}}>
                    <Image src={LogoRe} className="logo-img"/>
                    <Nav.Link href="/home"
                              style={{color: '#000', fontSize: '1.5em'}}>SynestiaOS</Nav.Link>

                    {
                        headers.map((item, index) => {
                            return <Nav.Link href={item.url}
                                             onClick={this.selectHeaderMenu.bind(this, index)}
                                             style={{
                                                 color: '#000',
                                                 height: '100%',
                                                 display: 'flex',
                                                 alignItems: 'center',
                                                 justifyContent: 'center',
                                             }}>{item.title}</Nav.Link>
                        })
                    }
                    {/*<Nav.Link style={{float: 'right', flex: 1, textAlign: "right"}}>*/}
                    {/*    <button onClick={this.loginWithGithub.bind(this)} style={{*/}
                    {/*        background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',*/}
                    {/*        border: 'none',*/}
                    {/*        textAlign: 'center',*/}
                    {/*        lineHeight: '2em',*/}
                    {/*        width: '10em',*/}
                    {/*        float: 'right',*/}
                    {/*        height: '2em',*/}
                    {/*        color: '#fff'*/}
                    {/*    }}>Login with Github</button>*/}
                    {/*</Nav.Link>*/}
                </Navbar>
            </Row>
        </Container>
    }

    loginWithGithub(){
        window.location.href="https://github.com/login/oauth/authorize?client_id=651845ca2b8026fa6b47&redirect_uri=http://localhost:3000/github/callback";
    }

    selectHeaderMenu(index) {
        this.setState({
            selectedMenuIndex: index
        });
    }
}

export default Header;
