import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/",
    },

    {
      id: 3,
      child: (
        <>
          E-mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:na@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "https://mail.google.com/",
      download: true,
    },
  ];

  const renderedSocialLink = socialLinks.map((socialLink) => (
    <li
      key={socialLink.id}
      className={`flex justify-between w-32 h-10 px-3 ml-[-5rem] lg:hover:ml-[-.5rem] lg:hover:rounded-md duration-300 ${socialLink.style} bg-blue `}
    >
      <a
        href={socialLink.href ? socialLink.href : "/"}
        className="flex justify-between items-center w-full text-white"
        download={socialLink.download}
        target="_blank"
        rel="noreferrer"
      >
        {socialLink.child}
      </a>
    </li>
  ));

  return (
    <div className="hidden flex-col top-[35%] left-0 fixed md:flex">
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
  );
};

export default SocialLinks;
