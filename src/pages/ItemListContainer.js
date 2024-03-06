import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { fetchItems, fetchItemsByCateg } from "../components/asyncMock";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";


function ItemListContainer({greeting}) {
  const [showingCategory, setShowingCategory] = useState(null);
  const [productos, setProducts] = useState(null);

  const {categoryId} = useParams();

  useEffect( () => {
    const fetchFunction = categoryId? fetchItemsByCateg : fetchItems;
    fetchFunction(categoryId)
      .then( res => {
        setShowingCategory(categoryId);
        return setProducts(res);
      } )
      .catch( err => alert("Error al cargar los productos. " + err) )
  }, [categoryId])

  return (
      <div>
        <h2>{greeting}</h2>
        <h3>{categoryId? "Buscando " + categoryId : ""}</h3>
        {categoryId===showingCategory? <ItemList items={productos}/> : <Loader/>}
      </div>
  );
}
  
  export default ItemListContainer;