import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
  },
]);

export default router;
