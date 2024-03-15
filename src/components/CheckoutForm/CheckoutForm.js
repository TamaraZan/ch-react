import { useState, useContext } from "react";
import { DataContext } from "../../context/CartItemsContext";
import { db } from "../../firebase/firebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import "./CheckoutForm.css"

function CheckoutForm({onConfirm}) {
    const [ name, setName ] = useState(null)
    const [ tel, setTel ] = useState(null)
    const [ mail, setMail ] = useState(null)

    const {cartItems, clearCart, cartTotalPrice} = useContext(DataContext);

    const formsRef = collection(db, "Formularios de compra");
    const sendForm = async (event) => {
        event.preventDefault();
        const datos = {
            comprador: {
                nombre: name,
                numeroTelefono: tel,
                email: mail,
            },
            productos: cartItems,
            total: cartTotalPrice(),
            fecha: Timestamp.fromDate(new Date())
        };
        const newOrderRef = await addDoc(formsRef, datos);
        clearCart(); // borra los items del carrito

        onConfirm(newOrderRef.id);
    }
    return (
        <form className="checkout card">
            <label htmlFor="chkout-name">Tu nombre: </label>
            <input id="chkout-name" placeholder="Nombre" onChange={e => setName(e.target.value)}/>
            <label htmlFor="chkout-tel">Tu número de teléfono: </label>
            <input id="chkout-tel" placeholder="Numero de telefono" type="tel" onChange={e => setTel(e.target.value)}/>
            <label htmlFor="chkout-mail">Tu e-mail: </label>
            <input id="chkout-mail" placeholder="E-mail" type="email" onChange={e => setMail(e.target.value)}/>
            <button onClick={sendForm} className="btn"> Comprar </button>
        </form>
    )
}

export default CheckoutForm;