import "./ItemCount.css"
import { useState } from "react";
import cartIcon from "../icon-cart.svg"

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
                <button onClick={handleClickMenos}> - </button>
                <p>{count}</p>
                <button onClick={handleClickMas}> + </button>
            </div>
            <button className="cartBtn" onClick={() => onAdd(count)} disabled={!stock}>
                <img src={cartIcon}/>
            </button>
        </div>
    )
}

export default ItemCount;