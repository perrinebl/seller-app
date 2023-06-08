import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../ds/templates";
import { ErrorPage, HomePage, OrdersPage, ProductsPage } from "../ds/pages";

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
        path: "orders",
        element: <OrdersPage />,
      },
    ],
  },
]);
