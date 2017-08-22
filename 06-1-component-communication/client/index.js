import React from 'react';
import ReactDOM from 'react-dom';
import data from './models/data';
import Conference from "./components/Conference.jsx";

ReactDOM.render(
    <Conference data={data} />,
    document.getElementById('root')
);
