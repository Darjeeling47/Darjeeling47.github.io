import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createHashRouter } from "react-router-dom";

//css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

//path
import Root from "./Root";
import Home from "./routes/Home";
import Award from "./routes/Award";
import Project from "./routes/Project";
import Activities from "./routes/Activities";
import Experience from "./routes/Experience";

const router = createHashRouter([
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
]);

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
