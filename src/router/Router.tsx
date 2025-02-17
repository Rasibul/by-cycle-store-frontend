import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import ALlBiCycle from "../pages/allBiCycles/ALlBiCycle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <>404</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-bicycles",
        element: <ALlBiCycle />,
      },
    ],
  },
]);

export default router;
