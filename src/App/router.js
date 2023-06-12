import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../ds/templates";
import { ErrorPage, HomePage, OrdersPage, ProductsPage } from "../ds/pages";
import { ProductRoute } from "../ds/molecules";

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
        children: [
          {
            path: ":productId",
            element: <ProductRoute />,
          },
        ],
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
    ],
  },
]);
