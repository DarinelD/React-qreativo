// src/pages/Checkout.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import CheckoutForm from "../components/CheckoutForm";

function Checkout() {
  const { cart, totalQuantity, clearCart, getTotal } = useCart();
  const [orderId, setOrderId] = useState(null);

  // Mostrar mensaje si el carrito está vacío
  if (cart.length === 0 && !orderId) {
    return (
      <h2 className="text-center mt-20 text-xl">
        El carrito está vacío
      </h2>
    );
  }

  const createOrder = async (buyer) => {
    const order = {
      buyer,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total: getTotal(),
      date: serverTimestamp()
    };

    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, order);

    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-green-600">
          ¡Compra realizada con éxito!
        </h2>
        <p className="mt-4">
          Tu número de orden es: <span className="font-semibold">{orderId}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
}

export default Checkout;
