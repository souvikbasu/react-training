import React from 'react';

export default class WelcomeUsingClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}. I am a component created using ES6 class</h1>;
    }
}
