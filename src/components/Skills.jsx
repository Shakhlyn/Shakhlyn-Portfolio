import { motion } from "framer-motion";

const Skills = () => {
  const skillLinks = [
    {
      id: 1,
      label: "JavaScript",
      image: "/assets/skill/js.png",
    },
    {
      id: 2,
      label: "React js",
      image: "/assets/skill/reactjs.png",
    },
    {
      id: 3,
      label: "RTK Query",
      image: "/assets/skill/RTK.png",
    },

    {
      id: 4,
      label: "Node js",
      image: "/assets/skill/Node.png",
    },

    {
      id: 5,
      label: "Express js",
      image: "/assets/skill/express.png",
    },

    {
      id: 6,
      label: "MongoDB",
      image: "/assets/skill/mongodb.png",
    },
    {
      id: 7,
      label: "Tailwind",
      image: "/assets/skill/tailwind.png",
    },
    {
      id: 8,
      label: "Bootstrap",
      image: "/assets/skill/bootstrap.png",
    },
    {
      id: 9,
      label: "Git",
      image: "/assets/skill/git.png",
    },
    {
      id: 10,
      label: "GitHub",
      image: "/assets/skill/github.png",
    },
    {
      id: 11,
      label: "Linux",
      image: "/assets/skill/linux.png",
    },
    {
      id: 12,
      label: "Redis",
      image: "/assets/skill/redis.png",
    },
    // {
    //   id: 13,
    //   label: "Vitest js",
    //   image: "/assets/skill/vitest.jpeg",
    // },
    {
      id: 13,
      label: "Python",
      image: "/assets/skill/python.png",
    },
  ];

  const renderedSkills = skillLinks.map((skillLink) => {
    return (
      <li
        key={skillLink.id}
        className="shadow-sm shadow-dark-gray rounded-md m-4 py-2 px-1 transition duration-300 hover:scale-110 flex flex-col gap-4 items-center self-center"
      >
        <img
          src={skillLink.image}
          alt="skill-image"
          className="h-20 w-auto rounded-md "
        />
        <div className=" text-blue ">{skillLink.label}</div>
      </li>
    );
  });

  return (
    <section className="mb-32">
      <h2 className=" section-header font-playfair ">TECHNICAL SKILLS</h2>

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
        <ul className="grid lg:grid-cols-6 md:grid-cols-4 mobile:grid-cols-2 ">
          {renderedSkills}
        </ul>
      </motion.div>
    </section>
  );
};

export default Skills;
