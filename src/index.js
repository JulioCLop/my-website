import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './context/Theme.Contexts';


ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
    <App />
    </ThemeProvider>  
  </BrowserRouter>,
  document.getElementById('root')
);
