/** @format */

// Em router.js
import { createBrowserRouter } from "react-router-dom";
import Home from "./public/pages/home";
import Second from "./public/pages/second";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country/:index",
    element: <Second />,
  },
]);

export default router;
