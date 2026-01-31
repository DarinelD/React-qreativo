import { useCart } from "../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <div className="text-white font-bold">
      🛒 {totalQuantity}
    </div>
  );
}

export default CartWidget;
