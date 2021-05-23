import React, {Component} from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import LogoRe from "../../static/images/logo/logo-s.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import {withTranslation} from 'react-i18next'
import * as cookie from "react-cookies";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";

const headers = [
    {
        title: 'Home',
        url: '/',
        child: []
    }, 
    {
        title: 'Developer',
        url: '/developer',
        child: [
            {title:'Get Started', url:'/developer'},
            {title:'Docs', url:'/docs'},
            {title:'Tools', url:'/tools'}
        ]
    },
    {
        title: 'News',
        url: '/blog',
        child: [
            {title:'News', url:'/blog'},
            {title:'Videos', url:'/videos'},
        ]
    },
    {
        title: 'Kanban',
        url: '/kanban',
        child: []
    },
    {
        title: 'Community',
        url: '/forum',
        child: [
            {title:'Faq', url:'/faq'},
            {title:'Forum', url:'/forum'},
            {title:'Github', url:'https://github.com/SynestiaOS/SynestiaOS'}
        ]
    }, 
    {
        title: 'Sponsor',
        url: '/sponsor',
        child: []
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
        this.props.i18n.changeLanguage(lan);
    }

    render() {
        return <Container className="Header">
            <Row style={{padding: 0, height: '2em', background: "rgb(245,245,245)"}}>
                <Col md={1}/>
                <Col md={10}>
                    <Dropdown style={{flex: 1, textAlign: "right"}}>
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                            {this.props.t('Language')}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.changeLanguage.bind(this, 'en')} href="#/action-1"> {this.props.t('English')}</Dropdown.Item>
                            <Dropdown.Item onClick={this.changeLanguage.bind(this, 'zh')} href="#/action-2"> {this.props.t('Chinese')}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row style={{padding: 0, borderBottom: "1px solid #eee", backgroundColor: "#fff", color: "#000", display: "flex"}}>
                <Col md={1}/>
                <Col md={10}>
                    <Navbar bg="#fff" variant="light" style={{padding: 0, width: '100%', height: '5em'}}>
                        <Link to={'/'}><Image src={LogoRe} className="logo-img"/></Link><h2>SynestiaOS</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {
                            headers.map((item, index) => {
                                return <Nav.Link key={index}
                                                 onClick={this.selectHeaderMenu.bind(this, index)}
                                                 style={{
                                                     color: '#000',
                                                     height: '100%',
                                                     display: 'flex',
                                                     alignItems: 'center',
                                                     justifyContent: 'center',
                                                 }}>
                                                {
                                                    item.child.length==0?<Link to={item.url}>{this.props.t(item.title)}</Link>: <DropdownButton id="dropdown-basic-button" variant="light" title={this.props.t(item.title)}>
                                                    {
                                                        item.child.map((child, id) => {
                                                            return <Link to={child.url}><Dropdown.Item href="#/action-1">{child.title}</Dropdown.Item></Link>
                                                        })
                                                    }
                                                 </DropdownButton>
                                                }
                                                 </Nav.Link>
                            })
                        }

                        {/* {this.renderUserInfo()} */}
                    </Navbar>
                </Col>
            </Row>
            <Row style={{padding: 0, borderBottom: "1px solid #eee",display:'none', backgroundColor: "#fff", color: "#000",position:'absolute',zIndex:99,width:'100%'}}>
                        <Col md={2}>
                        </Col>
                        <Col md={8} style={{padding:'2em'}}>
                            <Row>
                                <Col md={7}>
                                    <h1>xxx</h1>
                                </Col>
                                <Col md={5} style={{borderLeft:'1px solid #eee'}}>
                                    <Link>Get Start</Link>
                                </Col>
                            </Row>
                        </Col>
            </Row>
        </Container>
    }

    renderUserInfo() {
        if (cookie.load('userId') && cookie.load('userId') !== '') {
            return <Container style={{
                width: '4em',
                height: '3em',
                position: 'absolute',
                right: '0',
                textAlign: 'center'
            }}><Link to={'/me'}><Image src={LogoRe}
                                       className="logo-user"/></Link></Container>;
        } else {
            return <Container style={{
                width: '4em',
                height: '3em',
                position: 'absolute',
                right: '2em',
                textAlign: 'center'
            }}><FontAwesomeIcon
                icon={faUser}/>
                &nbsp;<Link style={{padding: 0, margin: 0, color: '#000'}} to={'/login'}>{this.props.t("Login")}</Link>
            </Container>

        }
    }

    loginWithGithub() {
        window.location.href = "https://github.com/login/oauth/authorize?client_id=651845ca2b8026fa6b47&redirect_uri=http://localhost:3000/github/callback";
    }

    selectHeaderMenu(index) {
        this.setState({
            selectedMenuIndex: index
        });
    }
}

export default withTranslation()(Header);
