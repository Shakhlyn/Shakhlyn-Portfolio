import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page }) => {
  // const Link = ({ page, selectedPage, setSelectedPage }) => {
  const [selectedPage, setSelectedPage] = useState("home"); //Determine which page we are on.

  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = () => {
  // const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const navLinks = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

  const renderedNavLinks = navLinks.map((navLink) => {
    return (
      <Link key={navLink.toLowerCase()} page={navLink}>
        {navLink}
      </Link>
    );
  });

  const isDesktopNavbar = isDesktop ? (
    <div className=" flex justify-between gap-16 font-opensans text-sm font-semibold ">
      {renderedNavLinks}
    </div>
  ) : (
    <button
      className="rounded-full bg-red p-2"
      onClick={() => setIsMenuToggled(!isMenuToggled)}
    >
      <img alt="menu-icon" src="../assets/menu-icon.svg" />
    </button>
  );

  const notDesktopNavbar = !isDesktop && isMenuToggled && (
    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
      <div className="flex justify-end p-12">
        <button
          className="rounded-full bg-red p-2"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img alt="close-icon" src="../assets/close-icon.svg" />
        </button>
      </div>
      {/* Menu Items */}
      <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue ">
        {renderedNavLinks}
      </div>
    </div>
  );

  return (
    <nav className="z-40 w-full fixed top-0 py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className=" font-playfair text-3xl font-bold ">Shakhlyn</h4>

        {isDesktopNavbar}

        {/* MOBILE MENU POPUP */}
        {notDesktopNavbar}
      </div>
    </nav>
  );
};

export default Navbar;
