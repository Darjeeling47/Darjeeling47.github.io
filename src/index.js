import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

//path
import Root from "./Root";
import Home from "./routes/Home/Home";
import Award from "./routes/Award/Award";
import Project from "./routes/Project/Project";
import Activities from "./routes/Activities/Activities";
import Experience from "./routes/Experience";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "award",
          element: <Award />,
        },
        {
          path: "project",
          element: <Project />,
        },
        {
          path: "activities",
          element: <Activities />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
      ],
    },
  ],
  {
    basename: "/profile",
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
