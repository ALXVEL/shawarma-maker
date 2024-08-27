import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.js';
import IngredientsList from './IngredientsList.js';
import Terminal from './Terminal.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Terminal/>
    <IngredientsList/>
  </React.StrictMode>
);
