import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { BrowserRouter, Route , Routes } from "react-router-dom";
// import { Outlet } from "react-router-dom";

import "./App.css"

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <main>
          <Routes>
            {/* <Route path="/" element={<div> <NavBar/> <Outlet/> </div>}> */}
            <Route path="/">
              <Route index element= {<ItemListContainer greeting={"Bienvenidos a la entrega de React"}/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer  greeting={"Productos por categoría"}/>}/>
              <Route path="/product/:itemId" element={<ItemDetailContainer/>}/>
            </Route>
            <Route path="*" element={<h2>404 page not found</h2>}/>
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
