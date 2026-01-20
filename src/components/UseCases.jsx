import { useEffect, useRef } from 'react';
import './UseCases.css';

const useCases = [
  {
    title: 'Focus & Productivity',
    description: 'Track your concentration levels and receive personalized recommendations to optimize your work sessions.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    stats: '40% improvement in focus',
    icon: '01',
    code: 'focus.track()'
  },
  {
    title: 'Meditation & Wellness',
    description: 'Get real-time feedback during meditation sessions. Understand your brain states and deepen your practice.',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    stats: 'Used by 10k+ meditators',
    icon: '02',
    code: 'zen.mode()'
  },
  {
    title: 'Sleep Analysis',
    description: 'Monitor your sleep stages and receive insights to improve your sleep quality and morning freshness.',
    gradient: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)',
    stats: '25% better sleep quality',
    icon: '03',
    code: 'sleep.analyze()'
  },
  {
    title: 'Research & Education',
    description: 'A powerful tool for neuroscience research, cognitive studies, and educational applications.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    stats: '50+ research institutions',
    icon: '04',
    code: 'research.init()'
  }
];

function UseCases() {
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
    <section id="use-cases" className="section use-cases-section">
      <div className="use-cases-bg">
        <div className="uc-glow uc-glow-1"></div>
        <div className="uc-glow uc-glow-2"></div>
        <div className="uc-grid"></div>
      </div>
      <div className="container">
        <div ref={sectionRef} className="use-cases-header fade-in">
          <span className="section-badge text-mono">/* applications */</span>
          <h2 className="section-title text-display">Endless Possibilities</h2>
          <p className="section-subtitle">
            Discover how MindWave AI can transform different aspects of your life and work.
          </p>
        </div>

        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="use-case-card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="use-case-image" style={{ background: useCase.gradient }}>
                <div className="use-case-icon text-display">{useCase.icon}</div>
                <span className="use-case-stats">{useCase.stats}</span>
                <div className="use-case-overlay"></div>
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">{useCase.title}</h3>
                <p className="use-case-description">{useCase.description}</p>
                <div className="use-case-footer">
                  <span className="use-case-code text-mono">{useCase.code}</span>
                  <button className="btn btn-text">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
