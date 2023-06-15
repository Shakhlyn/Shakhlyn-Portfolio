import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  // const [selectedPage, setSelectedPage] = useState(null); //Determine which page we are on.

  const lowerCasePage = page.toLowerCase();

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
