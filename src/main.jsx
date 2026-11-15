// AI-assisted - see AI-USAGE.md #4
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext.jsx';
import App from './App.jsx';
import '../assets/css/styles.css';
import '../assets/css/nasa.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
