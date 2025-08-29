"use client"

import Link from "next/link"

export default function AIExplanationPage() {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold gradient-text">
              TogetherWe
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                Pricing
              </Link>
              <Link href="/emotional-roadmap" className="text-gray-600 hover:text-purple-600 transition-colors">
                Roadmap
              </Link>
              <Link href="/context-injection" className="text-gray-600 hover:text-purple-600 transition-colors">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <header className="header">
          <h1 className="title">AI Engines</h1>
          <p className="subtitle">Bridging Hearts and Minds Through Technology</p>
        </header>

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
          background: linear-gradient(45deg, #fff8e7, #ffe4b5, #ffb347);
          color: #5d4037;
          line-height: 1.7;
          min-height: 100vh;
        }

        .gradient-text {
          background: linear-gradient(135deg, #9333ea, #ec4899, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeIn 2s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .title {
          font-size: 3.5em;
          color: #d84315;
          margin-bottom: 20px;
          font-weight: 300;
          text-shadow: 2px 2px 4px rgba(216, 67, 21, 0.2);
        }

        .subtitle {
          font-size: 1.4em;
          color: #8d6e63;
          font-style: italic;
          letter-spacing: 1px;
          text-align: center;
        }

        .section {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border-left: 6px solid #ff7043;
        }

        .section:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .section-title {
          font-size: 2.2em;
          margin-bottom: 25px;
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
          font-size: 1.1em;
          margin-bottom: 20px;
          text-align: justify;
        }

        .heart-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 40px 0;
        }

        .heart {
          width: 80px;
          height: 80px;
          background: #ff5722;
          position: relative;
          transform: rotate(-45deg);
          animation: heartbeat 1.5s ease-in-out infinite;
          margin: 0 20px;
        }

        .heart::before,
        .heart::after {
          content: '';
          width: 80px;
          height: 80px;
          position: absolute;
          background: #ff5722;
          border-radius: 50%;
        }

        .heart::before {
          top: -40px;
          left: 0;
        }

        .heart::after {
          left: 40px;
          top: 0;
        }

        @keyframes heartbeat {
          0%, 100% { transform: rotate(-45deg) scale(1); }
          50% { transform: rotate(-45deg) scale(1.1); }
        }

        .connection-line {
          height: 4px;
          background: linear-gradient(90deg, #ff7043, #ffab91, #ff7043);
          border-radius: 2px;
          flex: 1;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .quote {
          background: linear-gradient(135deg, #fff3e0, #ffe0b2);
          border-left: 5px solid #ff9800;
          padding: 25px;
          margin: 30px 0;
          border-radius: 0 15px 15px 0;
          font-style: italic;
          font-size: 1.2em;
          position: relative;
        }

        .quote::before {
          content: '"';
          font-size: 4em;
          color: #ff9800;
          position: absolute;
          top: -10px;
          left: 15px;
          opacity: 0.3;
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

        .story-card {
          background: rgba(255, 183, 77, 0.2);
          border-radius: 15px;
          padding: 25px;
          margin: 25px 0;
          border: 2px solid #ffb74d;
          position: relative;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 40px 0;
        }

        .impact-item {
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .impact-item:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(1.05);
        }

        .impact-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
          height: 64px;
          font-size: 3em;
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
          .container {
            padding: 20px 15px;
          }
          
          .title {
            font-size: 2.5em;
          }
          
          .subtitle {
            font-size: 1.2em;
          }
          
          .section {
            padding: 25px 20px;
            margin-bottom: 25px;
          }
          
          .section-title {
            font-size: 1.8em;
          }
          
          .heart-container {
            flex-direction: column;
            margin: 30px 0;
          }
          
          .connection-line {
            height: 40px;
            width: 4px;
            margin: 15px 0;
            background: linear-gradient(180deg, #ff7043, #ffab91, #ff7043);
          }
          
          .heart {
            width: 60px;
            height: 60px;
            margin: 0;
          }
          
          .heart::before,
          .heart::after {
            width: 60px;
            height: 60px;
          }
          
          .heart::before {
            top: -30px;
          }
          
          .heart::after {
            left: 30px;
          }
          
          .impact-grid {
            grid-template-columns: 1fr;
            gap: 15px;
            margin: 30px 0;
          }
          
          .impact-item {
            padding: 15px;
          }
          
          .impact-icon {
            font-size: 2.5em;
            margin-bottom: 10px;
          }
          
          p {
            font-size: 1em;
          }
          
          .footer {
            margin-top: 40px;
            padding: 25px 20px;
          }
          
          .footer p {
            font-size: 1.1em;
          }
        }
      `}</style>
    </div>
  )
}
