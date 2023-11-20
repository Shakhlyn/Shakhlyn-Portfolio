import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

import Test from "./components/test";

function App() {
  return (
    // <div className="app bg-deep-blue ">
    <div className="app bg-slate-100">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Test />
      <Footer />
    </div>
  );
}

export default App;
