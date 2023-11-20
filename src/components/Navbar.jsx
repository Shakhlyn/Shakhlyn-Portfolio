import { useState } from "react";
import Link from "../utils/Link";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState(null); //Determine which page we are on.
  const [isMobileNavbarIsShown, setIsMobileNavbarIsShown] = useState(false);

  const navLinks = ["Home", "Skills", "Projects", "Contact"];

  const handleIsnavbarShown = () =>
    setIsMobileNavbarIsShown(!isMobileNavbarIsShown);

  const renderedNavLinks = navLinks.map((navLink) => {
    return (
      <li key={navLink.toLowerCase()}>
        <Link
          page={navLink}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          {navLink}
        </Link>
      </li>
    );
  });

  const notMobileNavbar = (
    <>
      <div>
        <ul className="md:flex md:justify-between md:gap-10 lg:gap-16 md:font-opensans md:text-sm md:font-semibold list-none hidden ">
          {renderedNavLinks}
        </ul>
      </div>

      {!isMobileNavbarIsShown && (
        <button
          className=" md:hidden rounded-full bg-red p-2"
          onClick={handleIsnavbarShown}
        >
          <img alt="menu-icon" src="../assets/menu-icon.svg" />
        </button>
      )}
    </>
  );

  const mobileNavbar = isMobileNavbarIsShown && (
    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
      <div className="flex justify-end p-12">
        <button
          className="rounded-full bg-red p-2"
          onClick={handleIsnavbarShown}
        >
          <img alt="close-icon" src="../assets/close-icon.svg" />
        </button>
      </div>
      {/* Menu Items */}
      <ul className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue list-none ">
        {renderedNavLinks}
      </ul>
    </div>
  );

  return (
    <nav className="z-40 w-full fixed top-0 h-16 flex items-center bg-deep-blue ">
      <div className="flex items-center justify-between mx-auto w-5/6 h-10 ">
        <h4 className=" font-playfair text-3xl font-bold ">Shakhlyn</h4>
        {notMobileNavbar}

        {/* MOBILE MENU POPUP */}
        {mobileNavbar}
      </div>
    </nav>
  );
};

export default Navbar;
