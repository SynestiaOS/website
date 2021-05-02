import React, {Component} from 'react';
import './Card.css';
import Container from "react-bootstrap/Container";
import {withTranslation} from "react-i18next";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faComments, faPlus, faTag, faUser} from "@fortawesome/free-solid-svg-icons";
import {Col, Image, Modal} from "react-bootstrap";


function Tag(props) {
    return (
        <span {...props} style={{
            color: '#fff',
            background: props.background,
            borderRadius: '2px',
            paddingLeft: '0.3em',
            paddingRight: '0.3em',
            paddingTop: '0.1em',
            paddingBottom: '0.1em',
            fontSize: '0.7em',
            marginRight: '0.5em',
        }}>{props.title}</span>
    )

}

function CardModalWithGrid(props) {
    function renderComment(comment) {
        return <Row style={{marginTop: '1em'}}>
            <Col md={2}>
                <Image style={{
                    padding: 0, margin: 0,
                    width: '2em',
                    height: '2em',
                    borderRadius: '10em',
                    background: '#eee',
                    border: 'none',
                    marginRight: '0.1em',
                    marginBottom: '0.1em'
                }} src={comment.people.icon}/>
                <span style={{fontSize: '0.8em'}}>{comment.people.name}</span>
            </Col>

            <Col md={10}>
                <p style={{padding: 0, margin: 0}}>{comment.comment}</p>
                <p style={{padding: 0, margin: 0}}>{comment.time}</p>
            </Col>
        </Row>;
    }

    return (
        <Modal {...props}
               aria-labelledby="contained-modal-title-vcenter"
               dialogClassName="modal-70w"
               style={{border: 'none', borderRadius: '2em'}}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid" style={{borderRadius: '0'}}>
                <Container>
                    <Row>
                        <h4>{props.data.title}</h4>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <div style={{
                            color: '#666',
                            width: '2em',
                            height: '2em',
                            marginRight: '0.5em',
                            background: '#f3f3f3',
                            padding: '0.3em',
                            textAlign: 'center',
                            borderRadius: '5px'
                        }}>
                            <FontAwesomeIcon icon={faClock}/>
                        </div>
                        <div style={{
                            color: '#666',
                            width: '2em',
                            height: '2em',
                            marginRight: '0.5em',
                            background: '#f3f3f3',
                            padding: '0.3em',
                            textAlign: 'center',
                            borderRadius: '5px'
                        }}>
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div style={{
                            color: '#666',
                            width: '2em',
                            height: '2em',
                            marginRight: '0.5em',
                            background: '#f3f3f3',
                            padding: '0.3em',
                            textAlign: 'center',
                            borderRadius: '5px'
                        }}>
                            <FontAwesomeIcon icon={faTag}/></div>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <div style={{
                            color: '#666',
                            width: '2em',
                            height: '2em',
                            marginRight: '0.5em',
                            padding: '0.3em',
                            textAlign: 'center',
                            borderRadius: '5px'
                        }}><FontAwesomeIcon icon={faClock}/></div>
                        <div style={{marginTop: '0.2em'}}>
                            {props.data.deadline}
                        </div>
                        <div style={{
                            color: '#666',
                            width: '2em',
                            height: '2em',
                            marginRight: '0.5em',
                            padding: '0.3em',
                            textAlign: 'center',
                            borderRadius: '5px'
                        }}><FontAwesomeIcon icon={faPlus}/></div>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <div style={{
                            color: '#666',
                            width: '2em',
                            height: '2em',
                            marginRight: '0.5em',
                            padding: '0.3em',
                            textAlign: 'center',
                            borderRadius: '5px'
                        }}><FontAwesomeIcon icon={faUser}/></div>
                        {
                            props.data.persons.map((item, index) => {
                                return <Image style={{
                                    padding: 0, margin: 0,
                                    width: '2em',
                                    height: '2em',
                                    borderRadius: '10em',
                                    background: '#eee',
                                    border: 'none',
                                    marginRight: '0.1em',
                                    marginBottom: '0.1em'
                                }} src={item.icon}/>
                            })
                        }
                        <div style={{
                            color: '#666',
                            width: '2em',
                            height: '2em',
                            marginRight: '0.5em',
                            padding: '0.3em',
                            textAlign: 'center',
                            borderRadius: '5px'
                        }}><FontAwesomeIcon icon={faPlus}/></div>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <div style={{
                            color: '#666',
                            width: '2em',
                            height: '2em',
                            marginRight: '0.5em',
                            padding: '0.3em',
                            textAlign: 'center',
                            borderRadius: '5px'
                        }}><FontAwesomeIcon icon={faTag}/></div>
                        <div style={{marginTop: '0.2em'}}>
                            {
                                props.data.tags.map((item, index) => {
                                    return <Tag background={item.color} title={item.name}/>
                                })
                            }
                        </div>
                        <div style={{
                            color: '#666',
                            width: '2em',
                            height: '2em',
                            marginRight: '0.5em',
                            padding: '0.3em',
                            textAlign: 'center',
                            borderRadius: '5px'
                        }}><FontAwesomeIcon icon={faPlus}/></div>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <h5>评论：</h5>
                        <textarea style={{width: '100%', border: 'solid 1px #f3f3f3', borderRadius: '0.5em'}} placeholder={'请出入评论内容，按enter发送'}/>
                        {
                            props.data.comments.map((item, index) => {
                                return renderComment(item)
                            })
                        }
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showNewCard: false,
            modalShow: false,
        };
    }

    render() {
        return (
            <Container style={{
                paddingTop: '0.8em',
                paddingBottom: '0.8em',
                paddingLeft: '0.8em',
                paddingRight: '0.8em',
                margin: '0',
                borderRadius: '0.1em',
                marginBottom: '0.5em',
                background: '#fff',
                boxShadow: '4px 4px 10px 2px #ececec'
            }}>
                <Row style={{padding: 0, margin: 0}}>
                    {
                        this.props.data.tags.map((item, index) => {
                            return <Tag background={item.color} title={item.name}/>
                        })
                    }
                </Row>
                <Row style={{padding: 0, paddingTop: '0.5em', margin: 0}} onClick={this.setModalShow.bind(this, true)}>
                    <span style={{fontSize: '0.9em'}}>{this.props.data.title}</span>
                </Row>
                <Row style={{padding: 0, margin: "0.5em 0em"}}>
                    <Col md={8} style={{padding: 0, margin: 0, textAlign: 'left'}}>
                        <span style={{color: '#bbb', textAlign: 'left'}}><FontAwesomeIcon icon={faClock}/> {this.props.data.deadline}</span>
                    </Col>
                    <Col md={4} style={{padding: 0, margin: 0, textAlign: 'right'}}>
                        <span style={{color: '#bbb'}}><FontAwesomeIcon icon={faComments}/> {this.props.data.comments.length}</span>
                    </Col>
                </Row>
                <Row style={{padding: 0, margin: 0}}>
                    {
                        this.props.data.persons.map((item, index) => {
                            return <Image style={{
                                padding: 0, margin: 0,
                                width: '2em',
                                height: '2em',
                                borderRadius: '10em',
                                background: '#eee',
                                border: 'none',
                                marginRight: '0.1em',
                                marginBottom: '0.1em'
                            }} src={item.icon}/>
                        })
                    }
                </Row>
                <CardModalWithGrid data={this.props.data} title={this.props.cardRowTitle} show={this.state.modalShow}
                                   onHide={this.setModalShow.bind(this, false)}/>
            </Container>
        );
    }

    setModalShow(visible) {
        this.setState({
            modalShow: visible
        });
    }
}

export default withTranslation()(Card);
