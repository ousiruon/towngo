import { NavLink } from "react-router";

const Menu = () => {
  return (
    <nav>
      <ul className="flex gap-5 font-semibold">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? "text-tertiary-light dark:text-tertiary-dark"
              : "hover:text-tertiary-light dark:hover:text-tertiary-dark ease-in duration-300"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive
              ? "text-tertiary-light dark:text-tertiary-dark"
              : "hover:text-tertiary-light dark:hover:text-tertiary-dark ease-in duration-300"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive
              ? "text-tertiary-light dark:text-tertiary-dark"
              : "hover:text-tertiary-light dark:hover:text-tertiary-dark ease-in duration-300"
          }
        >
          Blog
        </NavLink>
      </ul>
    </nav>
  );
};

export default Menu;
