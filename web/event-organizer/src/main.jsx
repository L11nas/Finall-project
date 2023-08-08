import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Pakeičiau į './App' (be plėtinio)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
