import React, {Component} from 'react';
import './SignUp.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {withTranslation} from "react-i18next";
import {bindActionCreators} from "redux";
import {doSignUp} from "../../actions/authAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Alert} from "react-bootstrap";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.signUpDto = {
            username: '',
            email: '',
            password: ''
        }
    }

    render() {
        return (<Container className="SignUp">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>{this.props.t("SignUp")}</h1>
                    <h4>login</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0, paddingTop: '1em'}}>
                <Col md={12}>
                    <h2>{this.props.t("SignUp")} ></h2>
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
                                    <h1>{this.props.t("SignUp")}</h1>
                                </Row>
                                <Row style={{
                                    background: '#fff',
                                    padding: '0.5em 1em',
                                }}>
                                    {
                                        this.renderMessage()
                                    }
                                </Row>
                                <Row style={{
                                    background: '#fff',
                                    padding: '0.5em 1em',
                                }}>
                                    <Col md={2} style={{padding: 0, margin: 0}}>
                                        <span>Username:</span>
                                    </Col>
                                    <Col md={8} style={{padding: 0, margin: 0}}>
                                        <input onChange={this.onNameChange.bind(this)} style={{width: '100%'}} placeholder={'email'}/>
                                    </Col>
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
                                }}>
                                    <button style={{
                                        color: '#fff',
                                        height: '2em',
                                        width: '6em',
                                        background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                        border: 'none',
                                    }} onClick={this.signUp.bind(this)}>{this.props.t("SignUp")}
                                    </button>
                                </Row>
                                <Row style={{
                                    background: '#fff',
                                    paddingLeft: '1em',
                                }}>
                                    <p>If you already have a account, just click <Link to={'/login'}>{this.props.t("Login")}</Link></p>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>);
    };

    renderMessage() {
        if (this.props.signUpResult.message !== null) {
            if (this.props.signUpResult.status) {
                return <Alert variant="info">{this.props.signUpResult.message}</Alert>;
            } else {
                return <Alert variant="danger">{this.props.signUpResult.message}</Alert>;
            }
        }
    }

    onNameChange(e) {
        this.signUpDto.username = e.currentTarget.value;
    }

    onEmailChange(e) {
        this.signUpDto.email = e.currentTarget.value;
    }

    onPasswordChange(e) {
        this.signUpDto.password = e.currentTarget.value;
    }

    signUp() {
        if (this.signUpDto.email === '' || this.signUpDto.password === '' || this.signUpDto.username === '') {
        } else {
            this.props.doSignUp(this.signUpDto);
        }
    }
}

const mapStateToProps = state => ({
    signUpResult: state.reduxResult.signUpResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    doSignUp,
}, dispatch);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SignUp));
