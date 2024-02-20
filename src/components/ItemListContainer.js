import { useState, useEffect } from "react";
import ItemCount from "./ItemCount/ItemCount";
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
      <main>
        <h2>{greeting}</h2>
        <ItemList items={productos}/>
        <ItemCount stock={5} initial={1} onAdd={(cant) => alert("Items agregados al carrito: " + cant)}/>
      </main>
  );
}
  
  export default ItemListContainer;