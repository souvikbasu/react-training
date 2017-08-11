import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeUsingFunc from './components/WelcomeUsingFunc.jsx';
import WelcomeUsingClass from './components/WelcomeUsingClass.jsx';
import Parent from "./components/Parent.jsx";

ReactDOM.render(
    <div>
        <WelcomeUsingFunc name="Souvik"/>
        <WelcomeUsingClass name="Souvik"/>
        <Parent/>
    </div>,
    document.getElementById('root')
);
