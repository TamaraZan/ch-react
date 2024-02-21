const items = [
    {
        "title": "tilulo num: 1",
        "id": 111,
        "category": "category",
        "description": "esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1",
        "price": "$100",
        "pictureUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg",
        "stock": 5
    },
    {
        "id": 222,
        "title": "tilulo num: 2",
        "category": "category",
        "description": "esto es una descripcion para el producto numero: 2",
        "price": "$200",
        "pictureUrl": "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_960_720.jpg",
        "stock": 10
    },
    {
        "id": 333,
        "title": "tilulo num: 3",
        "category": "category",
        "description": "esto es una descripcion para el producto numero: 3",
        "price": "$300",
        "pictureUrl": "https://picsum.photos/200",
        "stock": 15
    },
    {
        "id": 444,
        "title": "tilulo num: 4",
        "category": "category",
        "description": "esto es una descripcion para el producto numero: 4",
        "price": "$400",
        "pictureUrl": "https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_960_720.jpg",
        "stock": 20
    },
    {
        "id": 555,
        "title": "tilulo num: 5",
        "category": "category",
        "description": "esto es una descripcion para el producto numero: 5",
        "price": "$500",
        "pictureUrl": "https://cdn.pixabay.com/photo/2013/07/12/12/58/tv-test-pattern-146649_960_720.png",
        "stock": 25
    }
]


export const fetchItems = () => {
    return new Promise( (resolve) => {setTimeout(() => {
        resolve(items)
    }, 2000)})
}

export const fetchItemsById = (itemId) => {
    return new Promise( (resolve) => {setTimeout(() => {
        resolve(items.find(item => item.id === itemId))
    }, 2000)})
}
