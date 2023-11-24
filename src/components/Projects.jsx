import React from "react";
import { GoDotFill } from "react-icons/go";

const Projects = () => {
  return (
    <section className="mb-32">
      <h2 className="section-header font-playfair">PROJECTS</h2>

      <div className="flex flex-col gap-20 md:ml-10">
        <div>
          <div className="flex flex-row gap-3 items-center ">
            <img
              src={"/assets/skill/github.png"}
              alt="skill-image"
              className="h-10 w-auto rounded-md "
            />
            <h3 className="text-xl font-bold">
              BookNook: Backend RESTful API for Book Management and User
              Authentication.
            </h3>
          </div>
          <div className=" ml-4 md:ml-20">
            <p className=" flex flex-row gap-2 items-center md:text-sm text-slate-400 mt-4 mb-10">
              <p> JavaScript </p>
              <p>
                <GoDotFill />
              </p>
              <p> Node js </p>
              <p>
                <GoDotFill />
              </p>
              <p> Express js </p>
              <p>
                <GoDotFill />
              </p>
              <p> MongoDB </p>
              <p>
                <GoDotFill />
              </p>
              <p> Git </p>
              <p>
                <GoDotFill />
              </p>
              <p> JWT </p>
              <p>
                <GoDotFill />
              </p>
              <p> Bcrypt </p>
            </p>
            <div className="text-gray-400 ml-4 flex flex-col gap-4 ">
              <p>
                Book Nook is a full-fledged backend API built using Node.js,
                Express.js, and MongoDB, designed to manage book-related data
                and user interactions. It provides a suite of features catering
                to both users and administrators, ensuring a seamless and secure
                book management experience
              </p>

              <div className="md:ml-4 my-5">
                <button className="px-4 py-1 rounded-full border-2 text-sm text-white border-yellow transition duration-500 ">
                  Show project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3 items-center ">
            <img
              src={"/assets/skill/github.png"}
              alt="skill-image"
              className="h-10 w-auto rounded-md "
            />
            <h3 className="text-xl font-bold">
              Agora: MERN-stack e-commerce webite
            </h3>
          </div>
          <div className=" ml-4 md:ml-20">
            <p className=" flex flex-row gap-2 items-center md:text-sm text-slate-400 mt-4 mb-10">
              <p> JavaScript </p>
              <p>
                <GoDotFill />
              </p>
              <p> React </p>
              <p>
                <GoDotFill />
              </p>
              <p> React router </p>
              <p>
                <GoDotFill />
              </p>
              <p> RTK Query </p>
              <p>
                <GoDotFill />
              </p>
              <p> Tailwind CSS </p>
              <p>
                <GoDotFill />
              </p>
              <p> Node js </p>
              <p>
                <GoDotFill />
              </p>
              <p> Express js </p>
              <p>
                <GoDotFill />
              </p>
              <p> MongoDB </p>
              <p>
                <GoDotFill />
              </p>
              <p> Git </p>
              <p>
                <GoDotFill />
              </p>
              <p> JWT </p>
              <p>
                <GoDotFill />
              </p>
              <p> bcryptjs </p>
            </p>
            <div className="text-gray-400 ml-4 flex flex-col gap-4 ">
              <p>
                This is a full-stack eCommerce website built with the MERN
                stack. The website allows users to browse and purchase products,
                as well as rate the products and manage their account
                information. The website also has an admin panel that allows
                administrators to manage products, users, and orders.
              </p>
              <div className="flex flex-row gap-3">
                <img
                  src="/assets/project/agora/homepage.png"
                  alt="project-homepage"
                  className="w-96 h-48"
                />
                <img
                  src="/assets/project/agora/details.png"
                  alt="product-details"
                  className="w-96 h-48"
                />
              </div>

              <div className="md:ml-4 my-5">
                <button className="px-4 py-1 rounded-full border-2 text-sm text-white border-yellow transition duration-500 ">
                  Show project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// **************************************************************************
