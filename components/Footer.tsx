"use client"

import { useEffect } from 'react'

export default function Footer() {
  useEffect(() => {
    // Modal content data
    const TW_PAGES = {
      "/privacy": {
        title: "Privacy Policy",
        html: `
          <p><strong>Effective Date:</strong> [Insert Date]</p>
          <p>TogetherWe ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered couples coaching and support platform.</p>

          <h4>1. Information We Collect</h4>
          <ul>
            <li><strong>Personal Information You Provide:</strong> name, email, login, subscription/billing, optional profile details.</li>
            <li><strong>Content You Input:</strong> text you type, AI responses, interaction data.</li>
            <li><strong>Technical Data:</strong> device/browser, IP, logs, cookies or similar tech.</li>
          </ul>

          <h4>2. How We Use Information</h4>
          <ul>
            <li>Provide, personalize, and improve the platform</li>
            <li>Security, performance, payments, support, and admin notices</li>
            <li>Generate anonymized insights to improve coaching models</li>
          </ul>

          <h4>3. Sharing & Disclosure</h4>
          <p>We <strong>do not sell</strong> your personal data. We may share with service providers (payments, hosting, analytics), for legal compliance, business transfers, or in an <strong>aggregated/de-identified</strong> form.</p>

          <h4>4. Security</h4>
          <p>Encryption in transit (TLS/HTTPS) and at rest where appropriate; access restricted to authorized staff. No system is 100% secure.</p>

          <h4>5. Retention & Deletion</h4>
          <p>We retain data as needed for services and legal obligations. Request deletion at <a href="mailto:privacy@togetherwelove.app">privacy@togetherwelove.app</a>.</p>

          <h4>6. Your Rights</h4>
          <p>Depending on jurisdiction: access, correction, deletion, portability, opt-out of marketing, restrict/object to processing. Contact us to exercise your rights.</p>

          <h4>7. Children</h4>
          <p>Not for users under 18. If we learn of under-18 data, we delete it.</p>

          <h4>8. International Use</h4>
          <p>Data may be processed in the U.S. or other locations where we and our providers operate.</p>

          <h4>9. Third-Party Links</h4>
          <p>We aren't responsible for external sites' practices.</p>

          <h4>10. Updates</h4>
          <p>We may update this Policy; continued use = acceptance.</p>

          <h4>11. Contact</h4>
          <p>Email: <a href="mailto:privacy@togetherwelove.app">privacy@togetherwelove.app</a></p>

          <p style="color: #666; font-style: italic;"><small>Summary: limited data to operate our coaching platform; no sale of personal data; industry-standard safeguards; rights honored per applicable laws.</small></p>
        `
      },
      "/terms": {
        title: "Terms of Use",
        html: `
          <p><strong>Effective Date:</strong> [Insert Date]</p>
          <h4>1. Nature of Services</h4>
          <p>TogetherWe provides <strong>AI-powered couples coaching and support tools</strong>. Not therapy, counseling, medical advice, diagnosis, or treatment. No licensed professional is monitoring your use.</p>

          <h4>2. No Professional-Client Relationship</h4>
          <p>Use does not create a therapist-client, counselor-client, or doctor-patient relationship.</p>

          <h4>3. Not for Emergencies</h4>
          <p>Do not use for crisis needs. Call <strong>911</strong> or in the U.S. dial/text <strong>988</strong> for the Suicide & Crisis Lifeline.</p>

          <h4>4. User Responsibilities</h4>
          <ul>
            <li>Use lawfully for personal growth.</li>
            <li>Recognize suggestions are generalized and may not fit your circumstances.</li>
            <li>Results depend on your engagement and outside factors.</li>
            <li>No scraping, resale, reverse engineering, or abuse.</li>
          </ul>

          <h4>5. No Guarantees</h4>
          <p>Outcomes vary; examples are illustrative only.</p>

          <h4>6. Limitation of Liability</h4>
          <p>Service is provided "as is/as available." We are not liable for direct/indirect/incidental/consequential damages to the fullest extent allowed by law.</p>

          <h4>7. Contact</h4>
          <p>Email: <a href="mailto:support@TogetherWe.app">support@TogetherWe.app</a></p>
        `
      },
      "/disclaimer": {
        title: "Disclaimer",
        html: `
          <p><strong>Effective Date:</strong> [Insert Date]</p>
          <h4>General Disclaimer</h4>
          <p>TogetherWe is an AI-powered couples coaching and support platform. It is <strong>not therapy, counseling, medical advice, diagnosis, or treatment</strong>. No licensed professional is monitoring your use.</p>
          
          <h4>No Professional Relationship</h4>
          <p>Use of TogetherWe does not create a therapist-client, counselor-client, or doctor-patient relationship.</p>
          
          <h4>Emergency Situations</h4>
          <p>TogetherWe is <strong>not for crisis or emergency situations</strong>. If you are in crisis, call <strong>911</strong> or in the U.S. dial/text <strong>988</strong> for the Suicide & Crisis Lifeline.</p>
          
          <h4>Limitation of Liability</h4>
          <p>TogetherWe is provided "as is" without warranties. We are not liable for any direct, indirect, incidental, or consequential damages arising from use of the service.</p>
          
          <h4>Professional Care</h4>
          <p>For serious relationship issues, mental health concerns, or crisis situations, please consult with qualified professionals.</p>
        `
      },
      "/cookies": {
        title: "Cookie Policy",
        html: `
          <p><strong>Effective Date:</strong> [Insert Date]</p>
          <h4>What are Cookies?</h4>
          <p>Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services.</p>
          
          <h4>How We Use Cookies</h4>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>
          
          <h4>Managing Cookies</h4>
          <p>You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
          
          <h4>Third-Party Cookies</h4>
          <p>We may use third-party services (analytics, advertising) that set their own cookies. Please review their privacy policies.</p>
        `
      }
    };

    // Create modal elements if they don't exist
    let backdrop = document.getElementById('tw-modal-backdrop');
    let modal = document.getElementById('tw-modal');
    
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'tw-modal-backdrop';
      backdrop.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: rgba(0, 0, 0, 0.6) !important;
        display: none !important;
        z-index: 10000 !important;
      `;
      document.body.appendChild(backdrop);
    }

    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'tw-modal';
      modal.innerHTML = `
        <div style="
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          max-width: 860px !important;
          width: calc(100% - 48px) !important;
          background: #fff8e7 !important;
          color: #5d4037 !important;
          border: 3px solid #ff7043 !important;
          border-radius: 20px !important;
          box-shadow: 0 15px 40px rgba(255,112,67,0.3) !important;
          z-index: 10001 !important;
          font-family: Georgia, serif !important;
          max-height: 80vh !important;
          overflow: hidden !important;
        ">
          <div style="
            padding: 14px 16px !important;
            border-bottom: 2px solid #ff7043 !important;
            background: #fff3e0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            border-radius: 17px 17px 0 0 !important;
          ">
            <h3 id="tw-modal-title" style="margin: 0 !important; font-size: 20px !important; color: #d84315 !important; font-weight: 600 !important;">Title</h3>
            <button id="tw-modal-close" style="
              background: #ff7043 !important;
              border: 2px solid #ff5722 !important;
              color: white !important;
              border-radius: 10px !important;
              padding: 8px 12px !important;
              cursor: pointer !important;
              font-size: 14px !important;
              font-weight: 500 !important;
              transition: all 0.3s ease !important;
            ">Close</button>
          </div>
          <div id="tw-modal-content" style="
            max-height: 70vh !important;
            overflow: auto !important;
            padding: 20px !important;
            line-height: 1.6 !important;
          ">
            Content
          </div>
        </div>
      `;
      modal.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        display: none !important;
        z-index: 10001 !important;
      `;
      document.body.appendChild(modal);
    }

    // Modal functions
    function openModal(path: string) {
      const page = TW_PAGES[path as keyof typeof TW_PAGES];
      if (!page) return false;
      
      const title = document.getElementById('tw-modal-title');
      const content = document.getElementById('tw-modal-content');
      
      if (title) title.textContent = page.title;
      if (content) content.innerHTML = page.html;
      
      if (backdrop) backdrop.style.display = 'block';
      if (modal) modal.style.display = 'block';
      
      return true;
    }

    function closeModal() {
      if (backdrop) backdrop.style.display = 'none';
      if (modal) modal.style.display = 'none';
    }

    // Event listeners
    const closeBtn = document.getElementById('tw-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Footer link click handler
    const footer = document.getElementById('site-footer');
    if (footer) {
      footer.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target?.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (href && TW_PAGES[href as keyof typeof TW_PAGES]) {
          e.preventDefault();
          openModal(href);
        }
      });
    }

    // Cleanup function
    return () => {
      if (backdrop && backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
      if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    };
  }, []);

  return (
    <footer id="site-footer" role="contentinfo" aria-label="Website footer">
      <style jsx>{`
        #site-footer { 
          background: #0f1115; 
          color: #e6e6e6; 
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif; 
        }
        #site-footer a { 
          color: #cfd6ff; 
          text-decoration: none; 
        }
        #site-footer a:hover, #site-footer a:focus { 
          text-decoration: underline; 
        }
        .wrap { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 32px 16px; 
        }
        .grid { 
          display: grid; 
          grid-template-columns: 1.1fr .9fr .9fr; 
          gap: 24px; 
        }
        .grid h4 { 
          margin: 0 0 12px; 
          font-size: 14px; 
          color: #9aa4b2; 
          text-transform: uppercase; 
          letter-spacing: .04em; 
        }
        .grid ul { 
          list-style: none; 
          padding: 0; 
          margin: 0; 
        }
        .grid li { 
          margin: 8px 0; 
        }
        .legal { 
          border-top: 1px solid #1b1f2a; 
          margin-top: 24px; 
          padding-top: 16px; 
          font-size: 13px; 
          color: #b7bec9; 
          display: flex; 
          flex-wrap: wrap; 
          gap: 12px; 
          align-items: center; 
          justify-content: space-between; 
        }
        .legal .split { 
          display: flex; 
          gap: 16px; 
          flex-wrap: wrap; 
          align-items: center; 
        }
        address { 
          font-style: normal; 
          color: #cbd3df; 
        }
        .disclaimer { 
          font-size: 13px; 
          color: #cbd3df; 
          background: #121520; 
          border: 1px solid #1b1f2a; 
          border-radius: 8px; 
          padding: 12px 14px; 
          margin: 16px 0; 
        }
        .social { 
          display: flex; 
          gap: 12px; 
        }
        .social a { 
          width: 36px; 
          height: 36px; 
          display: inline-flex; 
          align-items: center; 
          justify-content: center; 
          background: #141824; 
          border: 1px solid #1b1f2a; 
          border-radius: 8px; 
        }
        .social a:hover { 
          background: #1a1f2f; 
        }
        .social svg { 
          width: 18px; 
          height: 18px; 
          fill: #cfd6ff; 
        }
        @media (max-width: 880px) {
          .grid { 
            grid-template-columns: 1fr 1fr; 
          }
        }
        @media (max-width: 640px) {
          .grid { 
            grid-template-columns: 1fr; 
          }
          .legal { 
            flex-direction: column; 
            align-items: flex-start; 
            gap: 8px; 
          }
        }
      `}</style>

      <div className="wrap">
        <div className="grid">
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/investors">Investors</a>
              </li>
              <li>
                <a href="/accessibility">Accessibility</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <div className="disclaimer">
              ⚠️ TogetherWe offers AI-powered relationship coaching
              <br />
              <strong>not a substitute for Licensed therapy</strong>
            </div>

            <div className="social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm7-1.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Use</a>
              </li>
              <li>
                <a href="/disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/cookies">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:support@TogetherWe.app">support@TogetherWe.app</a>
              </li>
              <li>
                <address>
                  3225 Mcleod Drive, Suite 100
                  <br />
                  Las Vegas, NV 89121
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <div className="split">
            <span>© {new Date().getFullYear()} TogetherWe Media Group LLC. All rights reserved.</span>
          </div>
          <div className="split">
            <span>togetherwe.com is operated by Together We Media Group LLC.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
