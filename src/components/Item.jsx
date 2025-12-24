import { Link } from "react-router-dom";

function Item({ id, name, price }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">${price}</p>

      <Link
        to={`/item/${id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;
