import React, {Component} from 'react';
import './Login.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {withTranslation} from "react-i18next";
import {bindActionCreators} from "redux";
import {doLogin} from "../../actions/authAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Alert} from "react-bootstrap";
import cookie from 'react-cookies';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnLogin: {
                disabled: false,
                text: this.props.t("Login")
            }
        };
        this.loginDTO = {
            username_or_email: '',
            password: ''
        };
    }

    render() {
        return (<Container className="Login">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>{this.props.t("Login")}</h1>
                    <h4>login</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '1em'}}>
                <Col md={12}>
                    <h2>{this.props.t("Login")} ></h2>
                    <Row style={{
                        background: '#fff',
                        borderRight: '1px solid rgb(238, 238, 238)',
                        borderBottom: '1px solid rgb(238, 238, 238)'
                    }}>
                        <Col md={6} style={{borderRight: '1px solid rgb(238, 238, 238)',}}>
                            <Container style={{padding: '0'}}>
                                <Row style={{
                                    background: '#fff',
                                    padding: '1em',
                                    height: '7em',
                                }}>
                                    <h5>Ad here for sponsor!</h5>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <Container style={{padding: '0'}}>
                                <Row style={{
                                    background: '#fff',
                                    padding: '1em',
                                }}>
                                    <h1>{this.props.t("Login")}</h1>
                                </Row>

                                <Row style={{
                                    background: '#fff',
                                    padding: '0.5em 1em',
                                }}>
                                    {this.renderMessage()}
                                </Row>

                                <Row style={{
                                    background: '#fff',
                                    padding: '0.5em 1em',
                                }}>
                                    <Col md={2} style={{padding: 0, margin: 0}}>
                                        <span>Email:</span>
                                    </Col>
                                    <Col md={8} style={{padding: 0, margin: 0}}>
                                        <input onChange={this.onEmailChange.bind(this)} style={{width: '100%'}} placeholder={'email'}/>
                                    </Col>
                                </Row>
                                <Row style={{
                                    background: '#fff',
                                    padding: '0.5em 1em',
                                }}>
                                    <Col md={2} style={{padding: 0, margin: 0}}>
                                        <span>Password:</span>
                                    </Col>
                                    <Col md={8} style={{padding: 0, margin: 0}}>
                                        <input type={'password'} onChange={this.onPasswordChange.bind(this)} style={{width: '100%'}}
                                               placeholder={'password'}/>
                                    </Col>
                                </Row>
                                <Row style={{
                                    background: '#fff',
                                    padding: '1em',
                                    marginTop: '1em',
                                }}>
                                    <button disabled={this.state.btnLogin.disabled ? 'disabled' : null} id={'btnLogin'} style={{
                                        color: '#fff',
                                        height: '2em',
                                        width: '6em',
                                        background: this.state.btnLogin.disabled ? 'linear-gradient(to right, #333 0%, #eee 100%)' : 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                        border: 'none',
                                    }} onClick={this.login.bind(this)}>{this.state.btnLogin.text}
                                    </button>
                                </Row>
                                <Row style={{
                                    background: '#fff',
                                    paddingLeft: '1em',
                                }}>
                                    <p>If you don't have a account, just click <Link to={'/sign-up'}>{this.props.t("SignUp")}</Link></p>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };

    renderMessage() {
        if (this.props.loginResult.message !== null) {
            if (this.props.loginResult.status) {
                return <Alert variant="info">{this.props.loginResult.message}</Alert>;
            } else {
                return <Alert variant="danger">{this.props.loginResult.message}</Alert>;
            }
        }
    }

    onEmailChange(e) {
        this.loginDTO.username_or_email = e.currentTarget.value;
    }

    onPasswordChange(e) {
        this.loginDTO.password = e.currentTarget.value;
    }

    login() {
        if (this.loginDTO.username_or_email === '' || this.loginDTO.password === '') {
        } else {
            this.setState({
                btnLogin: {
                    disabled: true,
                    text: this.props.t("Logging")
                }
            });
            this.props.doLogin(this.loginDTO);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginResult !== this.props.loginResult) {
            this.setState({
                btnLogin: {
                    disabled: false,
                    text: this.props.t("Login")
                }
            });
            if (nextProps.loginResult.status) {
                cookie.save("auth", nextProps.loginResult);
            }
        }
    }
}

const mapStateToProps = state => ({
    loginResult: state.reduxResult.loginResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    doLogin,
}, dispatch);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Login));
