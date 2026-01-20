import './Hero.css';

function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">MindWave AI</h1>
        <p className="hero-subtitle">
          Decode your thoughts. Unlock your potential.
        </p>
        <div className="hero-buttons">
          <a href="#features" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'features')}>Learn More</a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollToSection(e, 'contact')}>Pre-Order</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-device">
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
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
