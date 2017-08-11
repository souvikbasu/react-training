import React from 'react';
import ReactDOM from 'react-dom';

export default function ClockWithProp(props) {
    return (
        <div>
            <h1>Clock using Prop</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <ClockWithProp date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);