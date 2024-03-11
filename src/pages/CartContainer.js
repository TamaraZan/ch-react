import { useContext } from "react";
import { DataContext } from "../context/CartItemsContext";
import CartItem from "../components/CartItem/CartItem";


function CartContainer() {
    const {cartItems, clear} = useContext(DataContext);
    const cartDetails = cartItems.map( item => <CartItem {...item} key={item.id}/> )

    return (
        <div>
            <div>
                {cartDetails}
            </div>
            <button onClick={clear} className="btn"> Borrar todo </button>
        </div>
    )
}

export default CartContainer;