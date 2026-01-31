import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then(res => {
        if (res.exists()) {
          setItem({ id: res.id, ...res.data() });
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return <p className="text-center mt-20">Cargando producto...</p>;
  }

  if (!item) {
    return <p className="text-center mt-20">Producto no encontrado</p>;
  }

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
