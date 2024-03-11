import IconoCarrito from "../../assets/icon-cart.svg";
import "./CartWidget.css"
import { useContext } from "react";
import { DataContext } from "../../context/CartItemsContext";


function CartWidget() {
    const {cartItems} = useContext(DataContext);
    
    // useState? useEffect? para que se actualice cartItems
    const cantCartItem = cartItems.length;

    return (
        <div>
            {cantCartItem? 
                <div className="cartWidget">
                    <img src={IconoCarrito} alt="carrito" width="32" height="32"/>
                    <p>{cantCartItem}</p>
                </div> :
                ""
                // no es muy agradable...
            }
        </div>
    );
  }
  
  export default CartWidget;