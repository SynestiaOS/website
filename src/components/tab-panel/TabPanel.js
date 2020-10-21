import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./TabPanel.css"

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
            <Container style={{padding: '0'}}>
                <Row style={{background: '#f5f6f7', padding: '0'}}>
                    <Navbar variant="light" style={{textAlign: 'left', padding: 0, borderBottom: 'solid 1px #eee'}}>
                        {
                            Object.keys(this.props.data).map((item, index) => {
                                let background = '#eee';
                                let color = '#007bff';
                                let fontWeight = 'light';
                                if (this.state.selectedTab === item) {
                                    color = '#000';
                                    background = '#fff';
                                    fontWeight = 'bold';
                                }
                                return <Nav.Link key={index} onClick={this.selectTab.bind(this, item)}
                                                 style={{color, background, fontWeight}}>{item}</Nav.Link>
                            })
                        }
                    </Navbar>
                </Row>
                <Row style={{background: '#fff', padding: '1em', borderRight: 'solid 1px #eee', borderBottom: 'solid 1px #eee'}}>
                    {
                        this.props.data[this.state.selectedTab] ? this.props.data[this.state.selectedTab].map((item, index) => {
                            return <Col md={12} style={{marginTop: '0.5em'}} key={index}>
                                <span style={{
                                    color: '#007bff',
                                    background: '#eee',
                                    transition: 'all .3s ease',
                                    border: 'none',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    width: '1em',
                                    marginRight: '1em',
                                    borderRadius: '3px',
                                }}>{index + 1}</span>{item.name}
                                <a href={item.url} style={{
                                    float: 'right',
                                    border: 'solid 1px #e1e9f4',
                                    paddingLeft: '0.5em',
                                    paddingRight: '0.5em',
                                    borderRadius: '.25rem',
                                    color: '#68778d',
                                    textAlign: 'center',
                                    transition: 'all .3s ease',
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
