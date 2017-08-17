import React from 'react';
import ReactDOM from 'react-dom';
import WithInlineStyle from './components/WithInlineStyle.jsx';
import WithCSS from "./components/WithCSS.jsx";
import WithCSSModule from "./components/WithCSSModule.jsx";

ReactDOM.render(
    <div>
        <WithInlineStyle />
        <WithCSS />
        <WithCSSModule />
    </div>
    , document.getElementById('root'));
