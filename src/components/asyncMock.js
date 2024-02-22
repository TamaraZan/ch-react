const items = [
    // {
    //     "title": "",
    //     "id": 1,
    //     "category": "notebooks",
    //     "description": "esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1",
    //     "price": "$",
    //     "pictureUrl": "",
    //     "stock": 0
    // },
    {
        "title": 'Galaxy Book3 Pro (14",i5,16GB)',
        "id": 101,
        "category": "notebooks",
        "description": 'Marca: Samsung, sistema operativo: Windows 11 Home, display: 14.0", procesador: Intel® Core™ i5-1340P, memoria: 16 GB',
        "price": "$3.431.999",
        "pictureUrl": "https://samsungar.vtexassets.com/arquivos/ids/188996",
        "stock": 0
    },
    {
        "title": 'MacBook Air de 13"',
        "id": 102,
        "category": "notebooks",
        "description": 'La MacBook Air con chip M1 es una laptop superportátil, versátil y rápida. Tiene una increíble pantalla Retina, un diseño delgado y sin ventilador que la hace muy silenciosa y una batería que te acompaña todo el día. Esta MacBook Air vuela.',
        "price": "$1.399.999",
        "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_927163-MLA48622311771_122021-O.webp",
        "stock": 1
    },
    {
        "title": 'Galaxy S21 FE 5G Graphite 128GB',
        "id": 201,
        "category": "cellphones",
        "description": "Marca: Samsung, Procesador: Octa-Core, Camara frontal: 32.0 MP, Camara trasera: 12.0 MP + 12.0 MP + 8.0 MP, Memoria interna: 128 - 256, Tamaño de pantalla: 155.7 x 74.5 x 7.9",
        "price": "$1.132.999",
        "pictureUrl": "https://samsungar.vtexassets.com/arquivos/ids/191579",
        "stock": 2
    },
    {
        "title": 'iPhone 14 (128 Gb)',
        "id": 202,
        "category": "cellphones",
        "description": 'El iPhone 14 viene con el sistema de dos cámaras más impresionante en un iPhone 14, para que tomes fotos espectaculares con mucha o poca luz. Y te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas.',
        "price": "$1.136.999",
        "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_918579-MLM51559384401_092022-O.webp",
        "stock": 3
    },
    {
        "title": 'Galaxy Tab A9+ Graphite',
        "id": 301,
        "category": "tablets",
        "description": 'Elegantes y modernas, las Galaxy Tab A9 y Tab A9+ presentan un diseño elegante y un cuerpo de metal liso. Disfrutá del diseño de tablet exclusivo de Samsung en Graphite, Silver y Navy.',
        "price": "$499.999",
        "pictureUrl": "https://samsungar.vtexassets.com/arquivos/ids/193454",
        "stock": 4
    },
    {
        "title": 'iPad Apple 10th generation 10.9" 64GB',
        "id": 302,
        "category": "tablets",
        "description": 'El iPad enamora a primera vista. Tiene una pantalla Liquid Retina de 10.9 pulgadas con diseño de borde a borde perfecta para trabajar, darles forma a tus ideas y hacer videollamadas. Además, viene en cuatro colores que van a alegrar tus días.1 Y si lo combinas con los accesorios diseñados especialmente para el iPad, tus posibilidades no tendrán fin.',
        "price": "$699.000",
        "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_764857-MLA52988770506_122022-O.webp",
        "stock": 5
    },

    // {
    //     "title": "tilulo num: 1",
    //     "id": 111,
    //     "category": "notebooks",
    //     "description": "esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1esto es una descripcion para el producto numero: 1",
    //     "price": "$100",
    //     "pictureUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg",
    //     "stock": 5
    // },
    // {
    //     "id": 222,
    //     "title": "tilulo num: 2",
    //     "category": "notebooks",
    //     "description": "esto es una descripcion para el producto numero: 2",
    //     "price": "$200",
    //     "pictureUrl": "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_960_720.jpg",
    //     "stock": 10
    // },
    // {
    //     "id": 333,
    //     "title": "tilulo num: 3",
    //     "category": "cellphones",
    //     "description": "esto es una descripcion para el producto numero: 3",
    //     "price": "$300",
    //     "pictureUrl": "https://picsum.photos/200",
    //     "stock": 15
    // },
    // {
    //     "id": 444,
    //     "title": "tilulo num: 4",
    //     "category": "cellphones",
    //     "description": "esto es una descripcion para el producto numero: 4",
    //     "price": "$400",
    //     "pictureUrl": "https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_960_720.jpg",
    //     "stock": 20
    // },
    // {
    //     "id": 555,
    //     "title": "tilulo num: 5",
    //     "category": "tablets",
    //     "description": "esto es una descripcion para el producto numero: 5",
    //     "price": "$500",
    //     "pictureUrl": "https://cdn.pixabay.com/photo/2013/07/12/12/58/tv-test-pattern-146649_960_720.png",
    //     "stock": 25
    // }
]


export const fetchItems = () => {
    return new Promise( (resolve) => {setTimeout(() => {
        resolve(items)
    }, 2000)})
}

export const fetchItemsById = (itemId) => {
    return new Promise( (resolve) => {setTimeout(() => {
        resolve(items.find(item => item.id === Number(itemId)))
    }, 2000)})
}

export const fetchItemsByCateg = (categoryId) => {
    return new Promise( (resolve) => {setTimeout(() => {
        resolve(items.filter(item => item.category === categoryId))
    }, 2000)})
}
