import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../ds/templates";
import { ErrorPage, OrderPage, ProductsPage } from "../ds/pages";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "orders",
        element: <OrderPage />,
      },
    ],
  },
]);
