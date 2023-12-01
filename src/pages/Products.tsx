import { useCallback, useEffect } from "react";
import useProductsApi from "../lib/ProductsApi";
import ProductCard from "../components/ProductCard";
import { Grid, Typography } from "@mui/material";
import { IProduct } from "../utils/interfaces";

const Products = () => {
  const { products, getProducts } = useProductsApi();

  const fetchProducts = useCallback(async () => {
    await getProducts();
  }, [getProducts]);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.length == 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product: IProduct) => (
          <Grid item md={3} sm={4} xs={12} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
