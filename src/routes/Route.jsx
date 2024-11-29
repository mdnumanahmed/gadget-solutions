import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import SelectedProductList from "../components/SelectedProductList";

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
    ],
  },
]);

export default router;
