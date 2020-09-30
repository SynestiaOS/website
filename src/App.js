import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Container from "react-bootstrap/Container";
import Footer from "./components/footer/Footer";
import {Route, Switch,} from "react-router-dom";
import Header from "./components/header/Header";
import Docs from "./pages/docs/Docs";
import Sponsor from "./pages/sponsor/Sponsor";
import Blog from "./pages/blogs/Blog";
import Faq from "./pages/faq/Faq";
import CopyRight from "./components/copyright/CopyRight";

function App() {
    return (
        <Container className="App">
            <Header/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/sponsor" component={Sponsor}/>
                <Route exact path="/docs" component={Docs}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/faq" component={Faq}/>
            </Switch>

            <Footer/>
            <CopyRight/>
        </Container>
    );
}

export default App;
