import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { fetchItemsById } from "./asyncMock";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetchItemsById(111)
            .then( res => setProduct(res) )
            .catch( err => alert("Error al cargar el producto. " + err ))
    }, [])

    return (
        <div className="detailContainer">
            <ItemDetail {...product}/>
            
        </div>
    )
}

export default ItemDetailContainer;