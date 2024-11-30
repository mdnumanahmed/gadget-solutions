import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import SelectedProductList from "../components/SelectedProductList";
import Statistics from "../pages/Statistics";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/cart-items",
            element: <SelectedProductList />,
          },
          {
            path: "/dashboard/wishlist-items",
            element: <SelectedProductList />,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
