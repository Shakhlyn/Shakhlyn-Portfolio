import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
// import Dotgroup from "./components/Dotgroup";

// import Test from "./components/test";

function App() {
  return (
    <div className="app bg-deep-blue ">
      <Navbar />
      <Home />
      {/* <SocialLinks /> */}
      {/* <Dotgroup /> */}
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      {/* <Test /> */}
    </div>
  );
}

export default App;
