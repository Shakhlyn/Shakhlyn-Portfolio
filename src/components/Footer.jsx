import { developer_link } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-blue text-slate-100 text-xs py-3 w-full">
      <p className="w-3/4 mx-auto flex justify-center ">
        &copy; {currentYear} | Designed and developed by <span>&nbsp;</span>
        <a href={developer_link}>
          <span className="hover:text-yellow">Shakhlyn</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
