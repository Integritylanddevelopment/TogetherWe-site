"use client"

import type React from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}

        {/* Modal HTML */}
        <div id="modal-backdrop" style={{display: 'none'}}></div>
        <div id="modal" style={{display: 'none'}}>
          <div id="modal-content">
            <div id="modal-header">
              <h3 id="modal-title">Title</h3>
              <button id="modal-close">×</button>
            </div>
            <div id="modal-body">Content</div>
          </div>
        </div>

        {/* Footer */}
        <footer id="site-footer">
          <style jsx>{`
            /* Modal Styles */
            #modal-backdrop {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.6);
              z-index: 9999;
            }
            
            #modal {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 10000;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            #modal-content {
              background: #fff8e7;
              border: 3px solid #ff7043;
              border-radius: 20px;
              max-width: 600px;
              width: 90%;
              max-height: 80vh;
              overflow: hidden;
              box-shadow: 0 15px 40px rgba(255,112,67,0.3);
            }
            
            #modal-header {
              padding: 14px 16px;
              border-bottom: 2px solid #ff7043;
              background: #fff3e0;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            #modal-title {
              margin: 0;
              font-size: 20px;
              color: #d84315;
              font-weight: 600;
              font-family: Georgia, serif;
            }
            
            #modal-close {
              background: #ff7043;
              border: 2px solid #ff5722;
              color: white;
              border-radius: 10px;
              padding: 8px 12px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
            }
            
            #modal-close:hover {
              background: #ff5722;
            }
            
            #modal-body {
              padding: 20px;
              max-height: 60vh;
              overflow-y: auto;
              color: #5d4037;
              line-height: 1.6;
              font-family: Georgia, serif;
            }
            
            #modal-body h4 {
              color: #d84315;
              margin: 18px 0 8px;
              font-size: 18px;
              font-weight: 600;
            }
            
            #modal-body p {
              margin-bottom: 10px;
            }
            
            #modal-body ul {
              padding-left: 20px;
            }
            
            #modal-body li {
              margin-bottom: 5px;
            }
            
            #modal-body a {
              color: #ff7043;
              text-decoration: underline;
            }
            
            #modal-body a:hover {
              color: #ff5722;
            }

            /* Footer Styles */
            #site-footer {
              background: #0f1115;
              color: #e6e6e6;
              font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif;
              padding: 32px 16px;
            }
            
            #site-footer a {
              color: #cfd6ff;
              text-decoration: none;
            }
            
            #site-footer a:hover {
              text-decoration: underline;
            }
            
            .footer-wrap {
              max-width: 1200px;
              margin: 0 auto;
            }
            
            .footer-grid {
              display: grid;
              grid-template-columns: 1.1fr .9fr .9fr;
              gap: 24px;
              margin-bottom: 24px;
            }
            
            .footer-grid h4 {
              margin: 0 0 12px;
              font-size: 14px;
              color: #9aa4b2;
              text-transform: uppercase;
              letter-spacing: .04em;
            }
            
            .footer-grid ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            
            .footer-grid li {
              margin: 8px 0;
            }
            
            .footer-disclaimer {
              font-size: 13px;
              color: #ff4444;
              background: #121520;
              border: 1px solid #1b1f2a;
              border-radius: 8px;
              padding: 12px 14px;
              margin: 16px 0;
              font-weight: 500;
            }
            
            .footer-legal {
              border-top: 1px solid #1b1f2a;
              padding-top: 16px;
              font-size: 13px;
              color: #b7bec9;
              text-align: center;
            }
            
            @media (max-width: 880px) {
              .footer-grid {
                grid-template-columns: 1fr 1fr;
              }
            }
            
            @media (max-width: 640px) {
              .footer-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>

          <div className="footer-wrap">
            <div className="footer-grid">
              {/* Company Column */}
              <div>
                <h4>Company</h4>
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/investors">Investors</a></li>
                  <li><a href="/accessibility">Accessibility</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>

                <div className="footer-disclaimer">
                  ⚠️ TogetherWe offers AI-powered relationship coaching<br />
                  <strong>not a substitute for Licensed therapy</strong>
                </div>
              </div>

              {/* Legal Column */}
              <div>
                <h4>Legal</h4>
                <ul>
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/terms">Terms of Use</a></li>
                  <li><a href="/disclaimer">Disclaimer</a></li>
                  <li><a href="/cookies">Cookie Policy</a></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4>Contact</h4>
                <ul>
                  <li><a href="mailto:support@TogetherWe.app">support@TogetherWe.app</a></li>
                  <li>
                    3225 Mcleod Drive, Suite 100<br />
                    Las Vegas, NV 89121
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-legal">
              © 2025 TogetherWe Media Group LLC. All rights reserved.
            </div>
          </div>
        </footer>

        {/* Modal JavaScript */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const modalPages = {
                '/privacy': {
                  title: 'Privacy Policy',
                  content: '<p><strong>Effective Date:</strong> [Insert Date]</p><p>TogetherWe is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered couples coaching and support platform.</p><h4>1. Information We Collect</h4><ul><li><strong>Personal Information You Provide:</strong> name, email, login, subscription/billing, optional profile details.</li><li><strong>Content You Input:</strong> text you type, AI responses, interaction data.</li><li><strong>Technical Data:</strong> device/browser, IP, logs, cookies or similar tech.</li></ul><h4>2. How We Use Information</h4><ul><li>Provide, personalize, and improve the platform</li><li>Security, performance, payments, support, and admin notices</li><li>Generate anonymized insights to improve coaching models</li></ul><h4>3. Sharing & Disclosure</h4><p>We <strong>do not sell</strong> your personal data. We may share with service providers (payments, hosting, analytics), for legal compliance, business transfers, or in an <strong>aggregated/de-identified</strong> form.</p><h4>4. Contact</h4><p>Email: <a href="mailto:privacy@togetherwelove.app">privacy@togetherwelove.app</a></p>'
                },
                '/terms': {
                  title: 'Terms of Use',
                  content: '<p><strong>Effective Date:</strong> [Insert Date]</p><h4>1. Nature of Services</h4><p>TogetherWe provides <strong>AI-powered couples coaching and support tools</strong>. Not therapy, counseling, medical advice, diagnosis, or treatment. No licensed professional is monitoring your use.</p><h4>2. No Professional-Client Relationship</h4><p>Use does not create a therapist-client, counselor-client, or doctor-patient relationship.</p><h4>3. Not for Emergencies</h4><p>Do not use for crisis needs. Call <strong>911</strong> or in the U.S. dial/text <strong>988</strong> for the Suicide & Crisis Lifeline.</p><h4>4. Contact</h4><p>Email: <a href="mailto:support@TogetherWe.app">support@TogetherWe.app</a></p>'
                },
                '/disclaimer': {
                  title: 'Disclaimer',
                  content: '<p><strong>Effective Date:</strong> [Insert Date]</p><h4>General Disclaimer</h4><p>TogetherWe is an AI-powered couples coaching and support platform. It is <strong>not therapy, counseling, medical advice, diagnosis, or treatment</strong>. No licensed professional is monitoring your use.</p><h4>Emergency Situations</h4><p>TogetherWe is <strong>not for crisis or emergency situations</strong>. If you are in crisis, call <strong>911</strong> or in the U.S. dial/text <strong>988</strong> for the Suicide & Crisis Lifeline.</p>'
                },
                '/cookies': {
                  title: 'Cookie Policy',
                  content: '<p><strong>Effective Date:</strong> [Insert Date]</p><h4>What are Cookies?</h4><p>Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services.</p><h4>How We Use Cookies</h4><ul><li><strong>Essential Cookies:</strong> Required for basic website functionality</li><li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li><li><strong>Preference Cookies:</strong> Remember your settings and preferences</li></ul>'
                }
              };

              const backdrop = document.getElementById('modal-backdrop');
              const modal = document.getElementById('modal');
              const title = document.getElementById('modal-title');
              const body = document.getElementById('modal-body');
              const closeBtn = document.getElementById('modal-close');

              function openModal(path) {
                const page = modalPages[path];
                if (!page) return;
                
                title.textContent = page.title;
                body.innerHTML = page.content;
                backdrop.style.display = 'block';
                modal.style.display = 'flex';
              }

              function closeModal() {
                backdrop.style.display = 'none';
                modal.style.display = 'none';
              }

              // Close modal events
              closeBtn.addEventListener('click', closeModal);
              backdrop.addEventListener('click', closeModal);
              document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeModal();
              });

              // Footer click handler
              document.getElementById('site-footer').addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                  const href = e.target.getAttribute('href');
                  if (modalPages[href]) {
                    e.preventDefault();
                    openModal(href);
                  }
                }
              });
            });
          `
        }} />
      </body>
    </html>
  )
}