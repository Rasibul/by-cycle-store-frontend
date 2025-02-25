import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import ALlBiCycle from "../pages/allBiCycles/ALlBiCycle";
import About from "../pages/about/About";
import Checkout from "../pages/checkout/Checkout";
import Login from "../pages/login/Login";
import Signup from "../pages/signUp/Signup";
import SingleProductDetails from "../pages/singleProductDetails/SingleProductDetails";
import Dashboard from "../layouts/DashBoard";

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
      {
        path: "/products/:id",
        element: <SingleProductDetails />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  // admin dashboard routes
  {
    path: "/admin-dashboard",
    element: <Dashboard />,
  },
  // {
  //   path: "/customer-dashboard",
  //   element: <CustomerDashBoard />,
  // }
]);

export default router;
