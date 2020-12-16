import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabPanel from "../../components/tab-panel/TabPanel";
import GithubInfo from "../../components/github-info/GithubInfo";
import Maintainers from "../../components/maintainers/Maintainers";
import {Image} from "react-bootstrap";

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
            name: 'CFS',
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
            name: 'Slab',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'Buddy',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'SysCall',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }
    ],
    Todo: [
        {
            name: 'SMP',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'EAS',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        },
        {
            name: 'HAL',
            url: 'https://github.com/SynestiaOS/SynestiaOS'
        }
    ]
};

const maintainers = [
    {
        img: 'https://avatars0.githubusercontent.com/u/9292449?s=60&v=4',
        name: 'NeoYang',
        url: 'https://github.com/nerososft',
        tags: [
            'kernel', 'libs', 'community'
        ]
    }, {
        img: 'https://avatars0.githubusercontent.com/u/8529077?s=460&u=2adc9c22600c5aec9e7fd63e6a36c3ec3bad791b&v=4',
        name: 'wooshifu',
        url: 'https://github.com/wooshifu',
        tags: [
            'tools', 'kernel'
        ]
    },
    {
        img: 'https://avatars0.githubusercontent.com/u/38398280?s=460&u=bc3e7916a9d8fd51cc31be0c5e009b1f917b1e67&v=4',
        name: 'Chenyu Zhao',
        url: 'https://github.com/LinkinPF',
        tags: [
            'kernel', 'community'
        ]
    },
    {
        img: 'https://avatars2.githubusercontent.com/u/1702340?s=460&v=4',
        name: 'Fan Jiang',
        url: 'https://github.com/tcz001',
        tags: [
            'kernel', 'device'
        ]
    },
    {
        img: 'https://avatars3.githubusercontent.com/u/16302926?s=460&u=72a3f27f8dfa9423fd4ec4c847a397090fc28e4a&v=4',
        name: 'Tao Liu',
        url: 'https://github.com/liutgnu',
        tags: [
            'kernel', 'device'
        ]
    },
    {
        img: 'https://avatars2.githubusercontent.com/u/22252972?s=460&u=07652db53c67f224919bde52d64b8d47b06a5d6a&v=4',
        name: 'HuBing Liu',
        url: 'https://github.com/liuhubing',
        tags: [
            'kernel', 'device'
        ]
    },
    {
        img: 'https://avatars0.githubusercontent.com/u/12967882?s=460&u=968d486f7e58568089a8ff1e7aedc5e6c2ce30e1&v=4',
        name: 'Hongzhi Niu',
        url: 'https://github.com/MRNIU',
        tags: [
            'kernel'
        ]
    },

];

