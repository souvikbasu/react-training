import React from 'react';

export default class WithInlineStyle extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center', backgroundColor: 'red'}}>
        <h1>Component with inline style</h1>
      </div>);
  }
}
