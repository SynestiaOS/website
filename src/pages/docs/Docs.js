import React, {Component} from 'react';
import './Docs.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/ll.png";

const markdown = require("markdown").markdown;

class Docs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMarkDown: 'An Open Source, standards-based software platform for IOT devices, including smartwatch, TVs and automotive infotainment platforms.'
        };
    }

    render() {
        let md = "# SynestiaOS\n" +
            "## An Open Source, standards-based software platform for IOT devices, including smartwatch, TVs and automotive infotainment platforms.\n" +
            "\n" +
            "# Prepare Environment\n" +
            "## Clion\n" +
            "[Clion](https://www.jetbrains.com/clion) is recommend to used as our development environment, and use docker to build the kernel.\n" +
            "under this **Docker** dir, run following command to setup dev environment\n" +
            "```\n" +
            "docker-compose up -d dev-prebuilt\n" +
            "```\n" +
            "within the docker container, we setup the ssh environment, and we can connect to the container through ssh.\n" +
            "```\n" +
            "docker-compose exec dev-prebuilt /bin/bash\n" +
            "cd Build\n" +
            "cmake .. && make\n" +
            "```\n" +
            "within Clion, Settings->Build,Execution,Deployment->Toolchain, click add a remote host, \n" +
            "and input the credentials, user: root, password: password. and it's done.\n" +
            "\n" +
            "## for linux:\n" +
            "``` bash\n" +
            "sudo bash Scripts/SetupLinux.sh\n" +
            "```\n" +
            "## for windows:\n" +
            "\n" +
            "## for docker:\n" +
            "under this project dir, run following command to setup dev environment\n" +
            "\n```\n" +
            "docker-compose up -d dev-prebuilt\n" +
            "```\n" +
            "\n" +
            "# code formatting\n" +
            "under this project dir, run following command to format the code \n" +
            "\n```\n" +
            "docker-compose run dev-prebuilt bash run-clang-foramt.sh\n" +
            "``` \n" +
            "# Build, Run and Debug\n" +
            "within the docker container, under the Build dir, run following command to build kernel\n" +
            "\n```\n" +
            "cmake .. && make VERBOSE=1\n" +
            "```\n\n" +
            "if you are using mac, specify the cross compile toolchain in CMake/ToolchainArmMac.cmake, \n" +
            "and specify the toolchain file location\n" +
            "\n```\n" +
            "cmake -DCMAKE_TOOLCHAIN_FILE=${PATH_TO_THIS_PROJECT}/SynestiaOS/CMake/ToolchainArmMac.cmake .. && make VERBOSE=1\n" +
            "```\n\n" +
            "To run kernel, you can find the kernel image under Build/\n" +
            "\n```\n" +
            "qemu-system-arm -M raspi2 -kernel bin/Kernel.img -nographic -serial mon:stdio      #for raspi2 and arm32\n" +
            "```\n\n" +
            "```\n" +
            "qemu-system-aarch64 -M raspi3 -kernel bin/Kernel.img -nographic -serial mon:stdio  #for raspi3 and arm64\n" +
            "```\n\n" +
            "To clean workspace:\n" +
            "\n```\n" +
            "make clean\n" +
            "```\n\n" +
            "To debug kernel, arm32 for instance:\n" +
            "openup terminal 1:\n" +
            "\n```\n" +
            "qemu-system-arm -M raspi2 -kernel Kernel.img -s -S -nographic\n" +
            "```\n\n" +
            "openup terminal 2:\n" +
            "\n```\n" +
            "gdb-multiarch Kernel.img\n" +
            "(gdb) target remote :1234\n" +
            "(gdb) display/i $pc\n" +
            "(gdb) break _start\n" +
            "(gdb) c\n" +
            "(gdb) si\n" +
            "```\n" +
            "# Project Management\n" +
            "[JIRA](https://synestiaos.atlassian.net/)\n" +
            "\n" +
            "# Pipeline\n" +
            "[Jenkins](http://ci.synestiaos.org/)\n" +
            "\n" +
            "# Resource\n" +
            "[Makefile](https://wiki.ubuntu.org.cn/%E8%B7%9F%E6%88%91%E4%B8%80%E8%B5%B7%E5%86%99Makefile:%E6%A6%82%E8%BF%B0)";
        let tree = markdown.toHTMLTree(md);

        console.log(tree);
        let ul = [];
        for (let line in tree) {
            if ('h1' === tree[line][0]) {
                ul.push(<li style={{fontWeight:'bold'}} onClick={this.renderMarkdownDoc.bind(this, "")}>{tree[line][1]}</li>);
            }
        }

        return (<Container className="Home">
            <Row style={{height: '16em', textAlign: 'center', paddingTop: '4em'}}>
                <Col style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: "auto", paddingBottom: 'auto', marginBottom: 0, padding: 0}}>
                    <Image src={Logo} className="logo-img"/>
                    <h1 style={{color: '#000', fontWeight: 'normal', marginTop: '0.5em'}}>Documents for developer</h1>
                </Col>
            </Row>
            <Row style={{background: '#fff', padding: 0}}>
                <Col md={3} style={{padding: '2em'}}>
                    {ul}
                </Col>
                <Col md={9} style={{paddingTop: '2em'}}>
                    <Container dangerouslySetInnerHTML={{__html: markdown.toHTML(md)}}>
                    </Container>
                </Col>
            </Row>
        </Container>);
    };

    renderMarkdownDoc(markdown) {
        this.setState({
            currentMarkDown: markdown
        })
    }
}

export default Docs;
