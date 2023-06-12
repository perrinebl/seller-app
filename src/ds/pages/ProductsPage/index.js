import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useProducts } from "../../../hooks";

import {
  ConditionProductChip,
  Price,
  ProductImage,
  ProductLink,
} from "../../atoms";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: ProductImage,
    sortable: false,
  },
  {
    field: "name",
    headerName: "Produit",
    renderCell: ProductLink,
    width: 350,
  },
  {
    field: "condition",
    headerName: "Condition",
    renderCell: ConditionProductChip,
    width: 150,
  },
  {
    field: "price",
    headerName: "Prix (EUR)",
    renderCell: Price,
    width: 150,
  },
  {
    field: "stock",
    headerName: "Stock",
    description: "Stock disponible à la vente",
    width: 120,
  },
];

export default function ProductsPage() {
  const { isLoading, products } = useProducts();

  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <DataGrid
        loading={isLoading}
        columns={columns}
        rows={products}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
