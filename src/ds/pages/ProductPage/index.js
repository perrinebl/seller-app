import { CircularProgress, Typography } from "@mui/material";
import { Image } from "mui-image";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../hooks";

// TODO : refactor Image and ProductImage
export default function ProductPage() {
  const { productId } = useParams();
  const { isLoading, product } = useProducts({ productId });

  if (isLoading) return <CircularProgress />;

  const { name, imageUrl } = product;

  return (
    <>
      <Typography variant="h2">{name}</Typography>
      <Image src={imageUrl} alt={name} width={250} duration={250} />
    </>
  );
}
