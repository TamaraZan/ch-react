import IconoCarrito from "../../assets/icon-cart.svg";
import "./CartWidget.css"
import { useContext } from "react";
import { DataContext } from "../../context/CartItemsContext";
import { Link } from "react-router-dom";


function CartWidget() {
    const {cartItems} = useContext(DataContext);
    
    const cantCartItem = cartItems.length;
    // cuenta la cantidad de productos distintos agergados
    // si se quiere contar los repetidos se puede hacer:
        // cartTotalCant = () => cartItems.reduce((prev, current) => prev + current.cantidad, 0)

    let show;
    if(cantCartItem) {
        show = (
            <Link to="/cart" className="cartWidget">
                <img src={IconoCarrito} alt="carrito" width="32" height="32"/>
                <p>{cantCartItem}</p>
            </Link>
        )
    }
    
    return (
        <div>
            {show}
        </div> 
    );
  }
  
  export default CartWidget;