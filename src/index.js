import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './app/App.js';
// Import the store here.

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
    <App 
      
    />
    </React.StrictMode>,
    document.getElementById('app')
  )
};
render();

// Subscribe render to the store.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
