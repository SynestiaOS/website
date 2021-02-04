import React, {Component} from 'react';
import './Maintainers.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import {withTranslation} from "react-i18next";

class Maintainers extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row style={{paddingTop: '0em'}}>
                <Col md={12}>
                    <h2>{this.props.t("Maintainers")}></h2>
                    <Container style={{padding: '0'}}>
                        <Row style={{
                            background: '#fff',
                            padding: '1em',
                            paddingTop: '1em',
                            paddingBottom: '1em',
                            borderRight: '1px solid rgb(238, 238, 238)',
                            borderBottom: '1px solid rgb(238, 238, 238)'
                        }}>
                            {
                                this.props.data.map((item, index) => {
                                    let borderRight = '1px solid rgb(238, 238, 238)';
                                    let borderBottom = '1px solid rgb(238, 238, 238)';
                                    if ((index+1) % 4 === 0 && index !== 0) {
                                        borderRight = 'none';
                                    }
                                    if(index >= (this.props.data.length - (this.props.data.length % 4))){
                                        borderBottom = 'none';
                                    }
                                    return <Col md={3} style={{textAlign: 'center', borderRight: borderRight,borderBottom: borderBottom,paddingTop: '1em', paddingBottom: '1em',}}>
                                        <Image style={{width: '5em', height: '5em', borderRadius: '10em'}} src={item.img}/>
                                        <a style={{color: '#000'}} href={item.url}><h4 style={{marginTop: '0.5em'}}>{item.name}</h4></a>
                                        <p>
                                            {item.tags.map((tag, index) => {
                                                return <span style={{background: '#000', color: '#fff', padding: '0.1em 0.5em',marginRight:'0.5em'}}>{tag}</span>
                                            })}
                                        </p>
                                    </Col>
                                })
                            }
                            <Col md={3} style={{textAlign: 'center',borderRight:(this.props.data.length+1)%4===0?'none':'1px solid rgb(238, 238, 238)',paddingTop: '1em', paddingBottom: '1em',}}>
                                <Image style={{width: '5em', height: '5em', borderRadius: '10em'}} src={'https://avatars2.githubusercontent.com/u/64075044?s=60&v=4'}/>
                                <h2 style={{marginTop:0,padding:0}}>Join Us!</h2>
                                <h5>
                                    Let's do something cool!
                                </h5>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        );
    }
};

export default withTranslation()(Maintainers);
