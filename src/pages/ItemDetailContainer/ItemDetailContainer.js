import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader"
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);

    const {itemId} = useParams();

    const productRef = doc(db, "Productos", itemId);
    const fetchItemsById = async () => {
        const data = await getDoc(productRef);
        const productData = { ...data.data(), id:data.id };
        setProduct(productData);
    }

    useEffect(() => {
        fetchItemsById()
    }, [])

    return (
        <div className="detailContainer">
            {product? <ItemDetail {...product} itemId={itemId}/> : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer;