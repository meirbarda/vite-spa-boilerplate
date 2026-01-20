import { useEffect, useRef } from 'react';
import './Features.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 14v10l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Real-Time Analysis',
    description: 'Process brain signals in milliseconds with our advanced neural processing unit.',
    code: 'process.neural()'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 24h6l4-8 6 16 4-8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Wave Detection',
    description: 'Accurately detect alpha, beta, theta, and delta brain waves with precision.',
    code: 'detect.waves()'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="14" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 22h8M16 28h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI Insights',
    description: 'Advanced LLMs interpret your brain patterns and provide meaningful insights.',
    code: 'ai.interpret()'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Seamless Integration',
    description: 'Connect with your favorite apps and devices through our open API.',
    code: 'api.connect()'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8l4 8h8l-6 6 2 10-8-4-8 4 2-10-6-6h8l4-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Personalized Learning',
    description: 'The AI adapts to your unique brain patterns over time for better accuracy.',
    code: 'learn.adapt()'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="10" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Privacy First',
    description: 'Your neural data is encrypted end-to-end. We never sell your information.',
    code: 'secure.encrypt()'
  }
];

function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="section features-section">
      <div className="features-bg">
        <div className="features-grid-bg"></div>
        <div className="features-glow features-glow-1"></div>
        <div className="features-glow features-glow-2"></div>
      </div>
      <div className="container">
        <div ref={sectionRef} className="features-header fade-in">
          <span className="section-badge text-mono">&lt;features/&gt;</span>
          <h2 className="section-title text-display">Groundbreaking Features</h2>
          <p className="section-subtitle">
            Experience the future of brain-computer interfaces with technology that understands you.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="feature-card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="feature-card-glow"></div>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <span className="feature-code text-mono">{feature.code}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
