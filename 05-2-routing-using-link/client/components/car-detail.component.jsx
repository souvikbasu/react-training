import React from 'react';

export default class CarDetail extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center', backgroundColor: 'lightblue'}}>
        <h1>This is Car Detail Component for id: { this.props.params.id }</h1>
      </div>);
  }
}
