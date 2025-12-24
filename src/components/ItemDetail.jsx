import ItemCount from "./ItemCount";

function ItemDetail({ name, price, category }) {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white border rounded-2xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-500 mb-4 capitalize">
        Categoría: {category}
      </p>
      <p className="text-2xl text-gray-800 mb-6">${price}</p>

      <ItemCount />
    </div>
  );
}

export default ItemDetail;

