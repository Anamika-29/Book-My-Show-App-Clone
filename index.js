import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import MainComponent from './components/mainComponent';
import MainComponent from './components/MainComponent (2)';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainComponent />

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

