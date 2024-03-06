import "./ItemCount.css"
import { useState } from "react";
import cartIcon from "../../assets/icon-cart.svg"

function ItemCount({stock, initial, onAdd}) {
    function handleClickMas(){
        if (count < stock) setCount(count + 1);
    }
    function handleClickMenos(){
        if (count > 1) setCount(count - 1);
    }

    const [count, setCount] = useState(initial);

    return (
        <div className="itemCount">
            <div className="controls">
                <button className="btn" onClick={handleClickMenos} disabled={count<2}> - </button>
                <p>{stock? count : 0}</p>
                <button className="btn" onClick={handleClickMas} disabled={count>=stock}> + </button>
            </div>
            <button className="btn cartBtn" onClick={() => onAdd(count)} disabled={!stock}>
                <p>Agregar al carrito</p>
                <img src={cartIcon} alt="Icono de carrito"/>
            </button>
        </div>
    )
}

export default ItemCount;