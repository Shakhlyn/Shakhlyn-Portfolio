import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="mt-20 w-5/6 md:w-3/4 mx-auto mb-10 pb-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
