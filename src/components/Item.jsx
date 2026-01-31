import { Link } from "react-router-dom";

function Item({ id, title, price, image }) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-gray-50">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-3">{title}</h3>
      <p className="text-blue-600 text-lg mt-1">${price}</p>

      <Link
        to={`/item/${id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
      >
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;
