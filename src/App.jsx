// import { useState } from "react";

// import useMediaQuery from "./hooks/useMediaQuery";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

// import Test from "./components/test";

function App() {
  // const [selectedPage, setSelectedPage] = useState("home"); //Determine which page we are on.
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px) ");

  return (
    <div className="app bg-deep-blue ">
      {/* <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      {/* <Test /> */}
    </div>
  );
}

export default App;
