import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import "./App.css"

function App() {
  return (
    <div>
      <NavBar/>
      <main>
        <ItemListContainer greeting={"Bienvenidos a la entrega de React"}/>
        <ItemDetailContainer/>
      </main>
    </div>
  );
}

export default App;
