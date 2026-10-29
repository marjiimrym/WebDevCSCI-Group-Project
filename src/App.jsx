// AI-assisted - see AI-USAGE.md #4 and #5
import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import { useReducedMotion } from './hooks/useLandingMotion.js';
import '../assets/css/landing.css';

export default function App() {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const motionEnabled = !paused && !reducedMotion;
  return (
    <div className={`observatory${motionEnabled ? '' : ' observatory--still'}`}>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <HomePage motionEnabled={motionEnabled} reducedMotion={reducedMotion} onToggleMotion={() => setPaused(!paused)} />
      <Footer />
    </div>
  );
}
