import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/Slice";

const Cart = ()=>{

    const cleardispatch = useDispatch()

    const handleClearcart = ()=>{
        cleardispatch(clearCart())
    }

    const cartItem = useSelector(store=> store.cart.items)

    return(
        <div className="text-center m-4 p-4">

          <h1 className="text-2xl font-bold">Cart</h1>
          <button className="p-3 my-2 flex m-auto justify-center bg-black text-white rounded-lg" onClick={handleClearcart}>ClearCart</button>
            <div className="w-6/12  flex m-auto justify-center">
           {cartItem.length === 0 && <h1 className="font-bold text-lg">Your cart is empty Add items</h1>}
                <ItemList items={cartItem}/>
            </div>
        </div> 
    )
}


export default Cart;