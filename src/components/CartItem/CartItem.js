import { useContext } from "react";
import "./CartItem.css"
import { DataContext } from "../../context/CartItemsContext";


function CartItem({id, nombre, cantidad, precio}) {
    const {removeItem} = useContext(DataContext);
    return (
        <div className="cartItem">
            <p>{nombre}</p>
            <p>Cantidad: {cantidad}</p>
            <p>${precio.toLocaleString("de-DE")} por Unidad</p>
            <p>${(cantidad * precio).toLocaleString("de-DE")}</p>
            <button onClick={() => removeItem(id)} className="btn"> X </button>
        </div>
    )
}

export default CartItem;
