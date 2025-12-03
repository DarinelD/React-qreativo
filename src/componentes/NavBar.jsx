import Button from "./CartWidget.jsx";
function NavBar() {
  return (
    <header className="bg-black p-5 flex justify-between ">
        <h1 className="text-2xl font-bold text-[purple]">Qreativo</h1>
      <nav className="flex gap-4 ">
        <a href="#" className="text-white hover:text-[purple]">Lonas</a>
        <a href="#" className="text-white hover:text-[purple]">Tazas</a>
        <a href="#" className="text-white hover:text-[purple]">Playeras</a>
        <a href="#" className="text-white hover:text-[purple]">Gorras</a>
        <a href="#" className="text-white hover:text-[purple]">Termos</a>
      </nav>
       <Button text={" 🛒 0 "} styles={"bg-white text-black hover:bg-blue-700"} /> 
    </header>
  )
}
export default NavBar