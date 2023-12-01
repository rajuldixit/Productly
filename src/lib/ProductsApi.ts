import { useState } from "react";
import axios from "axios";
import { IProduct } from "../utils/interfaces";

const useProductsApi = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);
  const base_url = process.env.SERVER_URL || "http://localhost:3000/";

  const getProducts = async () => {
    setActionExecuting(true);
    try {
      const resp = await axios.get(`${base_url}products`);
      setProducts(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setActionExecuting(false);
    }
  };
  return {
    products,
    getProducts
  };
};

export default useProductsApi;
