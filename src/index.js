import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { BrowserRouter } from 'react-router-dom'; // Correct import name

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Enables routing */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
