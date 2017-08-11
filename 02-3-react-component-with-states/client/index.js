import React from 'react';
import ReactDOM from 'react-dom';
//import ClockWithProp from "./components/ClockWithProp.jsx";
import ClockWithState from "./components/ClockWithState.jsx";

ReactDOM.render(
//    <ClockWithProp date={new Date()}/>,
    <ClockWithState />,
    document.getElementById('root')
);
