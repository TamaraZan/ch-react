import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


function ItemListContainer({greeting}) {
  const [showingCategory, setShowingCategory] = useState(null);
  const [products, setProducts] = useState(null);

  const {categoryId} = useParams();


  const productsCollectionRef = collection(db, "Productos");

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    const productData = data.docs.map((doc) => ({
      ...doc.data(),
      id:doc.id
    }))
    setShowingCategory(categoryId);
    if(categoryId) {
      setProducts(productData.filter(product => product.category === categoryId));
    } else {
      setProducts(productData);
    }
  }

  useEffect(()=>{
    getProducts()
  }, [categoryId])

  return (
      <div>
        <h2>{greeting}</h2>
        <h3>{categoryId? "Buscando " + categoryId : ""}</h3>
        {categoryId===showingCategory? <ItemList items={products}/> : <Loader/>}
      </div>
  );
}
  
  export default ItemListContainer;