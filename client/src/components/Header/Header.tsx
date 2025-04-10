import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import ThemeButton from "./Navbar/themeButton";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <img
          src="/public/media-hub-S.webp"
          alt="logo"
          className="logo-header"
        />
        <nav className="navbar-desktop">
          <Navbar />
        </nav>
        <img
          className="burgerMenu"
          src={isMenuOpen ? "public//close.svg" : "/public/burgerMenu.svg"}
          alt=""
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <nav className="navbar-mobile">
            <Navbar />
          </nav>
        )}
        <ThemeButton />
      </header>
    </>
  );
};
export default Header;
