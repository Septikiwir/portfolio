import Link from "next/link";
import ScrollFadeIn from "./ScrollFadeIn";

export default function Footer() {
  return (
    <footer className="footer-new" id="contact">
      <div className="section-inner footer-new-container">
        <ScrollFadeIn>
          <div className="fn-label">contact</div>
        </ScrollFadeIn>

        <div className="fn-main">
          <ScrollFadeIn>
            <h2 className="fn-h1">workwithyutaya</h2>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="fn-email-wrap">
              <div className="fn-at-pill">@</div>
              <div className="fn-email-text">
                gmail<span className="fn-dot-com">.com</span>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn className="fn-action-container">
          <div className="fn-action-inner">
            <a
              href="https://drive.google.com/drive/folders/1RHekcCkKzsaX-Sq6Tm4QhhG_qInyeaF_?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="fn-talk-btn"
            >
              Explore My Portfolio
            </a>
          </div>
        </ScrollFadeIn>

        <div className="footer-bottom-new">
          <div className="footer-copy">
            © 2026 Wahyu Septa Pramudya. All rights reserved.
          </div>
          <div className="footer-links">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
