import React from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import TestSplash from "../../components/text_splash/TestSplash";

function Home() {
    return (
        <Container className="Home">

            <TestSplash/>

        </Container>
    );
}

export default Home;
