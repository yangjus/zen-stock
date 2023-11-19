import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Pricing from "./routes/pricing";
import Navbar from "./components/Navbar";
import Investing from "./routes/investing";
import Portfolio from "./routes/portfolio";
import About from "./routes/about";
import CreateAccountPage from "./routes/createaccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Navbar />
      <Root />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "pricing",
    element: (
      <>
      <Navbar />
      <Pricing />
      </>
    ),
  },
  {
    path: "investing",
    element: (
      <>
      <Navbar />
      <Investing />
      </>
    ),
  },
  {
    path: "portfolio",
    element: (
      <>
      <Navbar />
      <Portfolio />
      </>
    ),
  },
  {
    path: "about",
    element: (
      <>
      <Navbar />
      <About />
      </>
    ),
  },
  {
    path: "createaccount",
    element: (
      <>
      <Navbar />
      <CreateAccountPage />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);