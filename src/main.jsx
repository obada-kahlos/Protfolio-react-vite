import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
