import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'MindWave AI';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      {/* Animated background */}
      <div className="hero-bg-effects">
        <div className="brainwave-container">
          <svg className="brainwave-svg" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 113, 227, 0.3)" />
                <stop offset="50%" stopColor="rgba(90, 200, 250, 0.5)" />
                <stop offset="100%" stopColor="rgba(0, 113, 227, 0.3)" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 212, 170, 0.2)" />
                <stop offset="50%" stopColor="rgba(0, 113, 227, 0.4)" />
                <stop offset="100%" stopColor="rgba(0, 212, 170, 0.2)" />
              </linearGradient>
            </defs>
            <path className="brainwave wave-1" d="M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 T1500,100 T1800,100 T2100,100 T2400,100" fill="none" stroke="url(#waveGradient1)" strokeWidth="2"/>
            <path className="brainwave wave-2" d="M0,100 Q150,150 300,100 T600,100 T900,100 T1200,100 T1500,100 T1800,100 T2100,100 T2400,100" fill="none" stroke="url(#waveGradient2)" strokeWidth="2"/>
            <path className="brainwave wave-3" d="M0,100 Q100,30 200,100 T400,100 T600,100 T800,100 T1000,100 T1200,100 T1400,100 T1600,100 T1800,100 T2000,100 T2200,100 T2400,100" fill="none" stroke="rgba(90, 200, 250, 0.3)" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="grid-overlay"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="float-particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></span>
          ))}
        </div>
        <div className="neural-connections">
          <svg className="neural-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle className="neural-node" cx="20" cy="30" r="2" fill="rgba(0, 113, 227, 0.5)"/>
            <circle className="neural-node" cx="80" cy="20" r="2" fill="rgba(90, 200, 250, 0.5)"/>
            <circle className="neural-node" cx="50" cy="50" r="3" fill="rgba(0, 113, 227, 0.6)"/>
            <circle className="neural-node" cx="30" cy="70" r="2" fill="rgba(0, 212, 170, 0.5)"/>
            <circle className="neural-node" cx="70" cy="80" r="2" fill="rgba(90, 200, 250, 0.5)"/>
            <line className="neural-line" x1="20" y1="30" x2="50" y2="50" stroke="rgba(0, 113, 227, 0.2)" strokeWidth="0.5"/>
            <line className="neural-line" x1="80" y1="20" x2="50" y2="50" stroke="rgba(90, 200, 250, 0.2)" strokeWidth="0.5"/>
            <line className="neural-line" x1="30" y1="70" x2="50" y2="50" stroke="rgba(0, 212, 170, 0.2)" strokeWidth="0.5"/>
            <line className="neural-line" x1="70" y1="80" x2="50" y2="50" stroke="rgba(90, 200, 250, 0.2)" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span className="text-mono">NEURAL_INTERFACE_v2.0</span>
        </div>
        <h1 className="hero-title text-display">
          {displayText}
          <span className="typing-cursor"></span>
        </h1>
        <p className="hero-subtitle">
          <span className="code-bracket">&lt;</span>
          Decode your thoughts. Unlock your potential.
          <span className="code-bracket">/&gt;</span>
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value text-mono">99.7%</span>
            <span className="stat-label">Accuracy</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value text-mono">&lt;10ms</span>
            <span className="stat-label">Latency</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value text-mono">256ch</span>
            <span className="stat-label">Channels</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a href="#features" className="btn btn-primary btn-glow" onClick={(e) => scrollToSection(e, 'features')}>
            <span className="btn-text">Learn More</span>
            <span className="btn-icon">→</span>
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollToSection(e, 'contact')}>Pre-Order</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-device">
          <div className="device-glow"></div>
          <div className="device-ring device-ring-outer">
            <div className="device-ring device-ring-middle">
              <div className="device-ring device-ring-inner">
                <div className="device-core">
                  <svg className="brain-icon" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="heroBrainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#0071e3'}}/>
                        <stop offset="100%" style={{stopColor: '#5ac8fa'}}/>
                      </linearGradient>
                    </defs>
                    <path d="M50 15c-10 0-18.5 8.2-18.5 18.5 0 3.4.9 6.6 2.5 9.4C28 45 24 51.5 24 59c0 10 8.2 18.5 18.5 18.5h15c10 0 18.5-8.2 18.5-18.5 0-7.5-4-14-10-17.1 1.6-2.8 2.5-6 2.5-9.4 0-10.3-8.5-18.5-18.5-18.5z" fill="url(#heroBrainGradient)"/>
                    <path d="M44 33.5c0-3.3 2.7-6 6-6s6 2.7 6 6M38 45h24M44 58h12M50 45v18" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="38" cy="38" r="3" fill="#fff" opacity="0.6"/>
                    <circle cx="62" cy="38" r="3" fill="#fff" opacity="0.6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="device-particles">
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
          </div>
          <div className="orbit-ring">
            <span className="orbit-dot"></span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="text-mono">scroll_to_explore()</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
