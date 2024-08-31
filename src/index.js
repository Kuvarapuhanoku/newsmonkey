import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import News from "./components/News";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sports",
    element: (
      <>
        <Navbar />
        <News key="sports" category="sports" pageSize={9} country="in" />
      </>
    ),
  },
  {
    path: "/business",
    element: (
      <>
        <Navbar />
        <News key="business" category="business" pageSize={9} country="in" />
      </>
    ),
  },
  {
    path: "/entertainment",
    element: (
      <>
        <Navbar />
        <News
          key="entertainment"
          category="entertainment"
          pageSize={9}
          country="in"
        />
      </>
    ),
  },
  {
    path: "/general",
    element: (
      <>
        <Navbar />
        <News key="general" category="general" pageSize={9} country="in" />
      </>
    ),
  },
  {
    path: "/health",
    element: (
      <>
        <Navbar />
        <News key="health" category="health" pageSize={9} country="in" />
      </>
    ),
  },

  {
    path: "/science",
    element: (
      <>
        <Navbar />
        <News key="science" category="science" pageSize={9} country="in" />
      </>
    ),
  },

  {
    path: "/sports",
    element: (
      <>
        <Navbar />
        <News key="sports" category="sports" pageSize={9} country="in" />
      </>
    ),
  },
  {
    path: "/technology",
    element: (
      <>
        <Navbar />
        <News
          key="technology"
          category="technology"
          pageSize={9}
          country="in"
        />
      </>
    ),
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
