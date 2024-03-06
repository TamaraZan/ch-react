import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { fetchItemsById } from "../components/asyncMock";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader"

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
            {product? <ItemDetail {...product}/> : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer;