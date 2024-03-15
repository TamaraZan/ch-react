import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

function Checkout() {
    const [idCompra, setIdCompra] = useState(null);

    return (
        <section className="d-flex justify-content-center">
            {idCompra? <div>El id de la orden de compra es: {idCompra}</div> : <CheckoutForm onConfirm={setIdCompra}/>}
        </section>
    )
}

export default Checkout;