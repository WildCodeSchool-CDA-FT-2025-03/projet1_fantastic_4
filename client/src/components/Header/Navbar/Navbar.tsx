import { NavLink } from "react-router";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlinks">
        <li>
          <NavLink to="/movies" className="navbar-item">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/musics" className="navbar-item">
            Musics
          </NavLink>
        </li>
        <li>
          <NavLink to="/games" className="navbar-item">
            Games
          </NavLink>
        </li>
        <li>
          <NavLink to="/books" className="navbar-item">
            Books
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
