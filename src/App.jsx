import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/root";
import { ErrorPage } from "./error-page/error-page";
import Contact from "./page/contact";
// import "./App.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/About",
        element: <div> About </div>,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Projects",
        element: <div> Projects </div>,
      },
      {
        path: "/Skills",
        element: <div> Skills </div>,
      },
    ],
  },
  {
    path: "/Welcome",
    element: <div> Welcome </div>,
  },
]);
