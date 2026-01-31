import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existing = cart.find(prod => prod.id === item.id);

    if (existing) {
      setCart(
        cart.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalQuantity = cart.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
