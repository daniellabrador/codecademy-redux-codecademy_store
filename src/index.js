import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './app/App.js';
// Import the store here.
import { store } from './app/store';

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <Router basename="/codecademy-redux-codecademy_store">
      <React.StrictMode>
      <App 
        state={store.getState()}
        dispatch={store.dispatch}
      />
      </React.StrictMode>
    </Router>,
    document.getElementById('app')
  )
};
render();

// Subscribe render to the store.
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
