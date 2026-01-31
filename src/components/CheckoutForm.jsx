import { useCart } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { useState } from "react";

function CheckoutForm() {
  const { cart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!name || !email) {
      alert("Por favor completa todos los campos");
      return;
    }

    setLoading(true);

    const order = {
      buyer: { name, email },
      items: cart,
      total,
      date: serverTimestamp(),
    };

    try {
      const res = await addDoc(collection(db, "orders"), order);
      setOrderId(res.id);
    } catch (error) {
      console.error("Error creando la orden:", error);
      alert("Ocurrió un error al enviar tu orden.");
    } finally {
      setLoading(false);
    }
  };

  // Mostrar mensaje con ID de orden si ya se creó
  if (orderId) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-green-600">¡Gracias por tu compra! {name}</h2>
        <p className="mt-4">
          Tu número de orden es: <span className="font-semibold">{orderId}</span>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      {/* Input de nombre */}
      <label className="block mb-2 font-medium">Nombre</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Ingresa tu nombre"
      />

      {/* Input de correo */}
      <label className="block mb-2 font-medium">Correo</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Ingresa tu correo"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Enviando..." : "Confirmar compra"}
      </button>
    </form>
  );
}

export default CheckoutForm;
