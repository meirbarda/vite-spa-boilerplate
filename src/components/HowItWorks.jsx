import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Wear',
    description: 'Simply place the lightweight MindWave device on your head. The sensors automatically adjust for optimal contact.',
    visual: (
      <svg viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="60" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 4"/>
        <ellipse cx="100" cy="70" rx="40" ry="30" stroke="#0071e3" strokeWidth="2"/>
        <path d="M60 70 Q60 120 100 130 Q140 120 140 70" stroke="#0071e3" strokeWidth="2" fill="none"/>
        <circle cx="80" cy="60" r="4" fill="#0071e3"/>
        <circle cx="120" cy="60" r="4" fill="#0071e3"/>
        <circle cx="100" cy="45" r="4" fill="#0071e3"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Connect',
    description: 'Pair with our app via Bluetooth. The connection is instant and secure with end-to-end encryption.',
    visual: (
      <svg viewBox="0 0 200 200" fill="none">
        <rect x="70" y="40" width="60" height="120" rx="8" stroke="#0071e3" strokeWidth="2"/>
        <rect x="80" y="50" width="40" height="80" rx="2" fill="#0071e3" opacity="0.1"/>
        <circle cx="100" cy="145" r="6" stroke="#0071e3" strokeWidth="2"/>
        <path d="M100 70 L115 85 L100 100 L100 70 M100 100 L85 85 L100 70" stroke="#0071e3" strokeWidth="2"/>
        <path d="M40 90 Q70 90 70 100" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 4"/>
        <path d="M160 90 Q130 90 130 100" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 4"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Analyze',
    description: 'Our AI processes your brain waves in real-time, identifying patterns and translating neural activity.',
    visual: (
      <svg viewBox="0 0 200 200" fill="none">
        <path d="M30 100 Q50 60 70 100 Q90 140 110 100 Q130 60 150 100 Q170 140 190 100" stroke="#0071e3" strokeWidth="2"/>
        <path d="M30 120 Q50 80 70 120 Q90 160 110 120 Q130 80 150 120 Q170 160 190 120" stroke="#0071e3" strokeWidth="2" opacity="0.5"/>
        <circle cx="100" cy="100" r="30" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 4"/>
        <circle cx="100" cy="100" r="8" fill="#0071e3"/>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Understand',
    description: 'Receive meaningful insights about your mental state, focus levels, and cognitive patterns through our intuitive interface.',
    visual: (
      <svg viewBox="0 0 200 200" fill="none">
        <rect x="40" y="50" width="120" height="100" rx="8" stroke="#0071e3" strokeWidth="2"/>
        <rect x="50" y="60" width="100" height="60" rx="4" fill="#0071e3" opacity="0.1"/>
        <rect x="60" y="130" width="30" height="10" rx="2" fill="#0071e3"/>
        <rect x="100" y="130" width="40" height="10" rx="2" fill="#0071e3" opacity="0.5"/>
        <path d="M60 85 L80 75 L100 90 L120 70 L140 80" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="60" cy="85" r="3" fill="#0071e3"/>
        <circle cx="80" cy="75" r="3" fill="#0071e3"/>
        <circle cx="100" cy="90" r="3" fill="#0071e3"/>
        <circle cx="120" cy="70" r="3" fill="#0071e3"/>
        <circle cx="140" cy="80" r="3" fill="#0071e3"/>
      </svg>
    )
  }
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Getting started with MindWave AI is simple. Four easy steps to unlock the power of your mind.
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-visual">
                {step.visual}
              </div>
              <div className="step-content">
                <span className="step-number">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
