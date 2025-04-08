import { NavLink } from "react-router";
import "./Navbar.css";

import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "@/schemas/categories.schema";

type GetAllCategoriesType = {
  getAllCategories: { id: number; name: string }[];
};

const Navbar = () => {
  const { data } = useQuery<GetAllCategoriesType>(GET_ALL_CATEGORIES);
  return (
    <ul className="navlinks">
      {data?.getAllCategories.map((category) => (
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
