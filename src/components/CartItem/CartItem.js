import { useContext } from "react";
import { DataContext } from "../../context/CartItemsContext";
import "./CartItem.css"


function CartItem({id, nombre, cantidad, precio, pictureUrl}) {
    const {removeItem} = useContext(DataContext);
    return (
        <div className="cartItem card">
            <picture>
                <img src={pictureUrl} alt={"Imagen de " + nombre}/>
            </picture>
            <p>{nombre}</p>
            <p>Cantidad: {cantidad}</p>
            <p>Subtotal: ${(cantidad * precio).toLocaleString("de-DE")}</p>
            <button onClick={() => removeItem(id)} className="btn"> 𐌢 </button>
            {/*  🗑  ⤫ 𐌢 𐌗 ❌ */}
        </div>
    )
}

export default CartItem;