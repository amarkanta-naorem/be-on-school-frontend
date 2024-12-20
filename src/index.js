import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import Routes from "./router/routes";

// This is to conditionally apply React.StrictMode only in development
const isDevelopment = process.env.NODE_ENV === "development";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  isDevelopment ? (
    <React.StrictMode>
      <RouterProvider router={Routes} />
    </React.StrictMode>
  ) : (
    <RouterProvider router={Routes} />
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
