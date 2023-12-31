import React from "react";

import { projectBookNook, projectAgora } from "../constants";

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
            <p className=" mobile:text-xs md:text-sm text-slate-400 mt-4 ml-4 mb-10">
              JavaScript, Node js, Express js, MongoDB, Git, JWT, Bcrypt
            </p>

            <div className="text-gray-400 ml-4 flex flex-col gap-4 ">
              <p>
                The Book Nook is a comprehensive backend solution facilitating
                seamless book browsing, searching, filtering, rating, reviewing,
                ordering and user interactions along with sorting, paginating,
                and field limiting functionalities. It ensures a secure
                environment with user authentication, authorization, and account
                management features. Administrators enjoy efficient book
                inventory management, including creating, browsing, updating,
                and deleting books. User management capabilities enable secure
                account handling within the system.
              </p>

              <div className="md:ml-4 my-5">
                <button className="px-4 py-1 rounded-full border-2 text-sm text-white border-yellow transition duration-500 ">
                  <a
                    // href={githubLinks.bookNook}
                    href={projectBookNook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the project
                  </a>
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
            <p className=" mobile:text-xs md:text-sm text-slate-400 mt-4 ml-4 mb-10">
              JavaScript, React, React Router, RTK Query, Tailwind CSS, Node js,
              Express js, MongoDB, Git, JWT, bcryptjs
            </p>

            <div className="text-gray-400 ml-4 flex flex-col gap-4 ">
              <p>
                This is a full-stack eCommerce website built with the MERN
                stack. The website allows users to browse, search, and purchase
                products, as well as rate the products and manage their account
                information. Additionally, users can conveniently add desired
                products to their cart for checkout. This allows them to adjust
                the quantity of each item, remove unwanted ones, and view the
                total cost before proceeding to checkout. The website also has
                an admin panel that allows administrators to manage products,
                users, and orders.
              </p>
              <div className="flex flex-col md:flex-row max-w-full gap-3">
                <img
                  src="/assets/project/agora/homepage.png"
                  alt="project-homepage"
                  className=" w-[100%] h-auto md:w-[50%] md:h-auto mx-auto"
                />
                <img
                  src="/assets/project/agora/details.png"
                  alt="product-details"
                  className=" w-[100%] h-auto md:w-[50%] md:h-auto mx-auto"
                />
              </div>

              <div className="md:ml-4 my-5">
                <button className="px-4 py-1 rounded-full border-2 text-sm text-white border-yellow transition duration-500 ">
                  <a
                    href={projectAgora}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the project
                  </a>
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
