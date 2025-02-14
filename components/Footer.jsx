import { useTheme } from "../hooks/useTheme";
import "./Footer.css";
import ProfilePicture from "../images/Group 64.png";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const [isDark, setIsDark] = useTheme();

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <div>
              <h2>About Us</h2>
              <p>
                Explore, Practicee and Continuous activities are fulfilled by
                CodeBookPro
              </p>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/">CodeBookPro World</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <i class="fa-solid fa-phone phone"></i>
            +977-9868747299
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="image-section">
          <img src={ProfilePicture} alt="" />
        </div>
        <div className="footer-bottom">
          &copy; 2025 CodeBookPro | Designed by CodeBookPro [] 007
        </div>
      </div>
    </header>
  );
};

export default Footer;
