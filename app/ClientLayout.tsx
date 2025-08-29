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

        {/* TogetherWe Footer */}
        <footer id="site-footer" role="contentinfo" aria-label="Website footer">
          <div className="wrap">
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

                <div className="disclaimer" role="note" aria-live="polite">
                  ⚠️ AI coaching, not therapy. For crisis call <strong>988</strong> or <strong>911</strong>.
                </div>

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
            #site-footer .grid { display:grid; grid-template-columns: 1.1fr .9fr .9fr; gap:24px; }
            #site-footer h4 { margin:0 0 12px; font-size:14px; color:#9aa4b2; text-transform:uppercase; letter-spacing:.04em; }
            #site-footer ul { list-style:none; padding:0; margin:0; }
            #site-footer li { margin:8px 0; }
            #site-footer .legal { border-top:1px solid #1b1f2a; margin-top:24px; padding-top:16px; font-size:13px; color:#b7bec9; display:flex; flex-wrap:wrap; gap:12px; align-items:center; justify-content:space-between; }
            #site-footer .legal .split { display:flex; gap:16px; flex-wrap:wrap; align-items:center; }
            #site-footer address { font-style:normal; color:#cbd3df; }
            #site-footer .disclaimer { font-size:13px; color:#cbd3df; background:#121520; border:1px solid #1b1f2a; border-radius:8px; padding:12px 14px; margin:16px 0; }
            #site-footer .social { display:flex; gap:12px; }
            #site-footer .social a { width:36px; height:36px; display:inline-flex; align-items:center; justify-content:center; background:#141824; border:1px solid #1b1f2a; border-radius:8px; }
            #site-footer .social a:hover { background:#1a1f2f; }
            #site-footer svg { width:18px; height:18px; fill:#cfd6ff; }
            @media (max-width: 880px) {
              #site-footer .grid { grid-template-columns: 1fr 1fr; }
            }
            @media (max-width: 640px) {
              #site-footer .grid { grid-template-columns: 1fr; }
              #site-footer .legal { flex-direction:column; align-items:flex-start; gap:8px; }
            }
          `}</style>
        </footer>
      </body>
    </html>
  )
}
