import Item from "./Item";

function ItemList({items}) {

    const showItems = items.map( item =>  {
        // const {id, title, description, price, pictureUrl} = item
        // return <Item key={id} title={title} description={description} price={price} pictureUrl={pictureUrl}/>
        return <Item key={item.id} {...item}/>
    } )

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {showItems}
        </div>
    )
}

export default ItemList;