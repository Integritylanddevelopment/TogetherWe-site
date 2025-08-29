"use client"

import Link from "next/link"
import { useState } from "react"
import Navigation from "../../components/navigation"

export default function ContextInjectionPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [openAccordions, setOpenAccordions] = useState<string[]>([])

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const engines = [
    { id: 1, name: "AttachmentStyleInsightEngine", focus: "Attachment patterns & emotional bonding" },
    { id: 2, name: "CommunicationPatternsEngine", focus: "Based on the Gottman Method" },
    { id: 3, name: "EmotionalRegulationEngine", focus: "Balanced emotion skills" },
    { id: 4, name: "IntimacyConnectionEngine", focus: "Multi-dimensional intimacy" },
    { id: 5, name: "ConflictResolutionEngine", focus: "Based on the work of Thomas Kilmann" },
    { id: 6, name: "SexualIntimacyEngine", focus: "Sexual health & communication" },
    { id: 7, name: "ParentingDynamicsEngine", focus: "Co-parenting & family systems" },
    { id: 8, name: "FinancialStressEngine", focus: "Money-related conflicts" },
    { id: 9, name: "AddictionRecoveryEngine", focus: "Substance abuse & recovery" },
    { id: 10, name: "CulturalCompetencyEngine", focus: "Cross-cultural relationships" },
    { id: 11, name: "GriefLossProcessingEngine", focus: "Bereavement & loss" },
    { id: 12, name: "ChronicIllnessAdaptationEngine", focus: "Health challenges" },
    { id: 13, name: "LGBTQRelationshipEngine", focus: "LGBTQ+ dynamics" },
    { id: 14, name: "NeurodivergeExpansionEngine", focus: "Neurodiversity support" },
    { id: 15, name: "ElderCareTransitionEngine", focus: "Aging & caregiving" },
    { id: 16, name: "BlendedFamilyDynamicsEngine", focus: "Step-family integration" },
    { id: 17, name: "FertilityReproductiveEngine", focus: "Reproductive challenges" },
    { id: 18, name: "DigitalAgeRelationshipEngine", focus: "Technology & social media" },
    { id: 19, name: "CrossReligiousSpiritualEngine", focus: "Interfaith relationships" },
    { id: 20, name: "LifeTransitionNavigationEngine", focus: "Major life changes" },
  ]

  return (
    <div>
      <Navigation />

      <div className="presentation-container">
        <div className="header">
          <h1>TogetherWe<br />Context Injection Engine</h1>
          <p>
            How 20 Emotional Intelligence Engines work together with the Context Injection Engine to deliver
            personalized, precise coaching insights tailored specifically to each couple
          </p>
        </div>

        <div className="tab-container">
          <div className="tab-list" style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
            <button
              className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              System Overview
            </button>
            <button
              className={`tab-button ${activeTab === "engines" ? "active" : ""}`}
              onClick={() => setActiveTab("engines")}
            >
              20 EI Engines
            </button>
            <button
              className={`tab-button ${activeTab === "context" ? "active" : ""}`}
              onClick={() => setActiveTab("context")}
            >
              Context Injection
            </button>
            <button
              className={`tab-button ${activeTab === "flow" ? "active" : ""}`}
              onClick={() => setActiveTab("flow")}
            >
              Processing Flow
            </button>
            <button
              className={`tab-button ${activeTab === "personalization" ? "active" : ""}`}
              onClick={() => setActiveTab("personalization")}
            >
              Personalization
            </button>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="tab-content active">
              <h2>System Architecture Overview</h2>

              <div className="highlight">
                <strong>The TogetherWe Context Injection Engine</strong> is the orchestrator that coordinates 20
                specialized Emotional Intelligence Engines to create deeply personalized coaching experiences.
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <button className="accordion-header" onClick={() => toggleAccordion("core-architecture")}>
                    Core Architecture Components
                    <span className={`accordion-arrow ${openAccordions.includes("core-architecture") ? "open" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {openAccordions.includes("core-architecture") && (
                    <div className="accordion-content">
                      <div className="engines-grid">
                        <div className="engine-card">
                          <h3>Pattern Review Orchestrator</h3>
                          <p>Coordinates all 20 engines, manages parallel processing, and synthesizes insights</p>
                        </div>
                        <div className="engine-card">
                          <h3>20 Emotional Intelligence Engines</h3>
                          <p>Specialized AI coaches, each expert in specific relationship domains</p>
                        </div>
                        <div className="engine-card">
                          <h3>Context Injection Engine</h3>
                          <p>Crafts personalized prompts and queries the AI with tailored context</p>
                        </div>
                        <div className="engine-card">
                          <h3>CommandCore Memory System</h3>
                          <p>Maintains relationship history, patterns, and coaching progress</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="accordion-item">
                  <button className="accordion-header" onClick={() => toggleAccordion("why-works")}>
                    Why This Architecture Works
                    <span className={`accordion-arrow ${openAccordions.includes("why-works") ? "open" : ""}`}>▼</span>
                  </button>
                  {openAccordions.includes("why-works") && (
                    <div className="accordion-content">
                      <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.8 }}>
                        <li>
                          <strong>Comprehensive Review:</strong> Every major relationship domain is broken down by
                          specialized Algorithms
                        </li>
                        <li>
                          <strong>Personalized Context:</strong> Each AI query includes your specific patterns, history,
                          and needs
                        </li>
                        <li>
                          <strong>Cutting Edge Accuracy:</strong> Evidence-based algorithms ensure coaching validity
                        </li>
                        <li>
                          <strong>Real-time Adaptation:</strong> System learns and adapts to your unique relationship
                          dynamics
                        </li>
                        <li>
                          <strong>Crisis Safety:</strong> Immediate detection and professional escalation when needed
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Engines Tab */}
          {activeTab === "engines" && (
            <div className="tab-content active">
              <h2>20 Emotional Intelligence Engines</h2>
              <p style={{ marginBottom: "2rem", color: "#475569" }}>
                Each engine is a specialized AI coach with expertise in specific relationship domains:
              </p>

              <div className="engines-grid">
                {engines.map((engine) => (
                  <div key={engine.id} className="engine-card">
                    <h3>
                      <span className="engine-number" style={{ minWidth: '2rem', display: 'inline-block' }}>{engine.id}</span>
                      <span style={{ wordBreak: 'break-word' }}>{engine.name}</span>
                    </h3>
                    <p>{engine.focus}</p>
                  </div>
                ))}
              </div>

              <div className="highlight">
                <strong>Parallel Processing:</strong> All 20 engines review your relationship simultaneously, each
                contributing their unique perspective to create a comprehensive coaching plan.
              </div>
            </div>
          )}

          {/* Context Tab */}
          {activeTab === "context" && (
            <div className="tab-content active">
              <h2>Context Injection Engine: The Personalization Core</h2>

              <div className="highlight">
                Context Injection Engine transforms generic AI into your personal coaching companion by crafting
                highly specific, contextually rich questions to the AI based on your unique relationship data. So every AI response is tailored specifically to you.
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <button className="accordion-header" onClick={() => toggleAccordion("how-works")}>
                    How Context Injection Works
                    <span className={`accordion-arrow ${openAccordions.includes("how-works") ? "open" : ""}`}>▼</span>
                  </button>
                  {openAccordions.includes("how-works") && (
                    <div className="accordion-content">
                      <div className="flow-container">
                        <div className="flow-step">
                          <div className="step-header">
                            <span className="step-number">1</span>
                            <span className="step-title">Data Collection & Review</span>
                          </div>
                          <p className="step-description">
                            Gathers your responses from the 20-day onboarding, daily questions, relationship patterns,
                            and historical coaching interactions.
                          </p>
                        </div>
                        <div className="flow-step">
                          <div className="step-header">
                            <span className="step-number">2</span>
                            <span className="step-title">Pattern Recognition</span>
                          </div>
                          <p className="step-description">
                            Each of the 20 engines identifies relevant patterns in their domain (attachment style,
                            communication patterns, conflict styles, etc.).
                          </p>
                        </div>
                        <div className="flow-step">
                          <div className="step-header">
                            <span className="step-number">3</span>
                            <span className="step-title">Context Assembly</span>
                          </div>
                          <p className="step-description">
                            Combines insights from all engines into a comprehensive context profile that includes your
                            attachment style, communication patterns, triggers, strengths, and current challenges.
                          </p>
                        </div>
                        <div className="flow-step">
                          <div className="step-header">
                            <span className="step-number">4</span>
                            <span className="step-title">Prompt Crafting</span>
                          </div>
                          <p className="step-description">
                            Creates highly specific prompts that tell the AI exactly who you are, your relationship
                            dynamics, and what kind of support would be most effective.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="accordion-item">
                  <button className="accordion-header" onClick={() => toggleAccordion("context-example")}>
                    Context Injection Example
                    <span className={`accordion-arrow ${openAccordions.includes("context-example") ? "open" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {openAccordions.includes("context-example") && (
                    <div className="accordion-content">
                      <p style={{ marginBottom: "1rem" }}>
                        Instead of asking a generic AI: <em>"How do I improve communication?"</em>
                      </p>
                      <p style={{ marginBottom: "1rem" }}>
                        The Context Injection Engine creates a personalized prompt like:
                      </p>
                      <div className="highlight" style={{ backgroundColor: 'rgba(255, 243, 224, 0.5)', border: '1px solid #ff7043', borderRadius: '8px', padding: '1.5rem', fontStyle: 'italic' }}>
                        "You are coaching Sarah (anxious attachment, tends to pursue) and Mike (avoidant attachment,
                        withdraws during conflict). Sarah's pattern: Becomes overwhelmed, seeks reassurance, fears
                        abandonment when Mike goes quiet. Mike's pattern: Shuts down when emotions get intense, needs
                        space to process, fears being controlled. Recent conflict: Financial decisions - Sarah wants
                        joint planning, Mike feels pressured and avoids the conversation. Supportive relationship advice
                        needed: Focus on underlying attachment needs, help them understand each other's protective
                        strategies. Question: How can they discuss finances without triggering their attachment wounds?"
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Flow Tab */}
          {activeTab === "flow" && (
            <div className="tab-content active">
              <h2>Complete Processing Flow</h2>

              <div className="flow-container">
                <div className="flow-step">
                  <div className="step-header">
                    <span className="step-number">1</span>
                    <span className="step-title">User Input Received</span>
                  </div>
                  <p className="step-description">
                    Daily questions, voice responses, relationship check-ins, or crisis situations are captured.
                  </p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "15%" }}></div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-header">
                    <span className="step-number">2</span>
                    <span className="step-title">Orchestrator Activation</span>
                  </div>
                  <p className="step-description">
                    Pattern Review Orchestrator receives the input and activates relevant engines based on content
                    review.
                  </p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "30%" }}></div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-header">
                    <span className="step-number">3</span>
                    <span className="step-title">Parallel Engine Exploration</span>
                  </div>
                  <p className="step-description">
                    All 20 engines simultaneously explore the input through their specialized lenses, each contributing
                    domain-specific insights.
                  </p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "50%" }}></div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-header">
                    <span className="step-number">4</span>
                    <span className="step-title">Memory Integration</span>
                  </div>
                  <p className="step-description">
                    CommandCore Memory System provides historical context, previous patterns, and coaching progress to
                    enrich the AI response.
                  </p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "65%" }}></div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-header">
                    <span className="step-number">5</span>
                    <span className="step-title">Context Injection</span>
                  </div>
                  <p className="step-description">
                    Context Injection Engine crafts personalized prompts with your specific patterns, relationship
                    dynamics, and coaching needs.
                  </p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-header">
                    <span className="step-number">6</span>
                    <span className="step-title">AI Query & Response</span>
                  </div>
                  <p className="step-description">
                    The personalized context is sent to Claude/GPT-4, which generates highly specific, evidence-based
                    coaching guidance tailored to your unique situation.
                  </p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-header">
                    <span className="step-number">7</span>
                    <span className="step-title">Personalized Delivery</span>
                  </div>
                  <p className="step-description">
                    Final coaching insights are delivered in your preferred communication style, with his/hers
                    perspectives and actionable recommendations.
                  </p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Personalization Tab */}
          {activeTab === "personalization" && (
            <div className="tab-content active">
              <h2>The Power of Personalization</h2>

              <div className="highlight">
                <strong>Generic AI vs. Context-Injected AI:</strong> The difference between receiving general
                relationship advice and getting coaching guidance that feels like it was written specifically for your
                unique relationship.
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <button className="accordion-header" onClick={() => toggleAccordion("before-after")}>
                    Before vs. After Context Injection
                    <span className={`accordion-arrow ${openAccordions.includes("before-after") ? "open" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {openAccordions.includes("before-after") && (
                    <div className="accordion-content">
                      <div className="comparison-grid">
                        <div className="comparison-card comparison-before">
                          <div className="comparison-title">❌ Generic AI Response</div>
                          <p style={{ fontStyle: "italic", color: "#7f1d1d" }}>
                            "Communication is important in relationships. Try active listening, use 'I' statements, and
                            schedule regular check-ins to discuss issues."
                          </p>
                        </div>
                        <div className="comparison-card comparison-after">
                          <div className="comparison-title">✅ Context-Injected Response</div>
                          <p style={{ fontStyle: "italic", color: "#064e3b" }}>
                            "Sarah, when you feel Mike pulling away, your anxious attachment is triggered. Instead of
                            pursuing, try: 'Mike, I notice you seem quiet. I'm feeling a bit disconnected and would love
                            to understand what you're processing. No pressure, just whenever you're ready.' Mike, when
                            you need space, reassure Sarah first: 'I need some time to think, but I'm not pulling away
                            from us. Can we reconnect in an hour?'"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="accordion-item">
                  <button className="accordion-header" onClick={() => toggleAccordion("personalization-elements")}>
                    Key Personalization Elements
                    <span
                      className={`accordion-arrow ${openAccordions.includes("personalization-elements") ? "open" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  {openAccordions.includes("personalization-elements") && (
                    <div className="accordion-content">
                      <div className="engines-grid">
                        <div className="engine-card">
                          <h3>Attachment Styles</h3>
                          <p>
                            Your specific attachment patterns (anxious, avoidant, secure, disorganized) guide all
                            coaching recommendations
                          </p>
                        </div>
                        <div className="engine-card">
                          <h3>Communication Patterns</h3>
                          <p>
                            Your unique ways of expressing and receiving love, handling conflict, and processing
                            emotions
                          </p>
                        </div>
                        <div className="engine-card">
                          <h3>Triggers & Strengths</h3>
                          <p>
                            What specifically triggers each partner and what your relationship's unique strengths are
                          </p>
                        </div>
                        <div className="engine-card">
                          <h3>Coaching History</h3>
                          <p>
                            Previous conversations, progress made, and what approaches work best for your relationship
                          </p>
                        </div>
                        <div className="engine-card">
                          <h3>Current Context</h3>
                          <p>
                            What's happening in your life right now - stress, life changes, recent conflicts or
                            successes
                          </p>
                        </div>
                        <div className="engine-card">
                          <h3>Language Preferences</h3>
                          <p>
                            How you prefer to receive feedback, your communication style, and cultural considerations
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="accordion-item">
                  <button className="accordion-header" onClick={() => toggleAccordion("coaching-outcomes")}>
                    Coaching Outcomes
                    <span className={`accordion-arrow ${openAccordions.includes("coaching-outcomes") ? "open" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {openAccordions.includes("coaching-outcomes") && (
                    <div className="accordion-content">
                      <ul style={{ paddingLeft: "1.5rem", lineHeight: 1.8 }}>
                        <li>
                          <strong>Immediate Relevance:</strong> Every insight feels directly applicable to your specific
                          situation
                        </li>
                        <li>
                          <strong>Reduced Resistance:</strong> Recommendations match your natural communication style
                          and preferences
                        </li>
                        <li>
                          <strong>Accelerated Progress:</strong> No time wasted on generic advice that doesn't fit your
                          relationship
                        </li>
                        <li>
                          <strong>Deeper Understanding:</strong> Both partners gain insight into their specific patterns
                          and dynamics
                        </li>
                        <li>
                          <strong>Sustainable Change:</strong> Support strategies work because they're tailored to your
                          unique relationship
                        </li>
                        <li>
                          <strong>Crisis Prevention:</strong> Early identification of your specific warning signs and
                          triggers
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="highlight">
                <strong>The Result:</strong> AI coaching that understands you as well as a human coach who has worked
                with you for months, available 24/7 at a fraction of the cost.
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #9333ea, #ec4899, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

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

        .presentation-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          margin-top: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 4px solid #ff7043;
        }

        .header h1 {
          font-size: 4.5rem;
          font-weight: 300;
          color: #d84315;
          text-shadow: 2px 2px 4px rgba(216, 67, 21, 0.2);
          margin-bottom: 1rem;
        }

        .header p {
          font-size: 1.3rem;
          color: #8d6e63;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .tab-container {
          margin-top: 2rem;
        }

        .tab-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 2px solid #ffe4b5;
          padding-bottom: 1rem;
        }

        .tab-button {
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.7);
          border: 2px solid #ff7043;
          border-radius: 12px;
          color: #d84315;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-button:hover {
          background: rgba(255, 112, 67, 0.1);
          transform: translateY(-2px);
        }

        .tab-button.active {
          background: #ff7043;
          color: white;
          box-shadow: 0 4px 15px rgba(255, 112, 67, 0.3);
        }

        .tab-content {
          display: none;
          animation: fadeIn 0.5s ease-in-out;
        }

        .tab-content.active {
          display: block;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tab-content h2 {
          font-size: 2.5rem;
          color: #d84315;
          margin-bottom: 2rem;
          text-align: center;
          font-weight: 300;
        }

        .highlight {
          background: linear-gradient(135deg, #fff3e0, #ffe0b2);
          border-left: 5px solid #ff9800;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 0 15px 15px 0;
          font-size: 1.1rem;
        }

        .accordion {
          margin: 2rem 0;
        }

        .accordion-item {
          margin-bottom: 1rem;
          border: 2px solid #ffe4b5;
          border-radius: 15px;
          overflow: hidden;
        }

        .accordion-header {
          width: 100%;
          padding: 1.5rem;
          background: rgba(255, 228, 181, 0.5);
          border: none;
          text-align: left;
          font-size: 1.2rem;
          font-weight: 600;
          color: #d84315;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .accordion-header:hover {
          background: rgba(255, 228, 181, 0.8);
        }

        .accordion-arrow {
          transition: transform 0.3s ease;
        }

        .accordion-arrow.open {
          transform: rotate(180deg);
        }

        .accordion-content {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.9);
        }

        .engines-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin: 1.5rem 0;
        }

        .engine-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          padding: 1.5rem;
          border: 2px solid #ffab91;
          transition: all 0.3s ease;
        }

        .engine-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 171, 145, 0.3);
        }

        .engine-card h3 {
          color: #d84315;
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .engine-number {
          display: inline-block;
          background: #ff7043;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          text-align: center;
          font-size: 0.8rem;
          line-height: 24px;
          margin-right: 0.5rem;
        }

        .flow-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .flow-step {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          padding: 1.5rem;
          border-left: 5px solid #ff7043;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .step-number {
          background: #ff7043;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .step-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #d84315;
        }

        .step-description {
          color: #5d4037;
          line-height: 1.6;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #ffe4b5;
          border-radius: 4px;
          margin-top: 1rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff7043, #ffab91);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .code-block {
          background: #2d3748;
          color: #e2e8f0;
          padding: 1.5rem;
          border-radius: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          white-space: pre-line;
          margin: 1rem 0;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 1.5rem 0;
        }

        .comparison-card {
          padding: 1.5rem;
          border-radius: 15px;
          border: 2px solid;
        }

        .comparison-before {
          background: #fef2f2;
          border-color: #fca5a5;
        }

        .comparison-after {
          background: #f0fdf4;
          border-color: #86efac;
        }

        .comparison-title {
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .presentation-container {
            padding: 1rem;
            margin-top: 1rem;
          }

          .header h1 {
            font-size: 2.5rem;
          }

          .header p {
            font-size: 1.1rem;
          }

          .tab-list {
            flex-direction: column;
          }

          .tab-button {
            text-align: center;
          }

          .engines-grid {
            grid-template-columns: 1fr;
          }

          .comparison-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
