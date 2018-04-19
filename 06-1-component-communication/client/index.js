import React from 'react';
import ReactDOM from 'react-dom';
import speakerList from './models/speakerList';
import Conference from "./components/Conference.jsx";

ReactDOM.render(
    <Conference speakerList={speakerList} />,
    document.getElementById('root')
);
