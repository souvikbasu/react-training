import React from 'react';
import styles from '../css-module.css';

export default class WithCSSModule extends React.Component {
  render() {
    return (
      <div className={styles.titlemodule}>
        <h1>Component styled using CSS module</h1>
      </div>);
  }
}
