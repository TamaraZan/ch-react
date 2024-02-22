import { Link } from "react-router-dom";
import "./Item.css"

// { id, title, description, price, pictureUrl }

function Item({id, title, price, pictureUrl}) {
    return (
        <div className="col item" key={id}>
            <div className="card h-100">
                <img src={pictureUrl} className="card-img-top" alt={"imagen "+title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text itemPrice">{price}</p>
                </div>
                <div className="card-footer">
                    <Link className="btn" to={"/product/"+id}>Ver detalles</Link>
                </div>
            </div>
        </div> 
    )
}

export default Item;