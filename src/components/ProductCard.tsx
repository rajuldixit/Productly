import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import { IProduct } from "../utils/interfaces";
import useAddAndRemoveProduct from "../hooks/useAddAndRemoveProduct";

type PropTypes = {
  product: IProduct;
};

const ProductCard = (props: PropTypes) => {
  const { product } = props;
  const [showDescription, setDescription] = useState(false);
  const { addProduct, removeProduct, cartProducts } = useAddAndRemoveProduct();
  const [showAddButton, setAddButton] = useState(true);

  const addToCart = () => {
    addProduct(product);
    toggleCartButton();
  };

  const removeFromCart = () => {
    removeProduct(product);
    toggleCartButton();
  };

  const toggleCartButton = () => {
    const filteredItem = cartProducts.filter(
      (item) => item.product.id === product.id
    );
    if (filteredItem.length > 0) {
      setAddButton(false);
    } else {
      setAddButton(true);
    }
  };

  useEffect(() => {
    toggleCartButton();
  }, [product]);
  return (
    <Card sx={{ maxWidth: 300, height: 320, position: "relative" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.xlarge.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Button
          sx={{ padding: "0" }}
          variant="text"
          onClick={() => setDescription(!showDescription)}
        >
          Description
        </Button>
        {showDescription && (
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        )}
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "end",
          position: "absolute",
          bottom: "0",
          right: "0"
        }}
      >
        {showAddButton && (
          <Button size="small" variant="outlined" onClick={addToCart}>
            Add To Cart
          </Button>
        )}
        {!showAddButton && (
          <Button size="small" variant="outlined" onClick={removeFromCart}>
            Remove from Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
