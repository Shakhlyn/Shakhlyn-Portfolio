import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    // <div className="app bg-deep-blue ">
    <div className="app bg-slate-100">
      <Navbar />
      <main className="mt-20 w-3/4 mx-auto mb-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
