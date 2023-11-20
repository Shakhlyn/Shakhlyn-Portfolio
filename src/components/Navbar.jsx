import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = ["Home", "About", "Resume"];

  const renderedNavLinks = navLinks.map((navLink) => {
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
  });

  return (
    <nav className="z-40 w-full fixed top-0 h-16 flex items-center bg-deep-blue ">
      {/* <nav className="w-full  "> */}
      <div className="flex items-center justify-between mx-auto w-5/6 h-10 ">
        <h4 className=" font-playfair text-3xl font-bold ">Shakhlyn</h4>
        <ul className="flex justify-between gap-10 lg:gap-16 font-opensans text-sm md:text-base md:font-semibold list-none">
          {renderedNavLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
