import Item from "./Item/Item";

function ItemList({items}) {

    const showItems = items.map( item => <Item key={item.id} {...item}/> )

    return (
        <div className="itemList row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0">
            {showItems}
        </div>
    )
}

export default ItemList;