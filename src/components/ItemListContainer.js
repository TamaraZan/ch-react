import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {fetchItems} from "./asyncMock";


function ItemListContainer({greeting}) {
  const [productos, setProducts] = useState([])

  useEffect( () => {
    fetchItems()
      .then( res => setProducts(res) )
      .catch( err => alert("Error al cargar los productos. " + err) )
  }, [])

  return (
      <div>
        <h2>{greeting}</h2>
        <ItemList items={productos}/>
      </div>
  );
}
  
  export default ItemListContainer;