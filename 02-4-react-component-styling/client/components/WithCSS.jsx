import React from 'react';
import '../common.css';

export default class WithCSS extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>Component styled using style.css</h1>
      </div>);
  }
}
