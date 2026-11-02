// AI-assisted - see AI-USAGE.md #4
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '../assets/css/styles.css';
// AI-assisted - see AI-USAGE.md #5.
import '../assets/css/nasa.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
