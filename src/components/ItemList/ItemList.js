import Item from "../Item/Item"
import './ItemList.css';
const ItemList = ({products }) => {
    return(
        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id} />)}
        </div>
    )
}

export default ItemList