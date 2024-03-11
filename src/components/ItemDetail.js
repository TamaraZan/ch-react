import { useState, useContext } from "react";
import ItemCount from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { DataContext } from "../context/CartItemsContext";


function ItemDetail({itemId, title, category, description, price, pictureUrl, stock}) {
    const [itemsAdded, setItemsAdded] = useState(0)

    const {addItem} = useContext(DataContext);


    function onAddItems(cant) {
        setItemsAdded(cant);
        addItem({"id": itemId,
                "nombre": title,
                "precio": price,
                "cantidad": cant});

    }

    return (
        <div className="itemDetail card">
            <img src={pictureUrl} className="card-img-top" alt={"imagen "+title}/>
            <div className="card-body">
                <p className="card-text">Categoría: {category}</p>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{"Stock disponible: " + stock}</p>
                <p className="card-text itemPrice">${price.toLocaleString("de-DE")}</p>
            </div>
            <div className="card-footer">
                {itemsAdded? (
                    <Link to="/cart" className="btn">Ir al carrito</Link>
                ) : (
                    <ItemCount stock={stock} initial={1} onAdd={(cant) => onAddItems(cant)}/>
                )}
            </div>
        </div>
    )
}

export default ItemDetail;