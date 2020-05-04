import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Container from "react-bootstrap/Container";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, Switch,} from "react-router-dom";
import HowWeWork from "./pages/how-we-work/HowWeWork";

function App() {
    return (
        <div className="App">
            <Header/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/who-we-are" component={Home}/>
                <Route exact path="/what-we-do" component={Home}/>
                <Route exact path="/how-we-work" component={HowWeWork}/>
                <Route exact path="/contact" component={Home}/>
            </Switch>

            <Container>
                <Footer/>
            </Container>
        </div>
    );
}

export default App;
