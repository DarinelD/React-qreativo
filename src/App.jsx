import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Catálogo */}
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        {/* Detalle */}
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />
        <Route path="/checkout" element={<Checkout />} />

        {/* Carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<CheckoutForm />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h2 className="text-center text-2xl mt-20 text-red-500">
              404 - Página no encontrada
            </h2>
          }
        />
      </Routes>
    </>
  );
}

export default App;
