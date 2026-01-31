import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Tu carrito está vacío</h2>
        <Link to="/" className="text-blue-600 underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const total = cart.reduce(
    (acc, prod) => acc + prod.price * prod.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Carrito</h2>

      {cart.map(prod => (
        <div key={prod.id} className="flex justify-between mb-4">
          <div>
            <h3 className="font-semibold">{prod.title}</h3>
            <p>Cantidad: {prod.quantity}</p>
          </div>
          <p>${prod.price * prod.quantity}</p>
        </div>
      ))}

      <hr className="my-4" />

      <h3 className="text-xl font-bold">Total: ${total}</h3>

      <Link
  to="/checkout"
  className="inline-block mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
>
  Finalizar compra
</Link>

    </div>
  );
}

export default Cart;
