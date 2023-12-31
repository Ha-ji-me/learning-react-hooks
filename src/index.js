import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hooks from './Hooks';
import Card from './Card';
import Form from './Form';
import Effect from './Effect';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Hooks /> */}
    {/* <Card /> */}
    {/* <Form /> */}
    {/* <Effect /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
