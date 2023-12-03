import { useCallback, useEffect } from "react";
import useProductsApi from "../lib/ProductsApi";
import ProductCard from "../components/ProductCard";
import { Grid, Typography } from "@mui/material";
import { IProduct } from "../utils/interfaces";
import { PRODUCT_PAGE_HEADING } from "../utils/constants";

const Products = () => {
  const { products, errorMessage, getProducts } = useProductsApi();

  const fetchProducts = useCallback(async () => {
    await getProducts();
  }, [getProducts]);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.length == 0) {
    return <h1>Loading...</h1>;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  const productsLoaded = () => {
    const maxProducts = 10;
    return (products.length / maxProducts) * 100;
  };

  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        {PRODUCT_PAGE_HEADING}
      </Typography>
      <div>
        <span>Products loaded</span>
        <div
          style={{
            width: "400px",
            background: "#d0c6c6",
            height: "24px",
            borderRadius: "16px",
            marginBottom: "24px"
          }}
        >
          <div
            style={{
              width: `${productsLoaded()}%`,
              background: "steelblue",
              height: "24px",
              borderRadius: "16px"
            }}
          ></div>
        </div>
      </div>
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
