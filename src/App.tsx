import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./pages/Products";
import { Container } from "@mui/material";
import { CartProductsProvider } from "./context/productContext";

function App() {
  return (
    <CartProductsProvider>
      <Container
        sx={{ padding: "20px 8px", boxSizing: "border-box" }}
        maxWidth="lg"
      >
        <Products />
      </Container>
    </CartProductsProvider>
  );
}

export default App;
