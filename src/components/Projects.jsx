import React from "react";

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
              Agora: MERN-stack e-commerce webite
            </h3>
          </div>
          <div className=" ml-4 md:ml-20">
            <p className=" md:text-sm text-slate-400 mt-4 mb-10">
              JavaScript, React, React router, RTK Query, Tailwind CSS, MongoDB,
              Node js, Express js, Git, JWT
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
            <p className=" md:text-sm text-slate-400 mt-4 mb-10">
              JavaScript, React, React router, RTK Query, Tailwind CSS, MongoDB,
              Node js, Express js, Git, JWT
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
