import { Link } from "react-router-dom"
import './Item.css';

const Item = ({id, pName, img, price, stock,}) => {
    return (
        <div className="CardItem">
            <div className="Header">
                <h2 className="ItemHeader">
                    {pName}
                </h2>
            </div>
            <div>
                <img src={img}  alt={pName} className="ItemTag"/>
            </div>
            <div>
                <p className="Info">
                    Price: ${price}
                </p>
                <p className="Info">
                    Stock: ${stock}
                </p>
            </div>
            <div className="ItemFooter">
                    <Link to={`/items/${id}`} className="Option">Ver Detalle</Link>
             </div>
        </div>
    )

}

export default Item