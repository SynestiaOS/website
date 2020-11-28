import React, {Component} from 'react';
import './GithubInfo.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class GithubInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commits: 'loading',
            contributors: 'loading',
            forks: 'loading',
            stars: 'loading',
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/SynestiaOS/SynestiaOS/stats/commit_activity')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {

                }
            })
            .then(data => {
                console.log(data);
                let all = 0;
                if(data) {
                    data.map((item) => {
                        all = all + item.total;
                    });
                }
                this.setState(
                    {
                        commits: all
                    }
                );
            });

        fetch('https://api.github.com/repos/SynestiaOS/SynestiaOS')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {

                }
            })
            .then(data => {
                console.log(data);
                if(data) {
                    this.setState(
                        {
                            stars: data.stargazers_count,
                            forks: data.forks_count,
                        }
                    );
                }
            });

        fetch('https://api.github.com/repos/SynestiaOS/SynestiaOS/contributors')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {

                }
            })
            .then(data => {
                console.log(data);
                this.setState(
                    {
                        contributors: data.length
                    }
                );
            });
    }

    render() {
        return (
            <Row style={{background: '#f5f5f6', paddingTop: '0em', borderTop: 'solid 1px #eee'}}>
                <Col md={3}>
                    <Row style={{background: '#fff', padding: '1em', borderRight: 'solid 1px #eee'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <h1 style={{fontWeight: 'bold'}}>{this.state.commits}</h1>
                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <h5>Commits</h5>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <Row style={{background: '#fff', padding: '1em', borderRight: 'solid 1px #eee'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <h1 style={{fontWeight: 'bold'}}>6</h1>
                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <h5>Contributors</h5>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <Row style={{background: '#fff', padding: '1em', borderRight: 'solid 1px #eee'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <h1 style={{fontWeight: 'bold'}}>10</h1>
                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <h5>Forks</h5>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <Row style={{background: '#fff', padding: '1em'}}>
                        <Col md={12} style={{textAlign: 'center'}}>
                            <h1 style={{fontWeight: 'bold'}}>55</h1>
                        </Col>
                        <Col md={12} style={{marginTop: '1em', textAlign: 'center'}}>
                            <h5>Stars</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default GithubInfo;
