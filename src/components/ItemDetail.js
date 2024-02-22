import ItemCount from "./ItemCount/ItemCount";

function ItemDetail({title, category, description, price, pictureUrl, stock}) {
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
                <ItemCount stock={stock} initial={1} onAdd={(cant) => alert("Items agregados al carrito: " + cant)}/>
            </div>
        </div>
    )
}

export default ItemDetail;