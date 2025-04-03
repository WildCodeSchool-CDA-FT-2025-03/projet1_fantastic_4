import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlinks">
        <li>
          <NavLink to="/movies" className="nav-item">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/musics" className="nav-item">
            Musics
          </NavLink>
        </li>
        <li>
          <NavLink to="/games" className="nav-item">
            Games
          </NavLink>
        </li>
        <li>
          <NavLink to="/books" className="nav-item">
            Books
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
