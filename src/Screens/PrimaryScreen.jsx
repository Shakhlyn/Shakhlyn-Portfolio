import Home from "../components/Home";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
// import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

// import Test from "../components/test";

function PrimaryScreen() {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <Contact />
      {/* <Test /> */}
    </div>
  );
}

export default PrimaryScreen;
