import { motion } from "framer-motion";
import {
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiVitest,
} from "react-icons/si";

const Skills = () => {
  const skillLinks = [
    {
      id: 1,
      label: "JavaScript",
      icon: <FaJsSquare size={60} />,
    },
    {
      id: 2,
      label: "React js",
      icon: <FaReact size={60} />,
    },
    {
      id: 3,
      label: "RTK Query",
      icon: <SiRedux size={60} />,
    },

    {
      id: 4,
      label: "Node js",
      icon: <FaNodeJs size={60} />,
    },

    {
      id: 5,
      label: "Express js",
      icon: <SiExpress size={60} />,
    },

    {
      id: 6,
      label: "MongoDB",
      icon: <SiMongodb size={60} />,
    },
    {
      id: 7,
      label: "Tailwind",
      icon: <SiTailwindcss size={60} />,
    },
    {
      id: 8,
      label: "Bootstrap",
      icon: <FaBootstrap size={60} />,
    },
    {
      id: 9,
      label: "Git",
      icon: <FaGitAlt size={60} />,
    },
    {
      id: 10,
      label: "GitHub",
      icon: <FaGithub size={60} />,
    },
    {
      id: 11,
      label: "Linux",
      icon: <FaLinux size={60} />,
    },
    {
      id: 12,
      label: "Vitest js",
      icon: <SiVitest size={60} />,
    },
    {
      id: 13,
      label: "Python",
      icon: <FaPython size={60} />,
    },
  ];

  const renderedSkills = skillLinks.map((skillLink) => {
    return (
      <div
        key={skillLink.id}
        className="shadow-sm shadow-dark-gray rounded-md m-4 transition duration-300 hover:scale-110 flex flex-col gap-4 py-2 items-center self-center "
      >
        <div className=" text-white">{skillLink.icon}</div>
        {/* <div className=" text-green-600 ">{skillLink.icon}</div> */}
        <div className=" text-yellow ">{skillLink.label}</div>
      </div>
    );
  });

  return (
    <section id="skills" className=" lg:h-screen w-3/4 mx-auto">
      <div className="flex justify-between gap-2 pt-20 pb-10 ">
        <h2>Skills</h2>
        <p>______________</p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="grid lg:grid-cols-6 md:grid-cols-4 mobile:grid-cols-2 ">
          {renderedSkills}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
