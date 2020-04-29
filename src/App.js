import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Container from "react-bootstrap/Container";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>

            <Router>
                <Switch>
                    <Route path="/"><Home/></Route>
                    <Route path="/home"><Home/></Route>
                    <Route path="/who-we-are"><Home/></Route>
                    <Route path="/what-we-do"><Home/></Route>
                    <Route path="/how-we-work"><Home/></Route>
                    <Route path="/contact"><Home/></Route>
                </Switch>
            </Router>

            <Container>
                <Footer/>
            </Container>
        </div>
    );
}

export default App;
