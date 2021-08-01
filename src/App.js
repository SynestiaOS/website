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
import BlogDetail from "./pages/blog-detail/BlogDetail";
import Forum from "./pages/forum/Forum";
import ForumDetail from "./pages/forum-detail/ForumDetail";
import Videos from "./pages/videos/Videos";
import Docs from "./pages/docs/Docs";
import GithubLogin from "./pages/github-login/GithubLogin";
import GithubIssuesDetail from "./pages/issues-detail/GithubIssuesDetail";
import Tools from "./pages/Tools/Tools";
import Kanban from "./pages/kanban/Kanban";
import Login from "./pages/login/Login";
import Me from "./pages/me/Me";
import SignUp from "./pages/sign-up/SignUp";
import Resources from "./pages/resources/Resources";
import Cpu from './pages/cpu/Cpu';
import Board from './pages/board/Board';

function App() {
    return (
        <Container className="App" style={{padding:0}}>
            <Header/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/sponsor" component={Sponsor}/>
                <Route exact path="/kanban" component={Kanban}/>
                <Route exact path="/developer" component={Developer}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/blog-detail/:id" component={BlogDetail}/>
                <Route exact path="/faq" component={Faq}/>
                <Route exact path="/tools" component={Tools}/>
                <Route exact path="/forum" component={Forum}/>
                <Route exact path="/videos" component={Videos}/>
                <Route exact path="/docs" component={Docs}/>
                <Route exact path="/cpus" component={Cpu}/>
                <Route exact path="/boards" component={Board}/>
                <Route exact path="/github/callback" component={GithubLogin}/>
                <Route exact path="/forum-detail/:type/:id" component={ForumDetail}/>
                <Route exact path="/forum-detail/github/issue/:id" component={GithubIssuesDetail}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/sign-up" component={SignUp}/>
                <Route exact path="/me" component={Me}/>
                <Route exact path="/resources" component={Resources}/>

            </Switch>

            <Footer/>
            {/*<CopyRight/>*/}
        </Container>
    );
}

export default App;
