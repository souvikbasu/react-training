import React from 'react';
import Proposals from "./Proposals.jsx";
import Speaker from "./Speaker.jsx";

export default function Conference(props) {
    return (
        <div>
            <Proposals />
            <Speaker />
        </div>
    );
}
