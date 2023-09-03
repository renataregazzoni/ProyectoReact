import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import './ItemDetail.css'

const ItemDetail = ({id, pName, price, img, description }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
            setQuantityAdded(quantity)
            console.log("Productos agregados " + quantity)
            
            const item = {
                id,pName,price
            }
            addItem(item, quantity)
        }
    return(
        <div className="CardItem">
            <div className="Header">
                <h2 className="ItemHeader">
                   Producto: {pName}
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
                    $: {price}
                </p>
            </div>

            <footer className="ItemFooter">
                { quantityAdded > 0 ? (
                    <Link to="/cart" className="option">Terminar compra</Link>     
                ) : (<ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                )
             }
            </footer>
        </div>
    )
}

export default ItemDetail