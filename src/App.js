import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

import "./App.css"

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a la entrega de React"}/>
    </div>
  );
}

export default App;
