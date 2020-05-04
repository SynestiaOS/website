import React, {Component} from 'react';
import './HowWeWork.css';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

class HowWeWork extends Component {
    render() {
        return (
            <Container className="HowWeWork">
                <Container>
                    <h1>How we work?</h1>


                    <h5>我们使用<a href="https://synestiaos.atlassian.net/">Jira</a>作为项目管理工具,<a href="https://github.com/SynestiaOS">Git</a> 作为代码管理平台，并尝试使用敏捷的方式来推进这个项目。</h5>
                    <Row>
                        <Col md={12}>&nbsp;</Col>
                    </Row>
                    <h5> 一个功能点从诞生到完成需要经过下面几个流程：</h5>

                </Container>

                <Container>
                    <Container className="inner-step">
                        <h3> 1. 建卡</h3>

                        <ul>
                            <li><h4>1. 架构师将技术分解成卡之后放在TODO中。</h4></li>
                            <li><h4>2. 自己建卡的话放到BACKLOG中，待架构师根据当前的状态对其进行评估，如果可以开发就将该卡挪到TODO中。</h4></li>
                        </ul>
                    </Container>

                    <Container className="inner-step">

                        <h3> 2. 开发</h3>

                        <h4>将TODO中的卡assign给自己并将其挪到IN PROGRESS中，并开始开发。</h4>
                    </Container>

                    <Container className="inner-step">
                        <h3> 3. 验证</h3>

                        <h4>将卡挪到DEV DONE中，自行验证该功能的正确性。</h4>
                    </Container>

                    <Container className="inner-step">
                        <h3> 4. ShowCase</h3>

                        <h4>预约团队成员进行ShowCase，并将卡挪到ShowCase中，参与ShowCase的团队成员必须大与3人，其中一人必须为架构师。</h4>
                    </Container>

                    <Container className="inner-step">
                        <h3> 5. 发布</h3>

                        <h4>如果ShowCase没有问题就将卡挪到DONE中，Cheers，该卡开发完毕。</h4>
                    </Container>
                </Container>
            </Container>
        );
    }
}

export default HowWeWork;
