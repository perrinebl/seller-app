import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../ds/templates";
import {
  ErrorPage,
  HomePage,
  OrdersPage,
  ProductPage,
  ProductsPage,
} from "../ds/pages";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
    ],
  },
]);
