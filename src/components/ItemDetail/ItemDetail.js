import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({pName, price, img, description }) => {
    return(
        <div className="CardItem">
            <div className="Header">
                <h2 className="ItemHeader">
                    {pName}
                </h2>
            </div>
            <div>
                <img src={img} alt={pName} className="ItemTag"/>
            </div>
            <div>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Descripcion: {price}
                </p>
            </div>

            <div>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ' ,quantity)}/>
            </div>
        </div>
    )
}

export default ItemDetail