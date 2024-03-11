import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
//This creates a root for concurrent mode rendering using ReactDOM.createRoot(). 
//The document.getElementById('root') selects the HTML element with the id 'root', which is 
//typically a <div> element where the React application will be rendered 

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
//explanation of imports
/*
import React from 'react';: This imports the React library, which is necessary 
for writing React components and using JSX syntax.

import ReactDOM from 'react-dom/client';: is used for rendering React components into the DOM.
ReactDOM.createRoot is used for concurrent mode rendering.

import './index.css';: This imports a CSS file (index.css) that contains styles for the application.

import App from './App';: This is the root component that will be rendered.


import store from './redux/store';: This imports the Redux store from the store.js 
file located in the redux directory. Redux is a state management library commonly used with React applications.

import { Provider } from 'react-redux';: The Provider component is used to wrap the root component of the 
application and provide the Redux store to all components in the component tree. 

*/