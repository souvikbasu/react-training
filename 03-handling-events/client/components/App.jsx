import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    // handleClick = () => {
    //     console.log('this is:', this);
    // }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>This is React Component</h1>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                {/*<button onClick={(e) => this.handleClick(e)}>*/}
                    {/*Alternate way to handle click*/}
                {/*</button>*/}
            </div>);
    }
}
