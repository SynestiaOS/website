import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import TestSplash from "../../components/text_splash/TestSplash";
import Features from "../../components/features/Features";
import Events from "../../components/events/Events";

class Home extends Component {
    render() {
        return (<Container className="Home">

            <TestSplash/>
            <Features/>
            <Events/>

        </Container>);
    };
}

export default Home;
