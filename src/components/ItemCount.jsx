import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          -
        </button>

        <span className="text-lg font-semibold">{count}</span>

        <button
          onClick={increment}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
