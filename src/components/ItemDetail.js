import ItemCount from "./ItemCount/ItemCount";

function ItemDetail({title, category, description, price, pictureUrl, stock}) {
    // completar!!

    return (
        <div className="itemDetail card">
            <img src={pictureUrl} className="card-img-top" alt={"imagen "+title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Categoría: {category}</p>
                <p className="card-text">{price}</p>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <ItemCount stock={stock} initial={1} onAdd={(cant) => alert("Items agregados al carrito: " + cant)}/>
            </div>
        </div>
    )
}

export default ItemDetail;