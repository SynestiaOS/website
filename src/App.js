import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Container from "react-bootstrap/Container";
import Footer from "./components/footer/Footer";
import {Route, Switch,} from "react-router-dom";

function App() {
    return (
        <Container className="App">
            {/*<Header/>*/}

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
            </Switch>

            <Footer/>
        </Container>
    );
}

export default App;
