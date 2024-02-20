const items = [
    {
        "id": 111,
        "title": "tilulo num: 1",
        "description": "esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1",
        "price": "$100",
        "pictureUrl": "../NavBar/logo.png"
    },
    {
        "id": 222,
        "title": "tilulo num: 2",
        "description": "esto es una descripcion para el producto numero: 2",
        "price": "$200",
        "pictureUrl": "..."
    },
    {
        "id": 333,
        "title": "tilulo num: 3",
        "description": "esto es una descripcion para el producto numero: 3",
        "price": "$300",
        "pictureUrl": "..."
    },
    {
        "id": 444,
        "title": "tilulo num: 4",
        "description": "esto es una descripcion para el producto numero: 4",
        "price": "$400",
        "pictureUrl": "..."
    },
    {
        "id": 555,
        "title": "tilulo num: 5",
        "description": "esto es una descripcion para el producto numero: 5",
        "price": "$500",
        "pictureUrl": "..."
    }
]


export const fetchItems = () => {
    return new Promise( (resolve) => {setTimeout(() => {
        resolve(items)
    }, 2000)})
}
