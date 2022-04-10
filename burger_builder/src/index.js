import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const newUpdata = fetch('https://.www.google.com')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
