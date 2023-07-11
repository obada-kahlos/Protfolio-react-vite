import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/root";
import { ErrorPage } from "./error-page/error-page";
import Contact from "./page/contact";
import About from "./page/about";
import Project from "./page/project";
import Skill from "./page/skill";
import "react-lazy-load-image-component/src/effects/blur.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Projects",
        element: <Project />,
      },
      {
        path: "/Skills",
        element: <Skill />,
      },
    ],
  },
  {
    path: "/Welcome",
    element: <div> Welcome </div>,
  },
]);
