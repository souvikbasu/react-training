import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import Main from './components/main.component.jsx';
import Home from './components/home.component.jsx';
import Car from "./components/car.component.jsx";
import About from "./components/about.component.jsx";

ReactDOM.render((
    <Router>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="/car" component={Car}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>


), document.getElementById('root'));
