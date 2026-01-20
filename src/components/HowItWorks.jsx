import { useEffect, useRef } from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Wear',
    description: 'Simply place the lightweight MindWave device on your head. The sensors automatically adjust for optimal contact.',
    code: 'device.initialize()',
    visual: (
      <svg viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="60" stroke="url(#stepGrad1)" strokeWidth="2" strokeDasharray="4 4"/>
        <ellipse cx="100" cy="70" rx="40" ry="30" stroke="url(#stepGrad1)" strokeWidth="2"/>
        <path d="M60 70 Q60 120 100 130 Q140 120 140 70" stroke="url(#stepGrad1)" strokeWidth="2" fill="none"/>
        <circle cx="80" cy="60" r="4" fill="#5ac8fa"/>
        <circle cx="120" cy="60" r="4" fill="#5ac8fa"/>
        <circle cx="100" cy="45" r="4" fill="#0071e3"/>
        <defs>
          <linearGradient id="stepGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0071e3"/>
            <stop offset="100%" stopColor="#5ac8fa"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Connect',
    description: 'Pair with our app via Bluetooth. The connection is instant and secure with end-to-end encryption.',
    code: 'bluetooth.pair()',
    visual: (
      <svg viewBox="0 0 200 200" fill="none">
        <rect x="70" y="40" width="60" height="120" rx="8" stroke="url(#stepGrad2)" strokeWidth="2"/>
        <rect x="80" y="50" width="40" height="80" rx="2" fill="#0071e3" opacity="0.2"/>
        <circle cx="100" cy="145" r="6" stroke="#5ac8fa" strokeWidth="2"/>
        <path d="M100 70 L115 85 L100 100 L100 70 M100 100 L85 85 L100 70" stroke="#5ac8fa" strokeWidth="2"/>
        <path d="M40 90 Q70 90 70 100" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 4" className="connect-line"/>
        <path d="M160 90 Q130 90 130 100" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 4" className="connect-line"/>
        <defs>
          <linearGradient id="stepGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0071e3"/>
            <stop offset="100%" stopColor="#5ac8fa"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Analyze',
    description: 'Our AI processes your brain waves in real-time, identifying patterns and translating neural activity.',
    code: 'ai.process(waves)',
    visual: (
      <svg viewBox="0 0 200 200" fill="none">
        <path d="M30 100 Q50 60 70 100 Q90 140 110 100 Q130 60 150 100 Q170 140 190 100" stroke="url(#stepGrad3)" strokeWidth="2" className="wave-path"/>
        <path d="M30 120 Q50 80 70 120 Q90 160 110 120 Q130 80 150 120 Q170 160 190 120" stroke="#5ac8fa" strokeWidth="2" opacity="0.5" className="wave-path"/>
        <circle cx="100" cy="100" r="30" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 4"/>
        <circle cx="100" cy="100" r="8" fill="#5ac8fa"/>
        <defs>
          <linearGradient id="stepGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0071e3"/>
            <stop offset="50%" stopColor="#5ac8fa"/>
            <stop offset="100%" stopColor="#0071e3"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Understand',
    description: 'Receive meaningful insights about your mental state, focus levels, and cognitive patterns through our intuitive interface.',
    code: 'insights.render()',
    visual: (
      <svg viewBox="0 0 200 200" fill="none">
        <rect x="40" y="50" width="120" height="100" rx="8" stroke="url(#stepGrad4)" strokeWidth="2"/>
        <rect x="50" y="60" width="100" height="60" rx="4" fill="#0071e3" opacity="0.1"/>
        <rect x="60" y="130" width="30" height="10" rx="2" fill="#0071e3"/>
        <rect x="100" y="130" width="40" height="10" rx="2" fill="#5ac8fa" opacity="0.7"/>
        <path d="M60 85 L80 75 L100 90 L120 70 L140 80" stroke="url(#stepGrad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="60" cy="85" r="3" fill="#5ac8fa"/>
        <circle cx="80" cy="75" r="3" fill="#5ac8fa"/>
        <circle cx="100" cy="90" r="3" fill="#0071e3"/>
        <circle cx="120" cy="70" r="3" fill="#5ac8fa"/>
        <circle cx="140" cy="80" r="3" fill="#0071e3"/>
        <defs>
          <linearGradient id="stepGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0071e3"/>
            <stop offset="100%" stopColor="#5ac8fa"/>
          </linearGradient>
        </defs>
      </svg>
    )
  }
];

function HowItWorks() {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="hiw-bg">
        <div className="hiw-gradient-1"></div>
        <div className="hiw-gradient-2"></div>
        <div className="hiw-grid"></div>
      </div>
      <div className="container">
        <div ref={sectionRef} className="hiw-header fade-in">
          <span className="section-badge text-mono">// workflow</span>
          <h2 className="section-title text-display">How It Works</h2>
          <p className="section-subtitle">
            Getting started with MindWave AI is simple. Four easy steps to unlock the power of your mind.
          </p>
        </div>

        <div className="steps-container">
          <div className="steps-line"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="step fade-in"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="step-visual">
                <div className="step-visual-glow"></div>
                {step.visual}
              </div>
              <div className="step-content">
                <span className="step-number text-display">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <span className="step-code text-mono">{step.code}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-dot"></div>
                  <div className="connector-line"></div>
                  <div className="connector-dot"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
