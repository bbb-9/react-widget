// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './MyButton';

const renderButton = (elementId) => {
  ReactDOM.render(<MyButton />, document.getElementById(elementId));
};

// Expose the render function to the window object
window.renderMyButton = renderButton;
