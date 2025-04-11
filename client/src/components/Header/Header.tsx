import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <Link to={"/"}>
          <img
            src="/public/media-hub-S.webp"
            alt="logo"
            className="logo-header"
          />
        </Link>

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
      </header>
    </>
  );
};
export default Header;
