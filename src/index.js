import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Component/Footer.css"
import { BrowserRouter } from 'react-router-dom'; //web application in a browser so we're going to use this
import "./Component/Navbar.css"
import "./Component/Footer.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    {/* wrapping them entire app component because it's going to be using this one single router to manage all of the routing  */}
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
