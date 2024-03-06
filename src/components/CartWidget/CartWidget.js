import IconoCarrito from "../../assets/icon-cart.svg";
import "./CartWidget.css"

function CartWidget() {
    return (
        <div className="cartWidget">
            <img src={IconoCarrito} alt="carrito" width="32" height="32"/>
            <p>0</p>
        </div>
    );
  }
  
  export default CartWidget;