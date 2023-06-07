import { useQuery } from "react-query";

import api from "../../api";

export default function useProducts() {
  const queryResult = useQuery(
    ["products"],
    async () => await api.get("products").json()
  );

  return { ...queryResult, products: queryResult.data };
}
