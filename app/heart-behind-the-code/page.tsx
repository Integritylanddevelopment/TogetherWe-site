"use client"
import Link from "next/link";
import Navigation from "../../components/navigation";

export default function HeartBehindTheCodePage() {
  return (
    <div>
      <div className="floating-shapes"></div>

      <Navigation />

      <div className="hero">
        <h1>The Heart Behind the Code</h1>
        <div className="tagline">Bridging Hearts and Minds Through Technology</div>
      </div>

      <div className="heart-divider">
        <div className="connection-line"></div>
        <div className="heart"></div>
        <div className="connection-line"></div>
      </div>

      <div className="container">
        <div className="quote-section">
          <div className="quote-text">"Where AI Meets the Human Heart"</div>
          <div className="quote-author">Understanding the soul behind the technology</div>
        </div>

        <section className="section">
          <h2 className="section-title">The Human Touch in Digital Minds</h2>
          <p>
            At their core, AI engines are more than algorithms and data—they're{" "}
            <span className="highlight">bridges to human connection</span>. Every conversation, every response, every
            moment of understanding represents thousands of hours of human care, empathy, and wisdom woven into digital
            form.
          </p>
          
          <div className="heart-container">
            <div className="connection-line"></div>
            <div className="heart"></div>
            <div className="connection-line"></div>
            <div className="heart"></div>
            <div className="connection-line"></div>
          </div>

          <p>
            Think of AI engines as <span className="highlight">digital companions</span> trained not just on facts and
            figures, but on the collective wisdom of humanity—stories of triumph, expressions of creativity, moments of
            profound insight that have shaped our world.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Stories That Bring Us Closer</h2>
          <p>
            Every relationship has moments when words don't come out right—or don't come at all. That's where our AI
            engines step in, not to replace love, but to help it shine through.
          </p>

          <div className="story-card">
            <p>
              <strong>Maria & Javier:</strong> Maria often felt unheard by Javier. He tended to withdraw when she got
              emotional, and she worried he didn't care. Our system noticed the patterns: her language filled with words
              of fear and worry, his with silence and distance. By gently surfacing these patterns back to them, Maria
              and Javier discovered something powerful: he wasn't ignoring her—he was afraid of making things worse. For
              the first time, they understood each other's dance, and a new tenderness bloomed.
            </p>
          </div>

          <div className="story-card">
            <p>
              <strong>Lena & Chris:</strong> Lena longed for more warmth, but Chris defaulted to practicality. Our
              engines caught the way Chris used "fix-it" language while Lena reached for "connection" words. Seeing this
              reflected back made Chris realize that solutions weren't the gift Lena wanted—his presence was. Their
              conversations shifted from <em>What's the answer?</em> to <em>What do you need?</em>
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">The Heart Behind the Code</h2>
          <p>
            A human relationship coach listens for subtle cues: the sigh when you're tired, the change in tone when
            you're hurt, the joyful lift in your voice when you're excited. Our AI engines do the same—by noticing the
            words you use most.
          </p>

          <p>
            Some of our engines listen for joy, others for apprehension, others for words that signal pursuit or
            withdrawal. Together, they weave a map of your attachment patterns, your hopes, your fears, and the ways you
            reach for love.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Why This Matters</h2>
          <p>
            For years, people worried that technology was pulling us apart, burying us in screens. But what if it could
            do the opposite? What if a digital companion could remind you how much your words matter—and guide you back
            to the person you love when the two of you feel lost?
          </p>

          <p>
            That's the promise of TogetherWe. Not AI that replaces human connection, but AI that strengthens it. Every
            prompt, every reflection, every little nudge is designed to bring you closer to the person you love.
          </p>

          <p>
            Because the future of technology isn't colder. It's warmer. It's a future where data meets devotion, where
            algorithms notice your heartbeats, and where love gets the tools it deserves to grow.
          </p>
        </section>

        <footer className="footer">
          <p>
            "The best technology is indistinguishable from magic—but the most meaningful technology feels like love."
          </p>
        </footer>
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

        .nav-btn {
          color: #d84315;
          font-family: 'Georgia', serif;
          font-size: 1.4rem;
          font-weight: 300;
          padding: 0.5rem 1.5rem;
          margin: 0 0.5rem;
          border-radius: 8px;
          background: none;
          transition: color 0.2s, background 0.2s;
          text-decoration: none;
          letter-spacing: 0.03em;
          display: inline-block;
          text-shadow: 2px 2px 4px rgba(216, 67, 21, 0.2);
        }
        .nav-btn:hover {
          color: #fff;
          background: #ff7043;
        }
        .nav-btn.active {
          color: #ff7043;
          background: #fff3e0;
          border: 1px solid #ff7043;
        }

        .nav-btn {
          color: #d84315;
          font-family: 'Georgia', serif;
          font-size: 1.4rem;
          font-weight: 300;
          padding: 0.5rem 1.5rem;
          margin: 0 0.5rem;
          border-radius: 8px;
          background: none;
          transition: color 0.2s, background 0.2s;
          text-decoration: none;
          letter-spacing: 0.03em;
          display: inline-block;
          text-shadow: 2px 2px 4px rgba(216, 67, 21, 0.2);
        }
        .nav-btn:hover {
          color: #fff;
          background: #ff7043;
        }
        .nav-btn.active {
          color: #ff7043;
          background: #fff3e0;
          border: 1px solid #ff7043;
        }

        .hero {
          text-align: center;
          padding: 6rem 2rem 4rem;
          position: relative;
          z-index: 2;
          background: rgba(255, 248, 231, 0.8);
          backdrop-filter: blur(10px);
        }

        .hero h1 {
          font-size: 4rem;
          font-weight: 300;
          color: #d84315;
          text-shadow: 3px 3px 6px rgba(216, 67, 21, 0.3);
          margin-bottom: 1rem;
          animation: fadeInUp 1s ease-out;
        }

        .tagline {
          font-size: 1.8rem;
          color: #8d6e63;
          margin-bottom: 2rem;
          font-weight: 300;
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
          background: rgba(255, 255, 255, 0.7);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .quote-text {
          font-size: 2.2rem;
          color: #d84315;
          font-style: italic;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .quote-author {
          font-size: 1.2rem;
          color: #8d6e63;
          font-weight: 300;
        }

        .section {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          padding: 3rem;
          margin-bottom: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border-left: 6px solid #ff7043;
        }

        .section:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .section-title {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          color: #d84315;
          font-weight: 400;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff7043, #ffab91);
          border-radius: 2px;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          text-align: justify;
          line-height: 1.8;
        }

        .highlight {
          background: linear-gradient(120deg, transparent 0%, #ffeb3b 0%, #ffeb3b 100%, transparent 100%);
          background-size: 100% 40%;
          background-repeat: no-repeat;
          background-position: 0 70%;
          padding: 2px 4px;
          color: #f57f17;
          font-weight: 500;
        }

        .heart-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 3rem 0;
        }

        .story-card {
          background: rgba(255, 183, 77, 0.2);
          border-radius: 15px;
          padding: 25px;
          margin: 25px 0;
          border: 2px solid #ffb74d;
          position: relative;
        }

        .footer {
          text-align: center;
          margin-top: 60px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          border-top: 4px solid #ff7043;
        }

        .footer p {
          font-size: 1.2em;
          color: #8d6e63;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 3rem;
          }
          
          .tagline {
            font-size: 1.4rem;
          }
          
          .nav-btn {
            font-size: 1rem;
            padding: 0.4rem 1rem;
            margin: 0 0.25rem;
          }
          
          .section {
            padding: 2rem;
            margin-bottom: 1.5rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          p {
            font-size: 1.1rem;
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
  );
}
