import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import IconBurger from "@/assets/burgermenu.svg";
import "./Burgermenu.css";

const Burgernavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    /*console.log({isMenuOpen});*/
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
