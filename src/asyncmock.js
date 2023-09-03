const products = [
    {
        id: '1',
        pName: 'Taza',
        price: 3462,
        img: "..src/img/tazaFlores.jpg",
        stock: 15,
        description: 'Tazones florales hechos de ceramica',
        idCat: '1',
    },

    {
        id: '2',
        pName: 'Plato',
        price: 4600,
        img: "..src/img/platosFlores.jpg",
        stock: 10,
        description: 'Platos florales hechos de ceramica',
        idCat: '2',
    },

    {
        id: '3',
        pName: 'Porta Vasos set x3',
        price: 2700,
        img: "..src/img/portaVasos.jpg",
        stock: 10,
        description: 'Porta vasos florales hechos de ceramica',
        idCat: '3',
    },

    {
        id: '4',
        pName: 'Vela',
        price: 2800,
        img: "..src/img/velasFlores.jpg",
        stock: 10,
        description: 'Velas de soja con porta velas de ceramica decorados con flores',
        idCat: '4'
    },
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    } )
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.idCat === categoryId) 
            resolve(product)
        }, 500)
    }
    )
}