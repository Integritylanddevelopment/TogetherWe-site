"use client"

import Link from "next/link"

export default function EmotionalRoadmapPage() {
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
              <Link href="/ai-explanation" className="text-gray-600 hover:text-purple-600 transition-colors">
                AI Technology
              </Link>
              <Link href="/context-injection" className="text-gray-600 hover:text-purple-600 transition-colors">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="header">
          <h1>Emotional Roadmap System</h1>
          <p>
            AI-powered relationship intelligence that creates deeply personalized daily experiences for couples through
            advanced emotional profiling and adaptive content generation.
          </p>
        </div>

        <section className="section">
          <h2 className="section-title">How It Works</h2>
          <div className="flow-diagram">
            <div className="flow-step">20 Days of Questions</div>
            <span className="arrow">→</span>
            <div className="flow-step">Profile Building</div>
            <span className="arrow">→</span>
            <div className="flow-step">AI Personalization</div>
            <span className="arrow">→</span>
            <div className="flow-step">30-Day Roadmap</div>
          </div>

          <div className="highlight-box">
            <h3>The Magic Behind the Experience</h3>
            <p>
              Every couple begins with 20 carefully crafted questions that reveal their unique emotional fingerprint.
              Our AI analyzes attachment styles, communication patterns, erotic blueprints, and relationship dynamics to
              create a comprehensive couple profile. Then, our personalization engine transforms generic relationship
              advice into deeply intimate, perfectly-timed daily experiences.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Personalization Engine</h2>
          <div className="grid">
            <div className="card">
              <h3>
                <span className="card-icon">🧠</span> Emotional Intelligence
              </h3>
              <p>
                Our AI processes responses through advanced NLP to identify attachment styles (Secure, Anxious,
                Avoidant), communication patterns, and emotional needs. Each partner receives content tailored to their
                unique psychological profile.
              </p>
            </div>
            <div className="card">
              <h3>
                <span className="card-icon">💑</span> Couple Dynamics
              </h3>
              <p>
                The system analyzes how partners interact together, identifying patterns like pursuer-withdrawer
                dynamics, and creates shared experiences that strengthen rather than trigger these patterns.
              </p>
            </div>
            <div className="card">
              <h3>
                <span className="card-icon">🎭</span> Adaptive Tones
              </h3>
              <p>
                Content automatically adjusts between Sweet/Playful, Hot/Flirty, Calm/Reassuring, or Deep/Spiritual
                tones based on each couple's preferences and current relationship phase.
              </p>
            </div>
            <div className="card">
              <h3>
                <span className="card-icon">💕</span> Erotic Intelligence
              </h3>
              <p>
                Incorporating erotic blueprints (Sensual, Energetic, Kinky, Sexual, Playful), the system creates
                intimacy suggestions that honor each partner's unique desire language and comfort zones.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Emotional Intelligence Components</h2>
          <div className="epic-grid">
            <div className="epic-card">
              <div className="epic-header">
                <div className="epic-icon">🏷️</div>
                <div className="epic-title">NLP Emotional Tagging</div>
              </div>
              <p>
                Advanced natural language processing identifies emotional patterns, attachment styles, and relationship
                themes from user responses, creating rich psychological profiles.
              </p>
            </div>

            <div className="epic-card">
              <div className="epic-header">
                <div className="epic-icon">👥</div>
                <div className="epic-title">Dynamic Profile Building</div>
              </div>
              <p>
                Creates living psychological documents that evolve daily, tracking changes in emotional patterns and
                relationship dynamics over time.
              </p>
            </div>

            <div className="epic-card">
              <div className="epic-header">
                <div className="epic-icon">🔄</div>
                <div className="epic-title">Pattern Recognition</div>
              </div>
              <p>
                Identifies harmful cycles like pursuer-avoider dynamics and provides gentle, therapeutic interventions
                to break negative patterns.
              </p>
            </div>

            <div className="epic-card">
              <div className="epic-header">
                <div className="epic-icon">✨</div>
                <div className="epic-title">Personalized Interventions</div>
              </div>
              <p>
                Generates daily rituals and suggestions perfectly matched to each couple's specific emotional needs and
                relationship style.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">The Experience</h2>
          <div className="grid">
            <div className="card">
              <h3>
                <span className="card-icon">🌅</span> Morning Thoughts
              </h3>
              <p>
                Each day begins with a warm, personalized reflection that sets the emotional tone and intention for the
                couple's day together.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="card-icon">🎯</span> Daily Rituals
              </h3>
              <p>
                Small, actionable practices designed specifically for each couple's attachment styles and communication
                patterns - from playful notes to intimate conversations.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="card-icon">💬</span> Midday Touchpoints
              </h3>
              <p>
                Perfectly-timed suggestions for connection throughout the day, whether flirty texts, affirmations, or
                gentle check-ins based on each partner's love language.
              </p>
            </div>

            <div className="card">
              <h3>
                <span className="card-icon">🌙</span> Evening Reflections
              </h3>
              <p>
                Intimate practices for ending the day together - from vulnerable conversations to sensual explorations,
                all calibrated to deepen their unique bond.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="highlight-box">
            <h3>Why This Changes Everything</h3>
            <p>
              Traditional relationship advice is one-size-fits-all. Our system understands that an anxious partner needs
              different support than an avoidant one, that sensual couples connect differently than energetic ones, and
              that every relationship has its own rhythm. By combining therapeutic expertise with AI personalization, we
              create experiences that feel like they were designed by someone who truly knows and loves each couple.
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #9333ea, #ec4899, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        :root {
          --tw-bg-1: #fff8e7;
          --tw-bg-2: #ffe4b5;
          --tw-bg-3: #ffb347;
          --tw-primary: #d84315;
          --tw-secondary: #ff7043;
          --tw-accent: #ffab91;
          --tw-card-bg: #fff3e0;
          --tw-card-border: #ff7043;
          --tw-card-shadow: rgba(255, 112, 67, 0.08);
          --tw-card-shadow-hover: rgba(255, 112, 67, 0.12);
          --tw-text-dark: #5d4037;
          --tw-text-light: #8d6e63;
          --tw-gradient: linear-gradient(135deg, #fff8e7 0%, #ffe4b5 50%, #ffb347 100%);
          --tw-gradient-card: linear-gradient(135deg, #fff3e0 0%, #ffe4b5 100%);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Georgia', serif;
          line-height: 1.7;
          color: var(--tw-text-dark);
          background: var(--tw-bg-2);
          min-height: 100vh;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        .header {
          text-align: center;
          margin-bottom: 4rem;
          padding: 3rem 0;
          background: rgba(247, 240, 242, 0.8);
          border-radius: 24px;
          backdrop-filter: blur(10px);
          border: 1px solid var(--tw-card-border);
        }
        
        .header h1 {
          font-size: 4.5rem;
          font-weight: 300;
          color: var(--tw-primary);
          text-shadow: 2px 2px 4px rgba(216, 67, 21, 0.2);
          margin-bottom: 1rem;
        }
        
        .header p {
          font-size: 1.2rem;
          color: var(--tw-text-light);
          max-width: 700px;
          margin: 0 auto;
          font-weight: 300;
        }
        
        .section {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--tw-primary);
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .card {
          background: var(--tw-gradient-card);
          border-radius: 25px;
          padding: 2.5rem;
          margin-bottom: 2rem;
          border: 2px solid var(--tw-card-border);
          box-shadow: 0 15px 40px var(--tw-card-shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px var(--tw-card-shadow-hover);
        }
        
        .card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--tw-primary);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .card-icon {
          font-size: 2rem;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .flow-diagram {
          background: rgba(247, 240, 242, 0.9);
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
          border: 2px solid var(--tw-card-border);
        }
        
        .flow-step {
          display: inline-block;
          background: var(--tw-accent);
          color: var(--tw-primary);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          margin: 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .flow-step:hover {
          background: var(--tw-secondary);
          transform: scale(1.05);
        }
        
        .arrow {
          color: var(--tw-secondary);
          font-size: 1.5rem;
          margin: 0 1rem;
        }
        
        .highlight-box {
          background: linear-gradient(135deg, var(--tw-card-bg) 0%, var(--tw-bg-2) 100%);
          border-radius: 16px;
          padding: 2rem;
          margin: 2rem 0;
          border-left: 4px solid var(--tw-secondary);
        }
        
        .epic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .epic-card {
          background: rgba(247, 240, 242, 0.8);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid var(--tw-card-border);
        }
        
        .epic-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .epic-icon {
          font-size: 2rem;
        }
        
        .epic-title {
          font-weight: 600;
          color: var(--tw-primary);
        }
        
        @media (max-width: 768px) {
          .header h1 {
            font-size: 2.5rem;
          }
          
          .container {
            padding: 1rem;
          }
          
          .card {
            padding: 1.5rem;
          }
          
          .flow-diagram {
            padding: 2rem 1rem;
          }
          
          .flow-step {
            display: block;
            margin: 0.5rem 0;
          }
          
          .arrow {
            display: block;
            transform: rotate(90deg);
            margin: 1rem auto;
          }
        }
      `}</style>
    </div>
  )
}
