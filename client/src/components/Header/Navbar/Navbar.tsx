import { NavLink } from "react-router";
import "./Navbar.css";

const categoriesData = [
  { id: 1, name: "movies" },
  { id: 1, name: "musics" },
  { id: 1, name: "games" },
  { id: 1, name: "books" },
];

const Navbar = () => {
  return (
    <ul className="navlinks">
      {categoriesData.map((category) => (
        <li>
          <NavLink
            to={`/${category.name}`}
            className={`nav-item nav-item-${category.name} background-slide-${category.name}`}
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Navbar;
