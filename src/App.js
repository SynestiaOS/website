import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Container from "react-bootstrap/Container";
import Footer from "./components/footer/Footer";
import {Route, Switch,} from "react-router-dom";
import Header from "./components/header/Header";
import Developer from "./pages/developer/Developer";
import Sponsor from "./pages/sponsor/Sponsor";
import Blog from "./pages/blogs/Blog";
import Faq from "./pages/faq/Faq";
import CopyRight from "./components/copyright/CopyRight";
import BlogDetail from "./pages/blog-detail/BlogDetail";
import Forum from "./pages/forum/Forum";
import ForumDetail from "./pages/forum-detail/ForumDetail";
import Videos from "./pages/videos/Videos";
import Docs from "./pages/docs/Docs";
import GithubLogin from "./pages/github-login/GithubLogin";
import GithubIssuesDetail from "./pages/issues-detail/GithubIssuesDetail";

function App() {
    return (
        <Container className="App">
            <Header/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/sponsor" component={Sponsor}/>
                <Route exact path="/developer" component={Developer}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/blog-detail/:id" component={BlogDetail}/>
                <Route exact path="/faq" component={Faq}/>
                <Route exact path="/forum" component={Forum}/>
                <Route exact path="/videos" component={Videos}/>
                <Route exact path="/docs" component={Docs}/>
                <Route exact path="/github/callback" component={GithubLogin}/>
                <Route exact path="/forum-detail/:type/:id" component={ForumDetail}/>
                <Route exact path="/forum-detail/github/issue/:id" component={GithubIssuesDetail}/>
            </Switch>

            <Footer/>
            <CopyRight/>
        </Container>
    );
}

export default App;
