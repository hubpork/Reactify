// Original File
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the path according to your project structure
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
 <React.StrictMode>
    <App />
 </React.StrictMode>
);