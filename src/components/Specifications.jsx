import './Specifications.css';

const specs = [
  { label: 'Sensors', value: '8 EEG Channels' },
  { label: 'Sampling Rate', value: '256 Hz' },
  { label: 'Battery Life', value: '12 Hours' },
  { label: 'Connectivity', value: 'Bluetooth 5.2' },
  { label: 'Weight', value: '45 grams' },
  { label: 'Compatibility', value: 'iOS, Android, Windows, macOS' },
  { label: 'AI Processing', value: 'On-device & Cloud' },
  { label: 'Data Storage', value: 'End-to-end Encrypted' }
];

function Specifications() {
  return (
    <section id="specs" className="section">
      <div className="container">
        <div className="specs-layout">
          <div className="specs-visual">
            <div className="specs-device">
              <svg viewBox="0 0 300 300" fill="none">
                <defs>
                  <linearGradient id="specGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#0071e3'}}/>
                    <stop offset="100%" style={{stopColor: '#5ac8fa'}}/>
                  </linearGradient>
                </defs>
                <ellipse cx="150" cy="120" rx="100" ry="70" stroke="url(#specGradient)" strokeWidth="3" fill="none"/>
                <ellipse cx="150" cy="120" rx="80" ry="55" stroke="url(#specGradient)" strokeWidth="2" fill="none" opacity="0.5"/>
                <path d="M50 120 Q50 200 150 220 Q250 200 250 120" stroke="url(#specGradient)" strokeWidth="3" fill="none"/>

                <circle cx="80" cy="100" r="8" fill="#0071e3"/>
                <circle cx="220" cy="100" r="8" fill="#0071e3"/>
                <circle cx="100" cy="70" r="6" fill="#0071e3"/>
                <circle cx="200" cy="70" r="6" fill="#0071e3"/>
                <circle cx="150" cy="55" r="6" fill="#0071e3"/>
                <circle cx="120" cy="140" r="6" fill="#0071e3"/>
                <circle cx="180" cy="140" r="6" fill="#0071e3"/>
                <circle cx="150" cy="160" r="6" fill="#0071e3"/>

                <line x1="80" y1="100" x2="60" y2="100" stroke="#0071e3" strokeWidth="1" strokeDasharray="4 2"/>
                <line x1="220" y1="100" x2="240" y2="100" stroke="#0071e3" strokeWidth="1" strokeDasharray="4 2"/>
                <line x1="150" y1="55" x2="150" y2="35" stroke="#0071e3" strokeWidth="1" strokeDasharray="4 2"/>

                <text x="150" y="260" textAnchor="middle" fill="#86868b" fontSize="14">MindWave AI Device</text>
              </svg>
            </div>
          </div>

          <div className="specs-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Technical Specifications</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 40px' }}>
              Built with cutting-edge technology for accurate and comfortable neural monitoring.
            </p>

            <div className="specs-grid">
              {specs.map((spec, index) => (
                <div key={index} className="spec-item">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="specs-cta">
              <a href="#contact" className="btn btn-primary">Pre-Order Now</a>
              <span className="specs-price">Starting at $299</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specifications;
