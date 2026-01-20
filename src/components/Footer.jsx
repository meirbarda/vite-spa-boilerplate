import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-cta">
        <div className="container">
          <h2 className="footer-cta-title">Ready to unlock your mind?</h2>
          <p className="footer-cta-subtitle">
            Join thousands of early adopters experiencing the future of brain-computer interfaces.
          </p>
          <div className="footer-cta-buttons">
            <a href="#" className="btn btn-primary">Pre-Order Now</a>
            <a href="#" className="btn btn-secondary">Contact Sales</a>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg className="footer-logo-icon" viewBox="0 0 64 64" fill="none">
                  <defs>
                    <linearGradient id="footerBrainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#0071e3'}}/>
                      <stop offset="100%" style={{stopColor: '#5ac8fa'}}/>
                    </linearGradient>
                  </defs>
                  <path d="M32 8c-6.6 0-12 5.4-12 12 0 2.2.6 4.3 1.6 6.1C18.1 27.5 16 31.5 16 36c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12 0-4.5-2.1-8.5-5.6-9.9 1-1.8 1.6-3.9 1.6-6.1 0-6.6-5.4-12-12-12z" fill="url(#footerBrainGradient)"/>
                  <path d="M28 20c0-2.2 1.8-4 4-4s4 1.8 4 4M24 28h16M28 36h8M32 28v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>MindWave AI</span>
              </div>
              <p className="footer-tagline">
                Decoding the future of human-computer interaction, one brain wave at a time.
              </p>
            </div>

            <div className="footer-links">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#specs">Specifications</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 MindWave AI. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
