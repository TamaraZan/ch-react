import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader"
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);

    const {itemId} = useParams();

    const productsCollectionRef = collection(db, "Productos");
    const fetchItemsById = async () => {
        const data = await getDocs(productsCollectionRef);
        const productData = data.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id
        }))
        setProduct(productData.find(item => item.id === itemId))
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