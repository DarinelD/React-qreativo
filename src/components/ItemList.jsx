import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemList;
