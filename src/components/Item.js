// { id, title, description, price, pictureUrl }

function Item({id, title, price, pictureUrl}) {
    return (
        <div className="col" key={id}>
            <div className="card h-100">
                <img src={pictureUrl} className="card-img-top" alt={"imagen "+title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    {/* <p className="card-text">{description}</p> */}
                </div>
                <div className="card-footer">
                    <button className="w-100">Ver detalles</button>
                </div>
            </div>
        </div> 
    )
}

export default Item;