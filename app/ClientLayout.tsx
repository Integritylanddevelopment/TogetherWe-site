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

        {/* Modal backdrop and popup */}
        <div className="tw-modal-backdrop" id="tw-backdrop" aria-hidden="true"></div>
        <div className="tw-modal" id="tw-modal" role="dialog" aria-modal="true" aria-labelledby="tw-modal-title">
          <header>
            <h3 id="tw-modal-title">Title</h3>
            <button className="tw-close" id="tw-close" aria-label="Close dialog">Close</button>
          </header>
          <div className="tw-content" id="tw-modal-content">
            {/* content injected by JS */}
          </div>
        </div>

        {/* Cookie Banner */}
        <div id="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie notice">
          <div className="cb-wrap">
            <p>We use cookies to operate and improve this site. See our <a href="/cookies">Cookie Policy</a>.</p>
            <div className="cb-actions">
              <button className="btn-accept" id="cookie-accept">Accept</button>
              <a className="btn-link" href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* TogetherWe Footer */}
        <footer id="site-footer" role="contentinfo" aria-label="Website footer">
          <div className="wrap">
            {/* Disclaimer at top of footer */}
            <div className="footer-disclaimer">
              TogetherWe offers AI-powered relationship coaching, not a substitute for Licensed therapy
            </div>
            
            {/* Crisis disclaimer right below main disclaimer */}
            <div className="crisis-disclaimer" role="note" aria-live="polite">
              If you are in crisis, do not use this website. Call <strong>988</strong> or <strong>911</strong>.
            </div>
            
            <div className="grid" aria-label="Footer navigation">
              {/* Column: Company */}
              <div>
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="/about" aria-label="About Us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/faq" aria-label="Frequently Asked Questions">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/investors" aria-label="Investors">
                      Investors
                    </a>
                  </li>
                  <li>
                    <a href="/accessibility" aria-label="Accessibility">
                      Accessibility
                    </a>
                  </li>
                  <li>
                    <a href="/contact" aria-label="Contact">
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="social" aria-label="Social media">
                  <a href="#" data-url="#" aria-label="Facebook" title="Facebook" rel="noopener">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22c4.78-.8 8.44-4.94 8.44-9.94z" />
                    </svg>
                  </a>
                  <a href="#" data-url="#" aria-label="Instagram" title="Instagram" rel="noopener">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm7-1.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                    </svg>
                  </a>
                  <a href="#" data-url="#" aria-label="TikTok" title="TikTok" rel="noopener">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.5 3h2.1c.3 2.2 1.6 3.6 3.9 3.9v2.1c-1.5.1-2.8-.4-4-1.2v6.5c0 3.2-2.2 5.7-5.4 6-3.6.3-6.6-2.8-6.2-6.4.3-3.1 2.9-5.2 6-5.2.6 0 1.2.1 1.6.2v2.3c-.5-.2-1-.3-1.6-.3-2 0-3.6 1.6-3.6 3.6s1.8 3.7 3.9 3.3c1.6-.3 2.5-1.6 2.5-3.2V3z" />
                    </svg>
                  </a>
                  <a href="#" data-url="#" aria-label="Twitter" title="Twitter/X" rel="noopener">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M16.98 3H20l-6.99 8.01L20.5 21h-3.54l-5.6-6.7-5.64 6.7H2.2l7.44-8.85L3.02 3h3.6l5.04 6.05L16.98 3z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column: Legal */}
              <div>
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="/privacy" aria-label="Privacy Policy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" aria-label="Terms of Use">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="/disclaimer" aria-label="Disclaimer">
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a href="/cookies" aria-label="Cookie Policy">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-choices" aria-label="Privacy Choices">
                      Privacy Choices
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column: Contact */}
              <div>
                <h4>Contact</h4>
                <ul>
                  <li>
                    <a href="mailto:support@TogetherWe.app">support@TogetherWe.app</a>
                  </li>
                  <li>
                    <address>
                      <span>3225 Mcleod Drive, Suite 100</span>
                      <br />
                      <span>Las Vegas, NV 89121</span>
                    </address>
                  </li>
                </ul>
              </div>
            </div>

            <div className="legal" aria-label="Legal lines">
              <div className="split">
                <span id="copyright-line">
                  © <span id="year">2025</span> TogetherWe Media Group LLC. All rights reserved.
                </span>
              </div>
              <div className="split">
                <span>togetherwe.com is operated by Together We Media Group LLC.</span>
              </div>
            </div>
          </div>

          <style jsx>{`
            #site-footer { 
              background:#0f1115; 
              color:#e6e6e6; 
              font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif; 
              margin-top: 4rem;
            }
            #site-footer a { color:#cfd6ff; text-decoration:none; }
            #site-footer a:hover, #site-footer a:focus { text-decoration:underline; }
            #site-footer .wrap { max-width:1200px; margin:0 auto; padding:32px 16px; }
            #site-footer .footer-disclaimer { 
              background:#fff3e0; 
              border:2px solid #ff7043; 
              border-radius:12px; 
              padding:1rem 2rem; 
              color:#d84315; 
              font-size:1.1rem; 
              font-weight:500; 
              text-align:center;
              margin-bottom:1rem;
              font-family: 'Georgia', serif;
              box-shadow: 0 4px 16px rgba(255,112,67,0.08);
            }
            #site-footer .crisis-disclaimer { 
              background:#ffe6e6; 
              border:2px solid #ff4444; 
              border-radius:12px; 
              padding:1rem 2rem; 
              color:#cc0000; 
              font-size:1.1rem; 
              font-weight:600; 
              text-align:center;
              margin-bottom:2rem;
              font-family: 'Georgia', serif;
              box-shadow: 0 4px 16px rgba(255,68,68,0.1);
            }
            #site-footer .grid { display:grid; grid-template-columns: 1.1fr .9fr .9fr; gap:24px; }
            #site-footer h4 { margin:0 0 12px; font-size:14px; color:#9aa4b2; text-transform:uppercase; letter-spacing:.04em; }
            #site-footer ul { list-style:none; padding:0; margin:0; }
            #site-footer li { margin:8px 0; }
            #site-footer .legal { border-top:1px solid #1b1f2a; margin-top:24px; padding-top:16px; font-size:13px; color:#b7bec9; display:flex; flex-wrap:wrap; gap:12px; align-items:center; justify-content:space-between; }
            #site-footer .legal .split { display:flex; gap:16px; flex-wrap:wrap; align-items:center; }
            #site-footer address { font-style:normal; color:#cbd3df; }
            #site-footer .disclaimer { font-size:13px; color:#ff4444; background:#121520; border:1px solid #1b1f2a; border-radius:8px; padding:12px 14px; margin:16px 0; font-weight:500; }
            #site-footer .social { display:flex; gap:12px; }
            #site-footer .social a { width:36px; height:36px; display:inline-flex; align-items:center; justify-content:center; background:#141824; border:1px solid #1b1f2a; border-radius:8px; }
            #site-footer .social a:hover { background:#1a1f2f; }
            #site-footer svg { width:18px; height:18px; fill:#cfd6ff; }
            
            /* Modal Popups with Orange Theme */
            .tw-modal-backdrop {
              position: fixed; inset: 0; background: rgba(0,0,0,.6);
              display:none; z-index: 10000;
            }
            .tw-modal {
              position: fixed; inset: 5% 50% auto 50%;
              transform: translateX(-50%); max-width: 860px; width: calc(100% - 24px);
              background: #fff8e7; color: #5d4037;
              border: 3px solid #ff7043; border-radius: 20px;
              box-shadow: 0 15px 40px rgba(255,112,67,0.3); display:none; z-index: 10001;
              font-family: 'Georgia', serif;
            }
            .tw-modal header {
              padding: 14px 16px; border-bottom: 2px solid #ff7043; background:#fff3e0;
              display:flex; align-items:center; justify-content:space-between;
              border-radius: 17px 17px 0 0;
            }
            .tw-modal h3 { margin:0; font-size: 20px; color:#d84315; font-weight: 600; }
            .tw-modal .tw-close {
              background: #ff7043; border:2px solid #ff5722; color:white;
              border-radius:10px; padding:8px 12px; cursor:pointer; font-size:14px;
              font-weight: 500; transition: all 0.3s ease;
            }
            .tw-modal .tw-close:hover {
              background: #ff5722; transform: translateY(-1px);
            }
            .tw-modal .tw-content {
              max-height: 70vh; overflow:auto; padding: 20px;
            }
            .tw-modal .tw-content h4 { margin: 18px 0 8px; color:#d84315; font-size:18px; font-weight: 600; }
            .tw-modal .tw-content p, .tw-modal .tw-content li { line-height:1.6; color:#5d4037; margin-bottom: 10px; }
            .tw-modal .tw-content small { color:#8d6e63; }
            .tw-modal .tw-content ul { padding-left: 20px; }
            .tw-modal .tw-content ul li { list-style: disc; }
            .tw-modal .muted { color:#8d6e63; }
            .tw-modal a { color:#ff7043; text-decoration: underline; }
            .tw-modal a:hover { color:#ff5722; }
            
            /* Cookie Banner with Orange Theme */
            #cookie-banner { 
              position:fixed; inset:auto 0 0 0; background:#fff3e0; color:#5d4037; 
              border-top:3px solid #ff7043; padding:12px 16px; display:none; z-index:9999;
              font-family: 'Georgia', serif; box-shadow: 0 -5px 20px rgba(255,112,67,0.2);
            }
            #cookie-banner .cb-wrap { 
              max-width:1200px; margin:0 auto; display:flex; gap:12px; 
              align-items:center; justify-content:space-between; 
            }
            #cookie-banner p { margin:0; font-size:14px; color:#5d4037; }
            #cookie-banner .cb-actions { display:flex; gap:10px; }
            .btn-accept { 
              background:#ff7043; color:#fff; border:0; padding:10px 16px; 
              border-radius:8px; cursor:pointer; font-size:14px; font-weight: 500;
              transition: all 0.3s ease; font-family: 'Georgia', serif;
            }
            .btn-accept:hover { background:#ff5722; transform: translateY(-1px); }
            .btn-link { 
              background:transparent; border:0; padding:0; font-size:14px; 
              color:#ff7043; text-decoration:underline; cursor:pointer; font-family: 'Georgia', serif;
            }
            .btn-link:hover { color:#ff5722; }
            
            @media (max-width: 880px) {
              #site-footer .grid { grid-template-columns: 1fr 1fr; }
            }
            @media (max-width: 720px) {
              .tw-modal { inset: 4% 12px auto 12px; transform:none; }
              #cookie-banner .cb-wrap { flex-direction:column; align-items:flex-start; gap:8px; }
            }
            @media (max-width: 640px) {
              #site-footer .grid { grid-template-columns: 1fr; }
              #site-footer .legal { flex-direction:column; align-items:flex-start; gap:8px; }
              #site-footer .footer-disclaimer { 
                font-size:1rem; 
                padding:0.8rem 1.5rem; 
              }
              #site-footer .crisis-disclaimer { 
                font-size:1rem; 
                padding:0.8rem 1.5rem; 
              }
            }
          `}</style>

        <script dangerouslySetInnerHTML={{
          __html: `
            // Auto year update
            document.addEventListener('DOMContentLoaded', function() {
              const yearEl = document.getElementById('year');
              if (yearEl) {
                yearEl.textContent = new Date().getFullYear();
              }

              // Legal content for popups
              const TW_PAGES = {
                "/privacy": {
                  title: "Privacy Policy",
                  html: \`
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

                    <p class="muted"><small>Summary: limited data to operate our coaching platform; no sale of personal data; industry-standard safeguards; rights honored per applicable laws.</small></p>
                  \`
                },
                "/terms": {
                  title: "Terms of Use",
                  html: \`
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

                    <h4>7. IP</h4>
                    <p>All content/software are property of Together We Media Group LLC. Limited, personal, non-transferable license to use the platform.</p>

                    <h4>8. Data & Privacy</h4>
                    <p>See our <a href="/privacy">Privacy Policy</a> for collection and use details.</p>

                    <h4>9. Age</h4>
                    <p>Must be 18+ or age of majority.</p>

                    <h4>10. Indemnification</h4>
                    <p>You agree to indemnify us for claims arising from your use or violation of these Terms.</p>

                    <h4>11. Modifications</h4>
                    <p>We may update features and these Terms; continued use means acceptance.</p>

                    <h4>12. Governing Law</h4>
                    <p>Governed by the laws of [Insert State/Country]; disputes in [Insert Jurisdiction].</p>

                    <p class="muted"><small>By using TogetherWe, you acknowledge you've read and agree to these Terms.</small></p>
                  \`
                },
                "/disclaimer": {
                  title: "Legal Disclaimer",
                  html: \`
                    <p><strong>TogetherWe is an AI-powered couples coaching and support platform.</strong> It does not provide therapy, counseling, medical advice, diagnosis, or treatment. No licensed therapist or clinician monitors the system.</p>

                    <ul>
                      <li><strong>AI-Based Support:</strong> Content is informational/educational, not professional advice.</li>
                      <li><strong>No Guarantees:</strong> Results vary; no outcome is promised; examples are illustrative.</li>
                      <li><strong>Not a Substitute:</strong> Not a replacement for therapy, medical care, or crisis services.</li>
                      <li><strong>Crisis:</strong> In emergencies call <strong>911</strong>; in the U.S. dial/text <strong>988</strong> for the Suicide & Crisis Lifeline.</li>
                      <li><strong>Use at Your Own Risk:</strong> You are responsible for your choices and outcomes; we aren't liable for reliance on AI-generated content.</li>
                    </ul>
                  \`
                },
                "/cookies": {
                  title: "Cookie Policy",
                  html: \`
                    <p>We use cookies and similar technologies to operate, secure, and improve the site.</p>

                    <h4>What We Use</h4>
                    <ul>
                      <li><strong>Essential:</strong> Required for login, preferences, session stability.</li>
                      <li><strong>Analytics:</strong> Understand usage to improve features (aggregate metrics).</li>
                      <li><strong>Performance/Security:</strong> Load balancing, fraud prevention.</li>
                    </ul>

                    <h4>Your Choices</h4>
                    <ul>
                      <li>Browser controls to block or delete cookies (functionality may be limited).</li>
                      <li>Manage consent in the cookie banner when presented.</li>
                    </ul>

                    <p>For details on personal data, see our <a href="/privacy">Privacy Policy</a>.</p>
                  \`
                },
                "/accessibility": {
                  title: "Accessibility Statement",
                  html: \`
                    <p>TogetherWe is committed to digital accessibility and strives to meet <strong>WCAG 2.1 AA</strong> guidelines.</p>

                    <h4>Measures We Take</h4>
                    <ul>
                      <li>Semantic HTML, ARIA where needed, keyboard navigation</li>
                      <li>Color contrast checks and scalable text</li>
                      <li>Continuous testing and issue remediation</li>
                    </ul>

                    <h4>Feedback</h4>
                    <p>If you encounter accessibility barriers, email <a href="mailto:support@TogetherWe.app">support@TogetherWe.app</a> with a description, page URL, and your browser/device.</p>
                  \`
                },
                "/privacy-choices": {
                  title: "Privacy Choices",
                  html: \`
                    <p>Depending on your jurisdiction (e.g., GDPR/CCPA/CPRA), you may have rights to:</p>
                    <ul>
                      <li>Access or delete personal data</li>
                      <li>Correct inaccuracies</li>
                      <li>Data portability</li>
                      <li>Opt out of certain processing or marketing</li>
                    </ul>

                    <h4>How to Exercise Your Rights</h4>
                    <ul>
                      <li>Email <a href="mailto:privacy@togetherwelove.app">privacy@togetherwelove.app</a> with your request.</li>
                      <li>Include the email linked to your account; we may require verification.</li>
                    </ul>

                    <p>We do not sell personal information. For details, see our <a href="/privacy">Privacy Policy</a>.</p>
                  \`
                },
                "/about": {
                  title: "About Us",
                  html: \`
                    <p><strong>TogetherWe</strong> is an AI-powered couples coaching and support platform. We help partners build clarity, communicate better, and notice patterns earlier with structured, privacy-conscious tools.</p>

                    <h4>Company</h4>
                    <p>TogetherWe Media Group LLC<br>3225 Mcleod Drive, Suite 100<br>Las Vegas, NV 89121</p>

                    <h4>Contact</h4>
                    <p><a href="mailto:support@TogetherWe.app">support@TogetherWe.app</a></p>
                  \`
                },
                "/faq": {
                  title: "FAQ",
                  html: \`
                    <h4>What is TogetherWe?</h4>
                    <p>An AI coaching and support platform for couples. Not therapy or medical care.</p>

                    <h4>Is a human professional reviewing my inputs?</h4>
                    <p>No. Interactions are AI-generated; no clinician monitors your use.</p>

                    <h4>Can TogetherWe replace therapy?</h4>
                    <p>No. It complements professional care but is not a substitute.</p>

                    <h4>Do you guarantee results?</h4>
                    <p>No. Results vary by individual use and circumstances.</p>

                    <h4>How is my data handled?</h4>
                    <p>See our <a href="/privacy">Privacy Policy</a>. We don't sell personal data.</p>

                    <h4>What if I'm in crisis?</h4>
                    <p>Call <strong>911</strong>. In the U.S., dial/text <strong>988</strong> for the Suicide & Crisis Lifeline.</p>
                  \`
                },
                "/investors": {
                  title: "Investors",
                  html: \`
                    <p>For investor inquiries, media kits, and deck access, contact <a href="mailto:support@TogetherWe.app">support@TogetherWe.app</a>.</p>
                    <p>Company: TogetherWe Media Group LLC &middot; 3225 Mcleod Drive, Suite 100, Las Vegas, NV 89121</p>
                    <p class="muted"><small>Note: materials may be provided under NDA. This is not an offer to sell securities.</small></p>
                  \`
                },
                "/contact": {
                  title: "Contact",
                  html: \`
                    <p>Email us at <a href="mailto:support@TogetherWe.app">support@TogetherWe.app</a> or write to:</p>
                    <p>TogetherWe Media Group LLC<br>3225 Mcleod Drive, Suite 100<br>Las Vegas, NV 89121</p>
                  \`
                }
              };

              // Setup modal functionality
              const backdrop = document.getElementById('tw-backdrop');
              const modal = document.getElementById('tw-modal');
              const title = document.getElementById('tw-modal-title');
              const content = document.getElementById('tw-modal-content');
              const closeBtn = document.getElementById('tw-close');

              function openModal(path) {
                const page = TW_PAGES[path];
                if (!page) return false;
                title.textContent = page.title;
                content.innerHTML = page.html;
                backdrop.style.display = 'block';
                modal.style.display = 'block';
                modal.focus();
                return true;
              }

              function closeModal() {
                modal.style.display = 'none';
                backdrop.style.display = 'none';
              }

              if (backdrop) backdrop.addEventListener('click', closeModal);
              if (closeBtn) closeBtn.addEventListener('click', closeModal);
              
              document.addEventListener('keydown', e => {
                if (e.key === 'Escape') closeModal();
              });

              // Intercept footer link clicks
              const footer = document.getElementById('site-footer');
              if (footer) {
                footer.addEventListener('click', e => {
                  const a = e.target.closest('a');
                  if (!a) return;
                  const href = a.getAttribute('href');
                  if (href && TW_PAGES[href]) {
                    e.preventDefault();
                    openModal(href);
                  }
                });
              }

              // Social popup behavior
              function openPopup(url, name) {
                const w = 600, h = 700;
                const y = window.top.outerHeight / 2 + window.top.screenY - (h / 2);
                const x = window.top.outerWidth / 2 + window.top.screenX - (w / 2);
                window.open(url, name || 'ext', \`toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,width=\${w},height=\${h},top=\${y},left=\${x}\`);
              }

              document.querySelectorAll('#site-footer .social a').forEach(a => {
                a.addEventListener('click', e => {
                  const url = a.getAttribute('data-url');
                  if (url && url !== '#') {
                    e.preventDefault();
                    openPopup(url, 'social');
                  } else if (a.getAttribute('href') === '#') {
                    e.preventDefault();
                  }
                });
                a.setAttribute('target', '_blank');
                a.setAttribute('rel', 'noopener');
              });

              // Cookie banner functionality
              const COOKIE_KEY = 'tw_cookie_consent_v1';
              const banner = document.getElementById('cookie-banner');
              const acceptBtn = document.getElementById('cookie-accept');
              
              try {
                if (!localStorage.getItem(COOKIE_KEY) && banner) {
                  banner.style.display = 'block';
                }
                if (acceptBtn) {
                  acceptBtn.addEventListener('click', () => {
                    localStorage.setItem(COOKIE_KEY, 'accepted');
                    if (banner) banner.style.display = 'none';
                  });
                }
              } catch(e) {
                if (acceptBtn && banner) {
                  acceptBtn.addEventListener('click', () => banner.style.display = 'none');
                  banner.style.display = 'block';
                }
              }
            });
          `
        }} />
        </footer>
      </body>
    </html>
  )
}
