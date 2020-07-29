import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Container from "react-bootstrap/Container";
import Footer from "./components/footer/Footer";
import {Route, Switch,} from "react-router-dom";
import Header from "./components/header/Header";
import Docs from "./pages/docs/Docs";
import Sponsor from "./pages/sponsor/Sponsor";

function App() {
    return (
        <Container className="App">
            <Header/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/sponsor" component={Sponsor}/>
                <Route exact path="/docs" component={Docs}/>
            </Switch>

            <Footer/>
        </Container>
    );
}

export default App;
