import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../sevices/firebase/firebaseConfig";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);


    const { itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productsAdapted = { id: response.id, ...data}
            setProduct(productsAdapted)
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