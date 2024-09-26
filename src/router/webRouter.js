import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Dashboard/Body";
import Course from "../components/Dashboard/Body/Courses";
import Dashboard from "../components/Dashboard/Body/Dashboard/dashboard";
import LandingPage from "../components/LandingPage";
import SystemErrorPage from "../components/Dashboard/Error/SystemErrorPage";

const WebRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <SystemErrorPage />,
  },
  {
    path: "/system/",
    element: <App />,
    children: [
      {
        path: "/system/",
        element: <Body />,
        children: [
          {
            index: true, // This route renders when `/system/` is accessed without a specific child route
            element: <SystemErrorPage />, // Display SystemErrorPage for `/system`
          },
          {
            path: "/system/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/system/course",
            element: <Course />,
          },
          {
            path: "*",
            element: <SystemErrorPage />,
          },
        ],
      },
    ],
  },
]);

export default WebRouter;