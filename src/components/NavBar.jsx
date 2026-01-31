import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header className="bg-black p-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[purple]">Qreativo</h1>

      <nav className="flex gap-6">
        <Link className="text-white hover:text-blue-400" to="/">
          Todos
        </Link>
        <Link className="text-white hover:text-blue-400" to="/category/tazas">
          Tazas
        </Link>
        <Link className="text-white hover:text-blue-400" to="/category/playeras">
          Playeras
        </Link>
        <Link className="text-white hover:text-blue-400" to="/category/gorras">
          Gorras
        </Link>
        <Link className="text-white hover:text-blue-400" to="/category/termos">
          Termos
        </Link>
        <Link className="text-white hover:text-blue-400" to="/category/lonas">
          Lonas
        </Link>
        <Link className="text-white hover:text-blue-400" to="/category/promocionales">
          Promocionales
        </Link>
      </nav>

      {/* Carrito */}
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
}

export default NavBar;
