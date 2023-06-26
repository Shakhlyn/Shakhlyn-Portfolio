import { motion } from "framer-motion";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import SocialLinks from "./SocialLinks";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  return (
    <section id="home" className=" md:h-screen ">
      <div className="w-3/4 mx-auto md:grid md:grid-cols-3 justify-between gap-10 ">
        <div className="mt-40 mx-auto md:order-last md:ml-auto ">
          <img
            alt="profile"
            src="assets/person-3.jpeg"
            className=" mobile:w-[300px] xs:w-[450] lg:w-[350px] mx-auto rounded-[10%] "
          />
        </div>

        <div className=" mt-20 flex flex-col items-center justify-center md:items-start md:mt-40 lg:mt-40 md:col-span-2  ">
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
            <p className="text-lg leading-8 ">
              <span className="text-xl"> I am Shaokh Al Mahmud Shakhlyn. </span>{" "}
              Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
              viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
            </p>
          </motion.div>
          <div className=" mt-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <AnchorLink
                className="rounded-r-sm"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                <button className="bg-gray text-deep-blue px-6 py-1 lg:px-10 lg:py-1 rounded-md text-lg shadow-sm hover:text-white hover:bg-blue transition duration-500 ">
                  {" "}
                  Let's talk{" "}
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
