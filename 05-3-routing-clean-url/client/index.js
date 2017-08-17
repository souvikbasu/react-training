import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from './components/main.component.jsx';
import Home from './components/home.component.jsx';
import Car from "./components/car.component.jsx";
import CarDetail from "./components/car-detail.component.jsx";
import About from "./components/about.component.jsx";

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="/cars" component={Car}/>
            <Route path="/cars/:id" component={CarDetail}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>

), document.getElementById('root'));
