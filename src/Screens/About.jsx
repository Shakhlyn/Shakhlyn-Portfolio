import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="md:w-3/4 mx-auto">
      <h2 className="section-header">More About Me</h2>
      <div className=" mx-auto text-lg md:text-xl ">
        <p className="pt-8">
          I am a passionate and dedicated Full Stack Developer with a strong
          interest in backend development. I have a Bachelor of Science degree
          in Leather Products Engineering from the University of Dhaka. Despite
          my initial academic focus, my true passion lies in the realm of
          computer science. Driven by this passion, I embarked on a journey of
          self-learning, immersing myself in programming world.
        </p>
        <p className="pt-8">
          My journey began with HTML5, CSS3, and JavaScript. I further expanded
          my skillset by mastering Bootstrap, Tailwind, Node.js, Express.js,
          MongoDB, React, Redux Toolkit Query. My thirst for knowledge extends
          beyond the MERN stack. I am also actively involved in version control
          using Git and GitHub. In addition, I have learned Python and have
          gained proficiency in Linux command lines. Equipped with this
          comprehensive stack, I successfully worked on some projects.
        </p>
        <p className="pt-8">
          Currently, I'm actively honing my skills in Vitest and Redis,
          exploring their potential to enhance my development workflow and
          deliver high-quality software. Furthermore, I'm committed to
          continuous learning and am eager to explore Django and PostgreSQL,
          expanding my technical toolkit for creating cutting-edge applications.
          My ultimate goal is to excel as a backend developer, contributing to
          the creation of robust and scalable applications that make a positive
          impact.
        </p>
      </div>
      {/* 
      <div className="flex gap-10 my-16 ">
        <p>Interested? </p>
        <p>Let's connect</p>
      </div> */}
    </section>
  );
};

export default About;
