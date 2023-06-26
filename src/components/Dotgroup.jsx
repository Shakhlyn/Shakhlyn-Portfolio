import React from "react";
import { motion } from "framer-motion";

const Dotgroup = () => {
  const sections = [
    // {
    //   id: 1,
    //   name: "home",
    //   // href: "home",
    // },

    {
      id: 2,
      name: "skills",
    },
    {
      id: 3,
      name: "projects",
    },
    {
      id: 4,
      name: "testimonials",
    },
    {
      id: 5,
      name: "contact",
    },
  ];

  const renderedSection = sections.map((section) => (
    <li
      key={section.id}
      className={
        "flex justify-between w-5 h-5 m-8 border-4 hover:border-2 hover:duration-500 list-none rounded-[100%] text-blue bg-deep-blue "
      }
    >
      <a
        href={`#${section.name}`}
        className="flex justify-between items-center w-full text-black"
      ></a>
    </li>
  ));

  return (
    <div className="hidden flex-col top-[29%] right-2 fixed md:flex">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ul className="list-none">{renderedSection}</ul>
      </motion.div>
    </div>
  );
};

export default Dotgroup;
