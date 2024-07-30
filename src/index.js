import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TestComponetA from './Componets/TestComponetA/TestComponetA';
import TestComponetB from './Componets/TestComponetB/TestComponetB';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
