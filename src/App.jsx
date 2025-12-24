import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <>
    
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
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
