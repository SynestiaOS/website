import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap";
import TabPanel from "../../components/tab-panel/TabPanel";
import GithubInfo from "../../components/github-info/GithubInfo";

const boards = {
    Supported: [
        {
            name: 'RaspberryPi 4',
            url: 'https://www.raspberrypi.org/products/raspberry-pi-4-model-b/'
        }
    ],
    Supporting: [
        {
            name: 'RaspberryPi 3B',
            url: 'https://www.raspberrypi.org/products/'
        },
        {
            name: 'RaspberryPi 3B+',
            url: 'https://www.raspberrypi.org/products/'
        },
        {
            name: 'RaspberryPi Zero W',
            url: 'https://www.raspberrypi.org/products/'
        }
    ],
    Planing: [
        {
            name: 'Hi3559A',
            url: 'http://www.haitutech.com/proinfo/22?renqun_youhua=475742&bd_vid=7644577626235852273'
        }
    ]
};

const components = {
    Works: [
        {
            name: 'LibC',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'LibGfx2D',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'LibGfx3D',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'LibGUI',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
    ],
    Doing: [
        {
            name: 'LibNet',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'LibGfx3D',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'LibMath',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'LibHtml',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
    ],
    Todo: [
        {
            name: 'LibJS',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }, {
            name: 'LibIPC',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
    ]
};

const kernel = {
    Done: [
        {
            name: 'Thread',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }, {
            name: 'Scheduler',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }, {
            name: 'VMM',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }, {
            name: 'Mutex',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }, {
            name: 'Semaphore',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'SysCall',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'Ext2',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'VFS',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }
    ],
    Doing: [
        {
            name: 'SysCall',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }
    ],
    Todo: [
        {
            name: 'HAL',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }
    ]
};

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="Home">
            <Row style={{textAlign: 'left', padding: '2em'}}>
                <Col>
                    <h1>Build IOT Devices with Synestia</h1>
                    <h4>An Open Source, standards-based software platform for IOT
                        devices, including smartwatch, TVs and automotive infotainment platforms.</h4>
                    <a href={"https://github.com/SynestiaOS/SynestiaOS"}
                       style={{fontWeight: 'normal', marginTop: '2em', marginLeft: 'auto', marginRight: 'auto'}}>
                        <button style={{
                            color: '#fff',
                            background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                            transition: 'all .3s ease',
                            height: '2em',
                            width: '6em',
                            border: 'none',
                            borderRadius: '3px',
                        }}>Learn More
                        </button>
                    </a>
                </Col>
            </Row>
            <GithubInfo/>
            <Row style={{background: '#f5f5f6', paddingTop: '2em'}}>
                {this.renderKernel()}
                {this.renderComponents()}
                {this.renderDevices()}
            </Row>
        </Container>);
    };

    renderKernel() {
        return <Col md={4}>
            <h2>Kernel ></h2>
            <TabPanel data={kernel}/>
        </Col>;
    }

    renderComponents() {
        return <Col md={4}>
            <h2>Components ></h2>
            <TabPanel data={components}/>
        </Col>;
    }

    renderDevices() {
        return <Col md={4}>
            <h2>Device ></h2>
            <TabPanel data={boards}/>
        </Col>;
    }
}

export default Home;
