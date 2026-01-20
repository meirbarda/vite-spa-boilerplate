import './UseCases.css';

const useCases = [
  {
    title: 'Focus & Productivity',
    description: 'Track your concentration levels and receive personalized recommendations to optimize your work sessions.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    stats: '40% improvement in focus'
  },
  {
    title: 'Meditation & Wellness',
    description: 'Get real-time feedback during meditation sessions. Understand your brain states and deepen your practice.',
    image: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    stats: 'Used by 10k+ meditators'
  },
  {
    title: 'Sleep Analysis',
    description: 'Monitor your sleep stages and receive insights to improve your sleep quality and morning freshness.',
    image: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)',
    stats: '25% better sleep quality'
  },
  {
    title: 'Research & Education',
    description: 'A powerful tool for neuroscience research, cognitive studies, and educational applications.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    stats: '50+ research institutions'
  }
];

function UseCases() {
  return (
    <section id="use-cases" className="section section-gray">
      <div className="container">
        <h2 className="section-title">Endless Possibilities</h2>
        <p className="section-subtitle">
          Discover how MindWave AI can transform different aspects of your life and work.
        </p>

        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <div key={index} className="use-case-card">
              <div
                className="use-case-image"
                style={{ background: useCase.image }}
              >
                <span className="use-case-stats">{useCase.stats}</span>
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">{useCase.title}</h3>
                <p className="use-case-description">{useCase.description}</p>
                <button className="btn btn-text">Learn more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
