import React, {Component} from 'react';
import './Kanban.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {withTranslation} from "react-i18next";
import CardRow from "../../components/card-row/CardRow";

const todo = [
    {
        title: '测试测试',
        status: 'todo',
        deadline: '2020-12-09 12:08',
        persons: [
            {
                icon: 'https://avatars3.githubusercontent.com/u/9292449?s=460&u=f68ae8454198207871ded8e6aa703def29cba182&v=4',
                name: 'Yang',
                github: 'https://github.com/nerososft'
            }
        ],
        tags: [
            {
                name: 'kernel',
                color: 'green'
            },
            {
                name: 'high',
                color: 'red'
            }
        ],
        comments: [
            {
                people: {
                    icon: 'https://avatars3.githubusercontent.com/u/9292449?s=460&u=f68ae8454198207871ded8e6aa703def29cba182&v=4',
                    name: 'Yang',
                    github: 'https://github.com/nerososft'
                },
                comment: '这是一条评论',
                time: '2020-12-09 12:07'
            }
        ]
    }
];

class Kanban extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<Container className="Kanban">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>{this.props.t("Kanban")}</h1>
                    <h4>Join the SynestiaOS Kanban and take a task!</h4>
                </Col>
            </Row>
            <Row style={{background: '#f5f5f6', padding: 0}}>
                <CardRow data={todo} title={'Todo'}/>
                <CardRow title={'Doing'}/>
                <CardRow title={'Done'}/>
                <CardRow title={'Others'}/>
            </Row>
        </Container>);
    };
}

export default withTranslation()(Kanban);
