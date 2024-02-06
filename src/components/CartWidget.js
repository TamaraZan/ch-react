import IconoCarrito from "./icon-cart.svg";

function CartWidget() {
    return (
        <div className="cartWidget">
            <img src={IconoCarrito} alt="carrito" width="32" height="32"></img>
            <p>0</p>
        </div>
    );
  }
  
  export default CartWidget;