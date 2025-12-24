import { Link } from "react-router-dom";
import Button from "./CartWidget.jsx";

function NavBar() {
  return (
    <header className="bg-black p-5 flex justify-between ">
    <h1 className="text-2xl font-bold text-[purple]">Qreativo</h1>

    <nav className=" flex gap-6">
      <Link className="text-white hover:text-blue-400" to="/">Todos</Link>
      <Link className="text-white hover:text-blue-400" to="/category/remeras">Remeras</Link>
      <Link className="text-white hover:text-blue-400" to="/category/pantalones">Pantalones</Link>
      <Link className="text-white hover:text-blue-400" to="/category/zapatillas">Zapatillas</Link>
    </nav>
    <Button text={" 🛒 0 "} styles={"bg-white text-white hover:bg-blue-400"} /> 
    
    </header>
  );
}

export default NavBar;

