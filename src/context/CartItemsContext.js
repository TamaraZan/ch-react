import { createContext, useState } from "react";

export const DataContext = createContext();


function CartItemsContext({children}) {
    const [ cartItems, setCartItems ] = useState([]);

    const idInCart = (itemId) => cartItems.some(({id}) => itemId === id);


    const clear = () => setCartItems([]);

    const removeItem = (itemId) => {
        if(idInCart(itemId)) 
            setCartItems(cartItems.filter(({id}) => id !== itemId));
    }

    const addItem = (itemData) => {
        if(!idInCart(itemData.id)) 
            setCartItems(prev => [...prev, itemData])
        else
            alert("Este producto ya fue agregado al carrito.")
    }
    

    return (
        <DataContext.Provider value={{cartItems, clear, removeItem, addItem}}>
            {children}
        </DataContext.Provider>
    )
}

export default CartItemsContext;
