// AI-assisted - see AI-USAGE.md #4
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {AuthProvier} from './context/AuthContent.jsx';
import '../assets/css/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
    <App />
  </StrictMode>,
);
