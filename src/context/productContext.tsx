import { createContext, useState } from "react";
import { ICartProduct } from "../utils/interfaces";

interface ICartProductsContext {
  cartProducts: ICartProduct[];
  setCartProducts: (cardProducts: ICartProduct[]) => void;
}
export const CartProductsContext = createContext<ICartProductsContext>({
  cartProducts: [],
  setCartProducts: () => {}
});
export const CartProductsProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);
  return (
    <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartProductsContext.Provider>
  );
};
