import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        setItems(data.filter((p) => p.category === categoryId));
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return <ItemList items={items} />;
}

export default ItemListContainer;


