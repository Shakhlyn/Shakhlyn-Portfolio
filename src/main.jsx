import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import PrimaryScreen from "./Screens/PrimaryScreen.jsx";
import About from "./Screens/About.jsx";
import Resume from "./Screens/Resume.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<PrimaryScreen />} />
      <Route path="about" element={<About />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
