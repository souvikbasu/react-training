import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 4
    }
  }

  render() {
    return (
      <div style={{textAlign: 'center'}} className="App" >
        <span>Number : </span>
        <span className="number">{this.state.number}</span>
      </div>);
  }
}
