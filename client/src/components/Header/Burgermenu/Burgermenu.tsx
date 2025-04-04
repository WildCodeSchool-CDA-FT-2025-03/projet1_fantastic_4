import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import IconBurger from "../assets/burgermenu.svg";

const Burgernavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="menu-burger">
      <button className="navbar-burger" onClick={toggleMenu}>
        <img src={IconBurger} alt="menu" />
      </button>

      <div className={`menu-container ${isMenuOpen ? "ouvert" : "fermé"}`}>
        <Navbar />
      </div>
    </div>
  );
};

export default Burgernavbar;
