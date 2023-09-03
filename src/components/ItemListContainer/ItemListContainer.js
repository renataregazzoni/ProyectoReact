import "bulma/css/bulma.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../sevices/firebase/firebaseConfig";
import './ItemListContainer.css';




const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);


  const {categoryId} = useParams()

      useEffect(() => {
        setLoading(true);
        const collectionRef = categoryId
          ? query(collection(db, 'products'), where('IdCat', '==', categoryId))
          : collection(db, 'products');
        
        getDocs(collectionRef)
          .then(response => {
            const productsAdapted = response.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setProducts(productsAdapted); 
          })
          .catch(error => {
            console.log(error);
          });
      }, [categoryId]);
      
  



  return (

    <div className="ItemListContainer">
        <h3 className="GreetingTitle">{greeting}</h3>
        <ItemList products={products}/>
      
    </div>
  );
};
 
export default ItemListContainer;
