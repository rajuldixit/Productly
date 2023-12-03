import { useState } from "react";
import axios from "axios";
import { IProduct } from "../utils/interfaces";

const useProductsApi = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);
  const base_url = process.env.SERVER_URL || "http://localhost:3000/";

  const getProducts = async () => {
    setActionExecuting(true);
    try {
      const resp = await axios.get(`${base_url}products`);
      setProducts(resp.data);
    } catch (err) {
      setErrorMessage("Error in fetch");
    } finally {
      setActionExecuting(false);
    }
  };
  return {
    products,
    errorMessage,
    getProducts
  };
};

export default useProductsApi;
