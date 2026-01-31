import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
  .then((res) => {
    const products = res.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(products);
  })
  .catch((error) => {
    console.error("ERROR FIRESTORE:", error);
  })
  .finally(() => {
    setLoading(false);
  });
  }, [categoryId]);

  if (loading) {
  return (
    <p className="text-center mt-10 text-xl">
      Cargando productos...
    </p>
  );
}

if (items.length === 0) {
  return (
    <p className="text-center mt-10 text-xl">
      No hay productos en esta categoría
    </p>
  );
}

return <ItemList items={items} />;

}


export default ItemListContainer;
