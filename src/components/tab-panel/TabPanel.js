import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class TabPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: ''
        }
    }

    selectTab(tab) {
        this.setState({
            selectedTab: tab
        });
    }

    componentDidMount() {
        this.setState({
            selectedTab: Object.keys(this.props.data)[0]
        });
    }

    render() {
        return (
            <Container style={{paddingLeft: '0'}}>
                <Row style={{background: '#eee', padding: '0'}}>
                    <Navbar variant="light" style={{textAlign: 'left', padding: 0, borderBottom: 'solid 1px #eee', width: '100%'}}>
                        {
                            Object.keys(this.props.data).map((item, index) => {
                                let background = '#eee';
                                if (this.state.selectedTab === item) {
                                    background = '#fff';
                                }
                                return <Nav.Link key={index} onClick={this.selectTab.bind(this, item)}
                                                 style={{color: '#000', background}}>{item}</Nav.Link>
                            })
                        }
                    </Navbar>
                </Row>
                <Row style={{background: '#fff', padding: '1em'}}>
                    {
                        this.props.data[this.state.selectedTab] ? this.props.data[this.state.selectedTab].map((item, index) => {
                            return <Col md={12} style={{marginTop: '0.5em'}} key={index}>
                                {item.name}
                                <a href={item.url} style={{
                                    float: 'right',
                                    color: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                    textAlign: 'center',
                                    transition: 'all .3s ease',
                                    padding: '0.2em',
                                    fontWeight: 'bold',
                                }}>detail &gt;</a>
                            </Col>
                        }) : null
                    }
                </Row>
            </Container>
        );
    }
}

export default TabPanel;