const communityMeeting = [
    {
        title: '第二次社区线上交流',
        content: '因为时间关系，被迫取消',
        time: '2020-12-12 20:00 (UTC+8)',
        status: 'Canceled',
        url: 'https://thoughtworks.zoom.com.cn/j/94774989388'
    },
    {
        title: '第三次社区线上交流',
        content: '项目进度未来计划与项目运作方式介绍, 参与指南',
        time: '2020-1-11 20:00 (UTC+8)',
        status: 'Normal',
        url: 'https://thoughtworks.zoom.com.cn/j/94774989388'
    }, {
        title: '第四次社区线上交流',
        content: '第四次社区线上交流内容待定',
        time: '2020-2-9 20:00 (UTC+8)',
        status: 'Normal',
        url: 'https://thoughtworks.zoom.com.cn/j/94774989388'
    },
    {
        title: '第五次社区线上交流',
        content: '第五次社区线上交流内容待定',
        time: '2020-3-8 20:00 (UTC+8)',
        status: 'Normal',
        url: 'https://thoughtworks.zoom.com.cn/j/94774989388'
    },
    {
        title: '第六次社区线上交流',
        content: '第六次社区线上交流内容待定',
        time: '2020-4-7 20:00 (UTC+8)',
        status: 'Normal',
        url: 'https://thoughtworks.zoom.com.cn/j/94774989388'
    }
];

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectMeetingIndex: 1,
        };
    }

    render() {
        return (<Container className="Home">
            <Row style={{
                textAlign: 'left',
                background: '#fff',
                backgroundSize: '100%',
                color: '#000',
                paddingTop: '4em',
                paddingLeft: '4em',
                paddingRight: '4em'
            }}>
                <Col md={12} style={{textAlign: 'left'}}>
                    <Row style={{textAlign: 'left', paddingBottom: '2em'}}>
                        <h1>Build IOT Devices with Synestia</h1>
                        <h4>An Open Source, standards-based software platform for IOT
                            devices, including smartwatch, TVs and automotive infotainment platforms.</h4>
                        <a href={"https://github.com/SynestiaOS/SynestiaOS"}
                           style={{fontWeight: 'normal', marginTop: '1em'}}>
                            <button style={{
                                color: '#fff',
                                background: 'linear-gradient(to right, #0d318f 0%, #00a0e9 100%)',
                                transition: 'all .3s ease',
                                height: '2em',
                                width: '6em',
                                border: 'none',
                            }}>Learn More
                            </button>
                        </a>
                    </Row>
                    <GithubInfo/>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', paddingTop: '2em'}}>
                <Col md={8} style={{padding:0,margin:0,}}>
                    <h2>Events ></h2>
                    <Container style={{padding: '0',overflow:'hidden',background:'#fff',height:'25em'}}>
                        <Row
                            style={{
                                background: '#fff',
                                height: '25em',
                                padding: '1em',
                                margin:0,
                                position: 'relative',
                                zIndex:10,
                            }}>
                        </Row>
                        <Row className={'wave_base'}/>
                        <Row className={'wave'}/>
                        <Row style={{
                            height: '25em',
                            padding: '1em',
                            position: 'relative',
                            borderBottom: '1px solid rgb(238, 238, 238)',
                            zIndex:12,
                            marginTop:'-30em',
                        }}>
                            <Col md={12} style={{paddingTop:'1em'}}>
                                <h1> <span style={{
                                    width: '1em',
                                    height: '1em',
                                    background: communityMeeting[this.state.selectMeetingIndex].status === 'Canceled' ? 'red' : 'green',
                                    borderRadius: '2px',
                                    zIndex:'11',
                                }}>&nbsp;</span>&nbsp;&nbsp;{communityMeeting[this.state.selectMeetingIndex].title}</h1>
                                <p>{communityMeeting[this.state.selectMeetingIndex].time}</p>
                            </Col>
                            <Col md={12} style={{marginTop:'-5em'}}>
                                <h3>{communityMeeting[this.state.selectMeetingIndex].content}</h3>
                            </Col>
                            <Col md={12}>
                                <a href={communityMeeting[this.state.selectMeetingIndex].url}
                                   style={{fontWeight: 'normal', marginTop: '1em'}}>
                                    <h4 disabled={communityMeeting[this.state.selectMeetingIndex].status === 'Canceled' ? 'disabled' : ''}
                                            style={{
                                                color: '#000',
                                                transition: 'all .3s ease',
                                                height: '2em',
                                                marginTop:'-4em',
                                                border: 'none',
                                            }}>Join Meeting >
                                    </h4>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md={4}>
                    <h2>&nbsp;</h2>
                    <Container style={{padding: '0'}}>
                        <Row style={{
                            background: '#fff',
                            padding: '1em',
                            height: '25em',
                            borderLeft: '1px solid rgb(238, 238, 238)',
                            borderRight: '1px solid rgb(238, 238, 238)',
                            borderBottom: '1px solid rgb(238, 238, 238)'
                        }}>
                            {this.renderCommunityPlan()}
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Maintainers data={maintainers}/>
            <Row style={{background: '#f5f5f6', paddingTop: '2em'}}>
                <Col md={12}>
                    <h2>Partner ></h2>
                    <Container style={{padding: '0'}}>
                        <Row style={{
                            background: '#fff',
                            padding: '1em',
                            borderBottom: '1px solid rgb(238, 238, 238)',
                            borderRight: '1px solid rgb(238, 238, 238)'
                        }}>
                            <Col md={2}>
                                <Image style={{width: '8em', padding: '0.5em'}} src={'https://scriptiot.github.io/evm_doc/zh-cn/image/logo.png'}/>
                            </Col>
                            <Col md={10}>
                                <h4>EVM (Embedded Virtual Machine)</h4>
                                <p>The full name of EVM is Embedded Virtual Machine, which is essentially a general-purpose and streamlined embedded
                                    virtual machine. It is composed of a front-end framework for syntax analysis and a back-end bytecode operation. It
                                    can run on a single-chip with limited resources.</p>
                                <a href={'https://scriptiot.github.io/evm_doc/#/zh-cn/evm_what'}>Go to detail ></a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row style={{background: '#f5f5f6', paddingTop: '2em'}}>
                <Col md={6}>
                    <h2>Learning & Technology Exchange ></h2>
                    <Container style={{padding: '0'}}>
                        <Row style={{
                            background: '#fff',
                            padding: '1em',
                            height: '7em',
                            borderRight: '1px solid rgb(238, 238, 238)',
                            borderBottom: '1px solid rgb(238, 238, 238)'
                        }}>
                            <h5>If you have any technical problems or suggestions, you are welcome to join WeChat (15122372903) to join the group and
                                communicate with other developers</h5>
                        </Row>
                    </Container>
                </Col>
                <Col md={6}>
                    <h2>Cooperation & Feedback ></h2>
                    <Container style={{padding: '0'}}>
                        <Row style={{
                            background: '#fff',
                            padding: '1em',
                            height: '7em',
                            borderRight: '1px solid rgb(238, 238, 238)',
                            borderBottom: '1px solid rgb(238, 238, 238)'
                        }}>
                            <h5>If you have any suggestions on our products, please contact us and look forward to communicating with you.</h5>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>);
    };

    selectCommunity(index) {
        this.setState({
            selectMeetingIndex: index,
        });
    }

    renderCommunityPlan() {
        return <Col md={12} style={{height: '23em', overflowX: 'scroll'}}>
            {
                communityMeeting.map((item, index) => {
                    return <Row style={{padding: 0, borderBottom: '1px solid rgb(238, 238, 238)'}}>
                        <Col md={9} style={{background: '#fff', paddingTop: '1em'}} onClick={this.selectCommunity.bind(this, index)}>
                            <span style={{
                                width: '1em',
                                height: '1em',
                                background: item.status === 'Canceled' ? 'red' : 'green',
                                borderRadius: '2px'
                            }}>&nbsp;</span>&nbsp;&nbsp;<strong>{item.title}</strong>
                            <p>{item.time}</p>
                        </Col>
                        <Col md={3} style={{background: '#fff', paddingTop: '1em', borderLeft: '1px solid rgb(238, 238, 238)'}}>
                            <Row style={{padding: 0, paddingLeft: '0.5em'}}>
                                <span style={{
                                    color: '#000',
                                    background: '#fff',
                                    transition: 'all .3s ease',
                                    height: '100%',
                                    width: '100%',
                                    border: 'none',
                                }}>{item.status}</span>
                            </Row>
                            {item.status !== 'Canceled' &&
                            <Row style={{padding: 0, paddingLeft: '0.5em', borderTop: '1px solid rgb(238, 238, 238)'}}>
                                <a href={item.url} style={{
                                    color: '#000',
                                    background: '#fff',
                                    transition: 'all .3s ease',
                                    height: '100%',
                                    width: '100%',
                                    border: 'none',
                                }}>Join&nbsp;&gt;&gt;</a>
                            </Row>
                            }
                        </Col>
                    </Row>
                })
            }
        </Col>;
    }

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
