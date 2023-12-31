import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <section className=" lg:h-screen mb-32 lg:mb-0 ">
      <div className="md:grid md:grid-cols-3 justify-between gap-10 ">
        <div className="mt-40 mx-auto md:order-last md:ml-auto ">
          <img
            alt="profile"
            src="assets/img.jpg"
            className=" mobile:w-[300px] xs:w-[450] lg:w-[350px] mx-auto rounded-[4%] "
          />
        </div>

        <div className=" mt-20 flex flex-col items-center justify-center md:items-start md:col-span-2  ">
          <h1 className=" text-4xl mb-20 font-playfair ">Welcome!</h1>

          <h2 className="font-semibold text-xl mb-6 md:mb-4">
            This is{" "}
            <span className="text-yellow text-2xl font-playfair">
              Shaokh Al Mahmud Shakhlyn
            </span>
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-xl leading-8 ">
              As a self-taught web developer, I've built a strong base in
              <span className="text-yellow"> MERN</span>-stack technologies and
              have a keen interest in backend development. I'm excited to apply
              this knowledge in real-world projects, collaborating with
              experienced professionals to create innovative software.
            </p>
          </motion.div>
          <div className=" mt-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <AnchorLink className="rounded-r-sm" href="#contact">
                <button className="bg-yellow text-deep-blue px-6 py-1 lg:px-10 rounded-sm text-lg shadow-sm hover:text-white hover:bg-blue transition duration-500 ">
                  Let's talk
                </button>
              </AnchorLink>
            </motion.div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Home;
