import React from "react";
import { IProduct } from "../utils/interfaces";
import useCart from "./useCart";

const useAddAndRemoveProduct = () => {
  const { cartProducts, setCartProducts } = useCart();

  const addProduct = (product: IProduct) => {
    // Copy the current cart items
    const currentCartItems = [...cartProducts];

    // Find the index of the product in the cart
    const existingCartItem = currentCartItems.find(
      (item) => item.product.id !== product.id
    );

    if (!existingCartItem) {
      currentCartItems.push({
        product
      });
    }
    // Update the cart items
    setCartProducts(currentCartItems);
  };

  const removeProduct = (product: IProduct) => {
    // make a copy of the cart items
    const currentCartItems = [...cartProducts];

    // find the index of the product in the cart
    const existingCartItem = currentCartItems.find(
      (item) => item.product.id === product.id
    );

    // if the product exists in the cart
    if (existingCartItem) {
      currentCartItems.splice(currentCartItems.indexOf(existingCartItem), 1);
    } else {
      throw new Error("removeFromCart: Product does not exist.");
    }

    setCartProducts(currentCartItems);
  };

  return { addProduct, removeProduct, cartProducts };
};

export default useAddAndRemoveProduct;
