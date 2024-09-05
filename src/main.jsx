import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Main = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
