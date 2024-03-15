import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./pages/CartContainer/CartContainer";
import Checkout from "./pages/Checkout";
import CartItemsContext from "./context/CartItemsContext";

import { BrowserRouter, Route , Routes } from "react-router-dom";
// import { Outlet } from "react-router-dom";

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <CartItemsContext>
        <NavBar/>
        <main>
          <Routes>
            {/* <Route path="/" element={<div> <NavBar/> <Outlet/> </div>}> */}
            <Route path="/">
              <Route  path="/" element= {<ItemListContainer greeting={"Bienvenidos a la entrega de React"}/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer  greeting={"Productos por categoría"}/>}/>
              <Route path="/product/:itemId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartContainer/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
            </Route>
            <Route path="*" element={<h2>404 page not found</h2>}/>
          </Routes>
        </main>
      </CartItemsContext>
    </BrowserRouter>
  );
}

export default App;
