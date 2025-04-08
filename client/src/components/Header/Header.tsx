import Navbar from "./Navbar/Navbar";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="logo-header"></div>
        <img src="/media-hub-icon.webp"></img>
        <Navbar />
        <img
          className="burgerMenu"
          src={isMenuOpen ? "public/close.svg" : "public/burgerMenu.svg"}
          alt=""
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen ? (
          <nav className="navbar-mobile">
            <Navbar />
          </nav>
        ) : null}
      </header>
    </>
  );
};
export default Header;
