"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import Navigation from "../../components/navigation"

export default function PricingPage() {
  const [betaEmail, setBetaEmail] = useState("")
  const [betaSignupSuccess, setBetaSignupSuccess] = useState(false)

  const handleBetaSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to Supabase database
    console.log("[v0] Beta signup email:", betaEmail)
    setBetaSignupSuccess(true)
    setBetaEmail("")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="hero">
        <h1>Choose Your Relationship Journey</h1>
        <div className="tagline">AI-Powered Couples Coaching & Support</div>
        <div className="subtitle">
          Revolutionary relationship support that adapts to your unique dynamics, providing personalized insights and
          coaching guidance to strengthen your connection.
        </div>
      </div>

      <div className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-card">
            <div className="beta-stamp">BETA</div>
            <h2>Coming Soon!</h2>
            <p>
              We're putting the finishing touches on our revolutionary couples coaching platform. Join our exclusive
              beta testing group to get early access.
            </p>

            {!betaSignupSuccess ? (
              <form onSubmit={handleBetaSignup} className="beta-form">
                <input
                  type="email"
                  value={betaEmail}
                  onChange={(e) => setBetaEmail(e.target.value)}
                  placeholder="Enter your email for beta access"
                  required
                  className="beta-input"
                />
                <button type="submit" className="beta-btn">
                  Join Beta Testing Group
                </button>
              </form>
            ) : (
              <div className="beta-success">
                <div className="success-icon">✓</div>
                <p>Thank you! You're on the beta list. We'll notify you when early access is available.</p>
              </div>
            )}

            <div className="beta-note">Limited spots available • Be among the first 500 couples</div>
          </div>
        </div>
      </div>

      <div className="pricing-preview">
        <div className="container">
          <h2>Pricing Preview</h2>
          <p>Here's what our pricing will look like when we launch:</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="coming-soon-overlay">
                <div className="overlay-content">
                  <div className="coming-soon-badge">Coming Soon</div>
                </div>
              </div>
              <h3>Free Trial</h3>
              <div className="price">
                $0<span>/month</span>
              </div>
              <ul>
                <li>Basic relationship insights</li>
                <li>Weekly check-ins</li>
                <li>Community access</li>
              </ul>
            </div>

            <div className="pricing-card featured">
              <div className="coming-soon-overlay">
                <div className="overlay-content">
                  <div className="coming-soon-badge">Coming Soon</div>
                </div>
              </div>
              <div className="popular-badge">Most Popular</div>
              <h3>Reflection Mode</h3>
              <div className="price">
                $9.99<span>/month</span>
              </div>
              <ul>
                <li>AI-powered relationship coaching</li>
                <li>Personalized insights</li>
                <li>Daily reflection prompts</li>
                <li>Progress tracking</li>
              </ul>
            </div>

            <div className="pricing-card">
              <div className="coming-soon-overlay">
                <div className="overlay-content">
                  <div className="coming-soon-badge">Coming Soon</div>
                </div>
              </div>
              <h3>Premium</h3>
              <div className="price">
                $19.99<span>/month</span>
              </div>
              <ul>
                <li>Everything in Reflection Mode</li>
                <li>Advanced AI analysis</li>
                <li>Couples exercises</li>
                <li>Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <h3>Ready to Transform Your Relationship?</h3>
          <p>Join the revolution in couples coaching with AI that understands, adapts, and empowers lasting love.</p>
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

        .hero {
          text-align: center;
          padding: 6rem 2rem 4rem;
          position: relative;
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

        .subtitle {
          font-size: 1.2rem;
          color: #8d6e63;
          max-width: 800px;
          margin: 0 auto;
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

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .coming-soon-section {
          padding: 4rem 0;
          background: rgba(255, 255, 255, 0.9);
        }

        .coming-soon-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 25px;
          padding: 3rem;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border: 3px solid #ff7043;
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .beta-stamp {
          position: absolute;
          top: -15px;
          right: -15px;
          background: #ff5722;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
          transform: rotate(15deg);
          box-shadow: 0 4px 12px rgba(255, 87, 34, 0.3);
        }

        .coming-soon-card h2 {
          font-size: 2.5rem;
          color: #d84315;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .coming-soon-card p {
          font-size: 1.2rem;
          color: #5d4037;
          margin-bottom: 2rem;
          line-height: 1.6;
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
          font-family: 'Georgia', serif;
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
          font-family: 'Georgia', serif;
        }

        .beta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 112, 67, 0.3);
        }

        .beta-success {
          background: #d4edda;
          color: #155724;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .success-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .beta-note {
          font-size: 0.9rem;
          color: #8d6e63;
          font-style: italic;
        }

        .pricing-preview {
          padding: 4rem 0;
          background: linear-gradient(135deg, #fff8e7 0%, #ffe4b5 50%, #ffb347 100%);
        }

        .pricing-preview h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #d84315;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .pricing-preview > .container > p {
          text-align: center;
          font-size: 1.2rem;
          color: #8d6e63;
          margin-bottom: 3rem;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pricing-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 2px solid #ff7043;
          position: relative;
          overflow: hidden;
        }

        .pricing-card.featured {
          border-color: #ff5722;
          transform: scale(1.05);
        }

        .popular-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #ff7043, #ff5722);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .coming-soon-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .coming-soon-badge {
          background: #ff5722;
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(255, 87, 34, 0.3);
          transform: rotate(-5deg);
        }

        .pricing-card h3 {
          font-size: 1.5rem;
          color: #d84315;
          margin-bottom: 1rem;
          font-weight: 400;
        }

        .price {
          font-size: 2.5rem;
          font-weight: bold;
          color: #d84315;
          margin-bottom: 1.5rem;
        }

        .price span {
          font-size: 1rem;
          color: #8d6e63;
          font-weight: normal;
        }

        .pricing-card ul {
          list-style: none;
          text-align: left;
        }

        .pricing-card li {
          padding: 0.5rem 0;
          color: #5d4037;
          position: relative;
          padding-left: 1.5rem;
        }

        .pricing-card li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #ff7043;
          font-weight: bold;
        }

        .footer {
          background: rgba(255, 255, 255, 0.9);
          padding: 3rem 0 2rem;
          text-align: center;
        }

        .footer-content h3 {
          font-size: 2rem;
          color: #d84315;
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .footer-content p {
          font-size: 1.1rem;
          color: #8d6e63;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .tagline {
            font-size: 1.3rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .coming-soon-card {
            padding: 2rem;
            margin: 0 1rem;
          }
          
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .pricing-card.featured {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}
