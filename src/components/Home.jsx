import React from "react";

const Home = () => {
  return (
    <section id="home" className=" mt-16 h-screen ">
      <div>
        <img
          alt="profile"
          className="z-10 w-full max-w-[400px] md:max-w-[600px]"
          src="assets/profile-image.png"
        />
      </div>
      <div>
        <p className="text-6xl font-playfair z-10 text-center md:text-start">
          S A M {""}
          <span
          // className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
          //   before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
          >
            Shakhlyn
          </span>
        </p>

        <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
          viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
        </p>
        <button>Contact me</button>
        <button> Let's talk </button>
      </div>
    </section>
  );
};

export default Home;
