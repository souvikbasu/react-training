import React from 'react';

export default function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}