"use client"

export default function RelationshipRoadmapPage() {
  return (
    <div>
      <div className="floating-shapes"></div>
      
      <div className="hero">
        <h1>The Relationship Roadmap</h1>
        <div className="subtitle">
          Understanding how AI can transform your relationship journey through personalized coaching, 
          deeper connections, and lasting emotional growth.
        </div>
      </div>

      <div className="heart-divider">
        <div className="connection-line"></div>
        <div className="heart"></div>
        <div className="connection-line"></div>
      </div>

      <div className="container">
        <div className="quote-section">
          <div className="quote-text">"Love is not just a feeling, it's a practice."</div>
          <div className="steps-flow">
            <div className="step-bubble">Connect</div>
            <div className="arrow">→</div>
            <div className="step-bubble">Understand</div>
            <div className="arrow">→</div>
            <div className="step-bubble">Heal</div>
            <div className="arrow">→</div>
            <div className="step-bubble">Grow</div>
          </div>
        </div>

        <div className="heart-divider">
          <div className="connection-line"></div>
          <div className="heart"></div>
          <div className="connection-line"></div>
        </div>

        <div className="categories">
          <div className="category-card">
            <div className="category-title">Deep Emotional Understanding</div>
            <div className="category-description">
              <p>Our AI doesn't just analyze what you say—it understands the emotions behind your words, the patterns in your communication, and the unspoken needs that drive your interactions.</p>
              <p>By recognizing emotional triggers, communication styles, and underlying relationship dynamics, we create a foundation for genuine understanding between partners.</p>
            </div>
          </div>

          <div className="category-card">
            <div className="category-title">Personalized Relationship Coaching</div>
            <div className="category-description">
              <p>Every relationship is unique, which is why our AI adapts to your specific dynamics, challenges, and growth areas.</p>
              <p>Receive customized exercises, communication strategies, and healing practices designed specifically for your relationship's journey toward deeper connection.</p>
            </div>
          </div>
        </div>

        <div className="heart-divider">
          <div className="connection-line"></div>
          <div className="heart"></div>
          <div className="connection-line"></div>
        </div>

        <div className="categories compact">
          <div className="category-card small">
            <div className="category-title small">Communication Patterns</div>
            <div className="category-description">
              <p>Identify and transform negative communication cycles that keep you stuck in conflict.</p>
            </div>
          </div>

          <div className="category-card small">
            <div className="category-title small">Emotional Triggers</div>
            <div className="category-description">
              <p>Understand what sets off emotional reactions and learn healthy ways to respond instead of react.</p>
            </div>
          </div>

          <div className="category-card small">
            <div className="category-title small">Attachment Styles</div>
            <div className="category-description">
              <p>Discover how your attachment patterns influence your relationship and create more secure connections.</p>
            </div>
          </div>

          <div className="category-card small">
            <div className="category-title small">Conflict Resolution</div>
            <div className="category-description">
              <p>Transform disagreements into opportunities for deeper understanding and stronger bonds.</p>
            </div>
          </div>
        </div>

        <div className="heart-divider">
          <div className="connection-line"></div>
          <div className="heart"></div>
          <div className="connection-line"></div>
        </div>

        <div className="categories compact">
          <div className="category-card small">
            <div className="category-title small">Intimacy Building</div>
            <div className="category-description">
              <p>Reignite physical and emotional intimacy through guided exercises and deeper vulnerability practices.</p>
            </div>
          </div>

          <div className="category-card small">
            <div className="category-title small">Trust Repair</div>
            <div className="category-description">
              <p>Heal from betrayals and rebuild trust through structured healing processes and accountability.</p>
            </div>
          </div>

          <div className="category-card small">
            <div className="category-title small">Future Visioning</div>
            <div className="category-description">
              <p>Align your dreams and create a shared vision for your relationship's future together.</p>
            </div>
          </div>

          <div className="category-card small">
            <div className="category-title small">Daily Practices</div>
            <div className="category-description">
              <p>Integrate love-building habits into your everyday life with personalized daily connection rituals.</p>
            </div>
          </div>
        </div>

        <div className="heart-divider">
          <div className="connection-line"></div>
          <div className="heart"></div>
          <div className="connection-line"></div>
        </div>

        <div className="category-card final">
          <div className="category-title">The Journey of Lasting Love</div>
          <div className="category-description">
            <p>True relationship transformation doesn't happen overnight—it's a beautiful journey of discovering each other more deeply, healing old wounds together, and creating new patterns of love and connection.</p>
            <p>Our AI companion guides you through this journey with patience, wisdom, and personalized support that adapts to your unique relationship needs. Whether you're newlyweds or together for decades, there's always deeper love to discover.</p>
            <p>Ready to begin your relationship roadmap? Every great love story is really about two people choosing each other, again and again, with greater understanding and deeper care.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #fff8e7 0%, #ffe4b5 50%, #ffb347 100%);
          min-height: 100vh;
          color: #5d4037;
          line-height: 1.7;
        }

        .floating-shapes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .floating-shapes::before,
        .floating-shapes::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 20s infinite ease-in-out;
        }

        .floating-shapes::before {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #ff7043, #ffab91);
          top: 20%;
          left: -100px;
          animation-delay: -10s;
        }

        .floating-shapes::after {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #ffab91, #ff7043);
          bottom: 10%;
          right: -50px;
          animation-delay: -5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(20px) rotate(240deg); }
        }

        .hero {
          text-align: center;
          padding: 4rem 2rem 2rem;
          position: relative;
          z-index: 2;
          background: rgba(255, 248, 231, 0.8);
          backdrop-filter: blur(10px);
        }

        .hero h1 {
          font-size: 4.5rem;
          font-weight: 300;
          color: #d84315;
          text-shadow: 3px 3px 6px rgba(216, 67, 21, 0.3);
          margin-bottom: 2rem;
          animation: fadeInUp 1s ease-out;
        }

        .subtitle {
          font-size: 1.4rem;
          color: #8d6e63;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.6;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .heart-divider {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4rem 0;
          position: relative;
          z-index: 2;
        }

        .connection-line {
          height: 4px;
          background: linear-gradient(90deg, #ff7043, #ffab91, #ff7043);
          border-radius: 2px;
          flex: 1;
          max-width: 200px;
          animation: pulse 2s ease-in-out infinite;
        }

        .heart {
          width: 60px;
          height: 60px;
          background: #ff5722;
          position: relative;
          transform: rotate(-45deg);
          animation: heartbeat 1.5s ease-in-out infinite;
          margin: 0 20px;
        }

        .heart::before,
        .heart::after {
          content: '';
          width: 60px;
          height: 60px;
          position: absolute;
          background: #ff5722;
          border-radius: 50%;
        }

        .heart::before {
          top: -30px;
          left: 0;
        }

        .heart::after {
          left: 30px;
          top: 0;
        }

        @keyframes heartbeat {
          0%, 100% { transform: rotate(-45deg) scale(1); }
          50% { transform: rotate(-45deg) scale(1.1); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .quote-section {
          text-align: center;
          margin: 4rem 0;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 25px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .quote-text {
          font-size: 2.5rem;
          color: #d84315;
          font-weight: 300;
          margin-bottom: 1rem;
          font-style: italic;
        }

        .steps-flow {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }

        .step-bubble {
          background: linear-gradient(135deg, #ff7043, #ff5722);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 30px;
          font-weight: 500;
          box-shadow: 0 5px 15px rgba(255, 112, 67, 0.3);
          animation: fadeInUp 1s ease-out;
        }

        .arrow {
          font-size: 1.5rem;
          color: #ff7043;
          font-weight: bold;
        }

        .categories {
          margin: 4rem 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .categories.compact {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .category-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 25px;
          padding: 3rem;
          margin-bottom: 2rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border: 3px solid #ff7043;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .category-card.small {
          padding: 2rem;
        }

        .category-card.final {
          grid-column: 1 / -1;
          max-width: 800px;
          margin: 2rem auto;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .category-title {
          font-size: 2rem;
          font-weight: 600;
          color: #d84315;
          text-align: center;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .category-title.small {
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .category-description {
          text-align: center;
        }

        .category-description p {
          font-size: 1.1rem;
          color: #5d4037;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .category-description p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 3rem;
          }
          
          .subtitle {
            font-size: 1.2rem;
          }
          
          .quote-text {
            font-size: 2rem;
          }
          
          .category-card {
            padding: 2rem;
          }
          
          .category-title {
            font-size: 1.5rem;
          }
          
          .steps-flow {
            flex-direction: column;
            align-items: center;
          }
          
          .arrow {
            transform: rotate(90deg);
          }
          
          .heart-divider {
            flex-direction: column;
            margin: 2rem 0;
          }
          
          .connection-line {
            height: 40px;
            width: 4px;
            margin: 15px 0;
            background: linear-gradient(180deg, #ff7043, #ffab91, #ff7043);
          }
          
          .categories {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
