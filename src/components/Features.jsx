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
    description: 'Process brain signals in milliseconds with our advanced neural processing unit.'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 24h6l4-8 6 16 4-8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Wave Detection',
    description: 'Accurately detect alpha, beta, theta, and delta brain waves with precision.'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="14" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 22h8M16 28h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI Insights',
    description: 'Advanced LLMs interpret your brain patterns and provide meaningful insights.'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Seamless Integration',
    description: 'Connect with your favorite apps and devices through our open API.'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8l4 8h8l-6 6 2 10-8-4-8 4 2-10-6-6h8l4-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Personalized Learning',
    description: 'The AI adapts to your unique brain patterns over time for better accuracy.'
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="10" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Privacy First',
    description: 'Your neural data is encrypted end-to-end. We never sell your information.'
  }
];

function Features() {
  return (
    <section id="features" className="section section-gray">
      <div className="container">
        <h2 className="section-title">Groundbreaking Features</h2>
        <p className="section-subtitle">
          Experience the future of brain-computer interfaces with technology that understands you.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
