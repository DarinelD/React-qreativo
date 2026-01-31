import { useState } from "react";

function CheckoutForm({ onConfirm }) {
  const [buyer, setBuyer] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email) {
      alert("Completa todos los campos");
      return;
    }

    onConfirm(buyer);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      <label className="block mb-2 font-medium">Nombre</label>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        value={buyer.name}
        onChange={(e) =>
          setBuyer({ ...buyer, name: e.target.value })
        }
      />

      <label className="block mb-2 font-medium">Correo</label>
      <input
        type="email"
        className="w-full p-2 border rounded mb-4"
        value={buyer.email}
        onChange={(e) =>
          setBuyer({ ...buyer, email: e.target.value })
        }
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Confirmar compra
      </button>
    </form>
  );
}

export default CheckoutForm;
