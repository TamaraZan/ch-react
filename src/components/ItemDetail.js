import { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({title, category, description, price, pictureUrl, stock}) {

    const [itemsAdded, setItemsAdded] = useState(0)

    return (
        <div className="itemDetail card">
            <img src={pictureUrl} className="card-img-top" alt={"imagen "+title}/>
            <div className="card-body">
                <p className="card-text">Categoría: {category}</p>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{"Stock disponible: " + stock}</p>
                <p className="card-text itemPrice">{price}</p>
            </div>
            <div className="card-footer">
                {itemsAdded? (
                    <Link to="/cart" className="btn">Ir al carrito</Link>
                ) : (
                    <ItemCount stock={stock} initial={1} onAdd={(cant) => setItemsAdded(cant)}/>
                )}
                
            </div>
        </div>
    )
}

export default ItemDetail;