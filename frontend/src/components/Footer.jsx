import { Building } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4 className="footer-heading">ARCADIA</h4>
            <ul className="footer-list">
              <li>About</li>
              <li>Our Approach</li>
              <li>Partners</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">EVENTS</h4>
            <ul className="footer-list">
              <li>Upcoming Events</li>
              <li>Past Events</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">PARTNERSHIPS</h4>
            <ul className="footer-list">
              <li>Become a Partner</li>
              <li>Current Partners</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">RESOURCES</h4>
            <ul className="footer-list">
              <li>Knowledge Portal</li>
              <li>Case Studies</li>
              <li>Publications</li>
            </ul>
          </div>
        </div>

        <div className="footer-logo">
          <img src="/assets/logo2.png" alt="logo" className="logo-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
