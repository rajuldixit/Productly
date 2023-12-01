import React, { useContext } from "react";
import { CartProductsContext } from "../context/productContext";

const useCart = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  return { cartProducts, setCartProducts };
};

export default useCart;
