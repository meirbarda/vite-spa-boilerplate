import { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <svg className="nav-logo-icon" viewBox="0 0 64 64" fill="none">
            <defs>
              <linearGradient id="navBrainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#0071e3'}}/>
                <stop offset="100%" style={{stopColor: '#5ac8fa'}}/>
              </linearGradient>
            </defs>
            <path d="M32 8c-6.6 0-12 5.4-12 12 0 2.2.6 4.3 1.6 6.1C18.1 27.5 16 31.5 16 36c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12 0-4.5-2.1-8.5-5.6-9.9 1-1.8 1.6-3.9 1.6-6.1 0-6.6-5.4-12-12-12z" fill="url(#navBrainGradient)"/>
            <path d="M28 20c0-2.2 1.8-4 4-4s4 1.8 4 4M24 28h16M28 36h8M32 28v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="nav-logo-text">MindWave AI</span>
        </a>

        <button
          className={`nav-menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
          <li><a href="#use-cases" onClick={() => setMenuOpen(false)}>Use Cases</a></li>
          <li><a href="#specs" onClick={() => setMenuOpen(false)}>Specs</a></li>
          <li><a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>Get Started</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
