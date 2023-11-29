import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = ["Home", "About", "Resume"];

  const renderedNavLinks = navLinks.map((navLink) => {
    if (navLink === "Resume") {
      return (
        <li key={navLink.toLowerCase()}>
          <a
            href="https://drive.google.com/file/d/1NOkUYG4zDxZJv3DtCQo-HIvehC3nNzqB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow transition duration-300"
          >
            {navLink}
          </a>
        </li>
      );
    } else {
      return (
        <li key={navLink.toLowerCase()}>
          <NavLink
            to={navLink === "Home" ? "/" : `/${navLink.toLowerCase()}`}
            className={({ isActive, isPending }) =>
              isActive ? "text-yellow" : isPending ? "pending" : ""
            }
          >
            {navLink}
          </NavLink>
        </li>
      );
    }
  });

  return (
    <nav className="z-40 w-full fixed top-0 h-16 flex items-center bg-deep-blue ">
      <div className="flex items-center justify-between mx-auto w-5/6 h-10">
        <h4 className=" font-playfair  text-xl sm:text-3xl font-bold ">
          Shakhlyn
        </h4>
        <ul className="flex justify-between gap-4 sm:gap-10 md:gap-16 lg:gap-20 font-opensans text-sm md:text-base md:font-semibold list-none">
          {renderedNavLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
