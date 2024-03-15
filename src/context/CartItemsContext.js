import { createContext, useState } from "react";

export const DataContext = createContext();


function CartItemsContext({children}) {
    const [ cartItems, setCartItems ] = useState([]);

    const idInCart = (itemId) => cartItems.some(({id}) => itemId === id);


    const clearCart = () => setCartItems([]);

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
    
    const cartTotalPrice = () => {
        let total = 0;
        cartItems.forEach( item => total += item.precio * item.cantidad);
        return total;
    }
    // cartTotal = () => cartItems.reduce((prev, current) => prev + current.precio * current.cantidad, 0);


    return (
        <DataContext.Provider value={{cartItems, clearCart, removeItem, addItem, cartTotalPrice}}>
            {children}
        </DataContext.Provider>
    )
}

export default CartItemsContext;
