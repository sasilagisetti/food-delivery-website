import { useDispatch, useSelector, UseSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="font-serif text-lg font-semibold underline">
        This is cart Page
      </h1>
      
      {cartItems.length === 0 ? <h1>Cart is Empty!</h1>:<button
        className="bg-black text-white font-bold my-4 py-2 px-4"
        onClick={handleClearCart}
      >
        ClearCart
      </button>}
      <CartItems list={cartItems} />
    </div>
  );
};

export default CartPage;
