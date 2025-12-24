import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then(setItem);
  }, [itemId]);

  return item ? <ItemDetail {...item} /> : <p>Cargando...</p>;
}

export default ItemDetailContainer;
