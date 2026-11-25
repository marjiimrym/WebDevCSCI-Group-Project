// AI-assisted - see AI-USAGE.md #4
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthContext.jsx';
import App from './App.jsx';
import '../assets/css/styles.css';
import '../assets/css/nasa.css';

// Turns on the one-time hero entrance (styles.css). Set here, not inline in
// index.html, because the server's CSP only allows scripts from 'self'.
document.documentElement.classList.add('m-enter');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
