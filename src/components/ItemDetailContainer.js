import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { fetchItemsById } from "./asyncMock";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);

    const {itemId} = useParams();

    useEffect(() => {
        fetchItemsById(itemId)
            .then( res => setProduct(res) )
            .catch( err => alert("Error al cargar el producto. " + err ))
    }, [itemId])

    return (
        <div className="detailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;