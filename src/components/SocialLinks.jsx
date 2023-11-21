import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaAddressCard, FaRegEnvelope } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";

import { motion } from "framer-motion";

import useWindowWidth from "../hooks/useWindowWidth";

const SocialLinks = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const socialLinks = [
    {
      id: 1,
      label: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/Shakhlyn",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "E-mail",
      icon: <FaRegEnvelope size={30} />,
      href: "mailto:shakhlyn.sh.du@gmail.com",
    },
    {
      id: 3,
      label: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/shakhlyn/",
    },
    // {
    //   id: 4,
    //   label: "X",
    //   icon: <FaTwitter />,
    //   href: "https://twitter.com",
    //   style: "rounded-br-md",
    // },
    {
      id: 4,
      label: "Resume",
      icon: <FaAddressCard size={30} />,
      style: "rounded-br-md",
      href: "https://drive.google.com/file/d/1I9ABvEr57Sn28lFkbwBSTHUd5zCQT9o2/view?usp=sharing",
      download: true,
    },
  ];

  const renderedSocialLink = socialLinks.map((socialLink) => (
    <li
      key={socialLink.id}
      className={
        isMobile
          ? " "
          : `flex justify-between w-32 h-10 px-3 ml-[-5rem] lg:hover:ml-[-.5rem] lg:hover:rounded-md duration-300 ${socialLink.style} bg-blue`
      }
    >
      <a
        href={socialLink.href ? socialLink.href : "/"}
        className="flex justify-between items-center w-full text-white"
        download={socialLink.download}
        target="_blank"
        rel="noreferrer"
      >
        {isMobile ? (
          <>{socialLink.icon}</>
        ) : (
          <>
            {socialLink.label} {socialLink.icon}
          </>
        )}
      </a>
    </li>
  ));

  return (
    <>
      {isMobile && (
        <div className="mt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ul className="flex flex-row gap-3 justify-between">
              {renderedSocialLink}
            </ul>
          </motion.div>
        </div>
      )}

      {!isMobile && (
        <div className={"hidden flex-col top-[35%] left-0 fixed md:flex"}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ul>{renderedSocialLink}</ul>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SocialLinks;
