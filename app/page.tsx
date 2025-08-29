"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <div className="floating-shapes"></div>

      <div className="hero">
        <h1>TogetherWe</h1>
        <div className="tagline">AI-Powered Couples Coaching & Support</div>
        <div className="subtitle">
          Revolutionary relationship support that adapts to your unique dynamics, providing personalized insights and
          coaching guidance
          <br />
          to strengthen your connection.
        </div>
        <div
          className="disclaimer-box"
          style={{
            margin: "30px auto 0",
            maxWidth: "700px",
            background: "#fff3e0",
            border: "2px solid #ff7043",
            borderRadius: "12px",
            padding: "22px",
            color: "#d84315",
            fontSize: "1.1rem",
            fontWeight: "500",
            boxShadow: "0 4px 16px rgba(255,112,67,0.08)",
            animation: "fadeInUp 1.5s ease-out 0.9s both",
          }}
        >
          TogetherWe offers AI-powered relationship coaching
          <br />
          <span style={{ display: "block", marginTop: "8px" }}>not a substitute for Licensed therapy</span>
        </div>
      </div>

      <div className="heart-divider">
        <div className="connection-line"></div>
        <div className="heart"></div>
        <div className="connection-line"></div>
      </div>

      <div className="container">
        <div className="quote-section">
          <div className="quote-text">"Where Technology Meets the Human Soul"</div>
          <div className="quote-author">Experience the future of relationship healing</div>
        </div>

        <div className="categories">
          <div className="category-card product beta-cta" id="beta-cta-card">
            <div className="category-header">
              <div className="beta-title-row">
                <div className="heart small" aria-hidden="true"></div>
                <div className="category-title">
                  Fall Back in Love
                  <br />
                  Every Day
                </div>
                <div className="heart small" aria-hidden="true"></div>
              </div>
            </div>

            <div className="category-description beta-desc">
              <p>Most couples drift apart over time. You don't have to.</p>
              <p>
                TogetherWe helps you break routine, spark deeper conversations, and bring back that{" "}
                <em>can't-wait-to-see-you</em> feeling.
              </p>
            </div>

            <form id="beta-signup-form" className="beta-form" aria-label="Beta signup form">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="beta-input"
                aria-label="Email address"
                autoComplete="email"
              />
              <button type="submit" className="beta-btn" aria-label="Claim your early access">
                Claim Your Early Access Now
              </button>
            </form>

            <div id="beta-signup-success" className="beta-success" role="status" aria-live="polite">
              Thank you! You're on the list. We'll be in touch soon.
            </div>

            <div className="supporting-line beta-supporting">
              Now Beta Testing: Only 500 couples will get in. Claim your spot before they're gone.
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h3>Ready to Transform Your Relationship?</h3>
        <p>Join the revolution in couples coaching with AI that understands, adapts, and empowers lasting love.</p>
        <Link href="/relationship-roadmap" passHref legacyBehavior>
          <button className="beta-btn" aria-label="See the Relationship Roadmap" style={{display: 'inline-block', textAlign: 'center', marginTop: '1rem'}}>
            See the Relationship Roadmap
          </button>
        </Link>
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
          padding: 8rem 2rem 4rem;
          position: relative;
          z-index: 2;
          background: rgba(255, 248, 231, 0.8);
          backdrop-filter: blur(10px);
        }

        .hero h1 {
          font-size: 6rem;
          font-weight: 300;
          color: #d84315;
          text-shadow: 3px 3px 6px rgba(216, 67, 21, 0.3);
          margin-bottom: 1rem;
          animation: fadeInUp 1s ease-out;
        }

        .tagline {
          font-size: 2rem;
          color: #8d6e63;
          margin-bottom: 2rem;
          font-weight: 300;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .subtitle {
          font-size: 1.3rem;
          color: #8d6e63;
          max-width: 800px;
          margin: 0 auto 3rem;
          line-height: 1.6;
          animation: fadeInUp 1s ease-out 0.6s both;
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

        .heart.small {
          width: 30px;
          height: 30px;
          margin: 0 10px;
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

        .heart.small::before,
        .heart.small::after {
          width: 30px;
          height: 30px;
        }

        .heart::before {
          top: -30px;
          left: 0;
        }

        .heart.small::before {
          top: -15px;
        }

        .heart::after {
          left: 30px;
          top: 0;
        }

        .heart.small::after {
          left: 15px;
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

        .quote-author {
          font-size: 1.2rem;
          color: #8d6e63;
          font-weight: 300;
        }

        .categories {
          margin: 4rem 0;
        }

        .category-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 25px;
          padding: 3rem;
          margin-bottom: 2rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border: 3px solid #ff7043;
          transition: all 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .beta-title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .category-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #d84315;
          text-align: center;
          line-height: 1.2;
        }

        .beta-desc {
          text-align: center;
          margin-bottom: 2rem;
        }

        .beta-desc p {
          font-size: 1.2rem;
          color: #5d4037;
          margin-bottom: 1rem;
        }

        .beta-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 400px;
          margin: 0 auto 2rem;
        }

        .beta-input {
          padding: 1rem;
          border: 2px solid #ff7043;
          border-radius: 12px;
          font-size: 1.1rem;
          background: rgba(255, 255, 255, 0.9);
        }

        .beta-btn {
          padding: 1.2rem 2rem;
          background: linear-gradient(135deg, #ff7043, #ff5722);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .beta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 112, 67, 0.3);
        }

        .beta-success {
          display: none;
          background: #d4edda;
          color: #155724;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
        }

        .beta-supporting {
          text-align: center;
          font-size: 0.9rem;
          color: #8d6e63;
          font-style: italic;
        }

        .footer {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(255, 255, 255, 0.9);
          margin: 4rem 0 0;
          position: relative;
          z-index: 2;
        }

        .footer h3 {
          font-size: 2.5rem;
          color: #d84315;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .footer p {
          font-size: 1.2rem;
          color: #8d6e63;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-block;
          padding: 1.2rem 2.5rem;
          background: linear-gradient(135deg, #ff7043, #ff5722);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-size: 1.2rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(255, 112, 67, 0.4);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 3.5rem;
          }
          
          .tagline {
            font-size: 1.5rem;
          }
          
          .subtitle {
            font-size: 1.1rem;
          }
          
          .category-card {
            padding: 2rem;
          }
          
          .category-title {
            font-size: 2rem;
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
        }
      `}</style>
    </div>
  )
}
