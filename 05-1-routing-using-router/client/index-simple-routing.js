import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/home.component.jsx';
import About from "./components/about.component.jsx";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
    </Router>


), document.getElementById('root'));
