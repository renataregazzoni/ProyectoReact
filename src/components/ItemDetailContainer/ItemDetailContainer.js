import { useState, useEffect } from "react";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(resolve => {
            setProduct(resolve)
        })
        .catch(error => {
            console.error(error)
        })
        
    }, [itemId] )

    return(
        <div className="ItemDetalContainer">
            <ItemDetail {...product}/>
        </div>
    )
     }
      export default ItemDetailContainer