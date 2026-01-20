import { useEffect, useRef } from 'react';
import './Specifications.css';

const specs = [
  { label: 'Sensors', value: '8 EEG Channels', code: 'ch: 8' },
  { label: 'Sampling Rate', value: '256 Hz', code: 'hz: 256' },
  { label: 'Battery Life', value: '12 Hours', code: 'bat: 12h' },
  { label: 'Connectivity', value: 'Bluetooth 5.2', code: 'bt: 5.2' },
  { label: 'Weight', value: '45 grams', code: 'wt: 45g' },
  { label: 'Compatibility', value: 'iOS, Android, Windows, macOS', code: 'os: all' },
  { label: 'AI Processing', value: 'On-device & Cloud', code: 'ai: hybrid' },
  { label: 'Data Storage', value: 'End-to-end Encrypted', code: 'enc: e2e' }
];

function Specifications() {
  const sectionRef = useRef(null);
  const specsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    specsRef.current.forEach((spec) => {
      if (spec) observer.observe(spec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="specs" className="section specs-section">
      <div className="specs-bg">
        <div className="specs-glow specs-glow-1"></div>
        <div className="specs-glow specs-glow-2"></div>
        <div className="specs-grid-bg"></div>
      </div>
      <div className="container">
        <div className="specs-layout">
          <div ref={sectionRef} className="specs-visual fade-in">
            <div className="specs-device">
              <div className="device-scan-line"></div>
              <svg viewBox="0 0 300 300" fill="none">
                <defs>
                  <linearGradient id="specGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#0071e3'}}/>
                    <stop offset="100%" style={{stopColor: '#5ac8fa'}}/>
                  </linearGradient>
                </defs>
                <ellipse cx="150" cy="120" rx="100" ry="70" stroke="url(#specGradient)" strokeWidth="3" fill="none" className="spec-outline"/>
                <ellipse cx="150" cy="120" rx="80" ry="55" stroke="url(#specGradient)" strokeWidth="2" fill="none" opacity="0.5" className="spec-outline"/>
                <path d="M50 120 Q50 200 150 220 Q250 200 250 120" stroke="url(#specGradient)" strokeWidth="3" fill="none" className="spec-outline"/>

                <circle cx="80" cy="100" r="8" fill="#0071e3" className="sensor-dot"/>
                <circle cx="220" cy="100" r="8" fill="#0071e3" className="sensor-dot"/>
                <circle cx="100" cy="70" r="6" fill="#5ac8fa" className="sensor-dot"/>
                <circle cx="200" cy="70" r="6" fill="#5ac8fa" className="sensor-dot"/>
                <circle cx="150" cy="55" r="6" fill="#0071e3" className="sensor-dot"/>
                <circle cx="120" cy="140" r="6" fill="#5ac8fa" className="sensor-dot"/>
                <circle cx="180" cy="140" r="6" fill="#5ac8fa" className="sensor-dot"/>
                <circle cx="150" cy="160" r="6" fill="#0071e3" className="sensor-dot"/>

                <line x1="80" y1="100" x2="60" y2="100" stroke="#0071e3" strokeWidth="1" strokeDasharray="4 2" className="spec-line"/>
                <line x1="220" y1="100" x2="240" y2="100" stroke="#0071e3" strokeWidth="1" strokeDasharray="4 2" className="spec-line"/>
                <line x1="150" y1="55" x2="150" y2="35" stroke="#0071e3" strokeWidth="1" strokeDasharray="4 2" className="spec-line"/>
              </svg>
              <div className="device-label text-mono">MINDWAVE_v2.0</div>
            </div>
          </div>

          <div className="specs-content">
            <span className="section-badge text-mono"># specifications</span>
            <h2 className="section-title text-display" style={{ textAlign: 'left' }}>Technical Specifications</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 40px' }}>
              Built with cutting-edge technology for accurate and comfortable neural monitoring.
            </p>

            <div className="specs-grid">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  ref={(el) => (specsRef.current[index] = el)}
                  className="spec-item fade-in"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="spec-item-header">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-code text-mono">{spec.code}</span>
                  </div>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="specs-cta fade-in">
              <a href="#contact" className="btn btn-primary btn-glow">
                <span>Pre-Order Now</span>
                <span className="btn-arrow">→</span>
              </a>
              <div className="specs-price-container">
                <span className="specs-price-label text-mono">starting_at:</span>
                <span className="specs-price">$299</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specifications;
