import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ItemDetail({ item }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = quantity => {
    addItem(item, quantity);
    setAdded(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-bold mt-4 text-center">{item.title}</h2>
      <p className="text-blue-600 mt-1 text-center text-xl">${item.price}</p>
      <p className="mt-3 text-center">{item.description}</p>
      <p className=" mt-3 ">Stock: <span className="text-red-600">{item.stock}</span></p>

      {!added ? (
        <ItemCount stock={item.stock} onAdd={handleAdd} />
      ) : (
        <p className="text-green-600 font-semibold mt-4">
          Producto agregado al carrito ✔️
        </p>
      )}
    </div>
  );
}

export default ItemDetail;
