import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { fetchItems, fetchItemsByCateg } from "./asyncMock";
import { useParams } from "react-router-dom";


function ItemListContainer({greeting}) {
  const [productos, setProducts] = useState([])

  const {categoryId} = useParams();

  useEffect( () => {
    const fetchFunction = categoryId? fetchItemsByCateg : fetchItems;
    // fetchItems()
    //   .then( res => setProducts(categoryId? res.filter((prod) => categoryId === prod.category): res) )
    fetchFunction(categoryId)
      .then( res => setProducts(res) )
      .catch( err => alert("Error al cargar los productos. " + err) )
  }, [categoryId])

  return (
      <div>
        <h2>{greeting}</h2>
        <h3>{categoryId? "Buscando " + categoryId : ""}</h3>
        <ItemList items={productos}/>
      </div>
  );
}
  
  export default ItemListContainer;