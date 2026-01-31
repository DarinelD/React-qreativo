import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
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

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Total de productos
  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  // Total en precio
  const getTotal = () =>
    cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el carrito
export const useCart = () => useContext(CartContext);
