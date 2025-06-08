import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './game.jsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ ADD THIS
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Game />
    </BrowserRouter>
  </React.StrictMode>
);
