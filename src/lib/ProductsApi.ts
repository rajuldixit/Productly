import { useState } from "react";
import axios from "axios";
import { IProduct } from "../utils/interfaces";

const useProductsApi = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);

  async function getProducts() {
    setActionExecuting(true);
    try {
      const resp = await axios.get("http://localhost:3000/products");
      setProducts(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setActionExecuting(false);
    }
  }
  return {
    products,
    getProducts
  };
};

export default useProductsApi;
