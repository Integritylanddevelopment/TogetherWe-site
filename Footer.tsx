"use client"

export default function Footer() {
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
