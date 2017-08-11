import React from 'react';
import ReactDOM from 'react-dom';
//import ListItem from "./components/ListItem.jsx";

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}


// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // Correct! Key should be specified inside the array.
//         <ListItem key={number.toString()}
//                   value={number} />
//     );
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }



// embedding map in JSX
// function NumberList(props) {
//     const numbers = props.numbers;
//     return (
//         <ul>
//             {numbers.map((number) =>
//                 <ListItem key={number.toString()}
//                           value={number} />
//             )}
//         </ul>
//     );
// }


const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);
