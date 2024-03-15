import { useContext } from "react";
import { DataContext } from "../../context/CartItemsContext";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import "./CartContainer.css"


function CartContainer() {
    const {cartItems, clearCart, cartTotalPrice} = useContext(DataContext);
    const cartDetails = cartItems.map( item => <CartItem {...item} key={item.id}/> )

    return (
        <div className="cartContainer">
            <h1>Tu carrito:</h1>
            {cartDetails}
            <h3 className="total">Total: ${cartTotalPrice().toLocaleString("de-DE")}</h3>
            <div className="cartButtons">
                <button onClick={clearCart} className="btn"> Borrar todo </button>
                <Link to="/checkout" className="btn"> Check out </Link>
            </div>
        </div>
    )
}

export default CartContainer;