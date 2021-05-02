import React, {Component} from 'react';
import './CardRow.css';
import Container from "react-bootstrap/Container";
import {withTranslation} from "react-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../card/Card";

class CardRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showNewCard: false,
        };
    }


    render() {
        return (
            <Col md={3} className="CardRow">
                <Row style={{padding: 0, margin: 0}}>
                    <h3>{this.props.title}</h3>
                </Row>
                <Row style={{paddingLeft: '1em', paddingRight: '1em'}}>
                    {this.props.data && this.props.data.map((item, index) => {
                        return <Card data={item} cardRowTitle={this.props.title}/>
                    })}
                    {this.renderNewCardInput(this.state.showNewCard)}
                    {/* <Container style={{
                        paddingTop: '0.8em',
                        paddingBottom: '0.8em',
                        paddingLeft: '0.8em',
                        paddingRight: '0.8em',
                        margin: '0',
                        borderRadius: '3em',
                        background: '#fff',
                        textAlign: 'center'
                    }}>
                        <Row style={{padding: 0, margin: 0, textAlign: 'center'}} onClick={this.showNewCard.bind(this)}>
                            <span style={{padding: 0, margin: 0, float: 'center'}}> + 添加卡片</span>
                        </Row>
                    </Container> */}
                </Row>
            </Col>
        );
    }

    showNewCard() {
        this.setState({
            showNewCard: true
        });
    }

    renderNewCardInput(show) {
        return show ? <Container style={{
            paddingTop: '0.8em',
            paddingBottom: '0.8em',
            paddingLeft: '0.8em',
            paddingRight: '0.8em',
            margin: '0',
            borderRadius: '0.5em',
            marginBottom: '1em',
            background: '#fff',
            boxShadow: '4px 4px 10px 2px #ececec'
        }}>
            <Row style={{padding: 0, margin: 0, textAlign: 'center'}}>
                <textarea style={{width: '100%', border: 'none'}} placeholder={'输入卡片内容'}/>
            </Row>
        </Container> : null;
    }
}

export default withTranslation()(CardRow);
