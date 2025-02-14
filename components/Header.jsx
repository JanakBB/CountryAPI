import { useTheme } from "../hooks/useTheme";
import ProfilePicture from "../images/Group 64.png";
import "./Footer.css";
import SocialMedia from "./SocialMedia";

const Header = () => {
  const [isDark, setIsDark] = useTheme();

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <div className="header-social-media">
          <div>
            <h2 className="title">
              <img
                src={ProfilePicture}
                alt=""
              />
              <a href="/">CodeBookPro world</a>
            </h2>
          </div>
          <SocialMedia />
        </div>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("mode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
