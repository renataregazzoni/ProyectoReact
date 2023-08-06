import "bulma/css/bulma.css";
import { useState, useEffect } from "react";
import { getProducts} from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";





const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
    
      .then(resolve =>{
        setProducts(resolve)
      })
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])
  



  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <h3 className="subtitle has-text-centered">{greeting}</h3>
        <ItemList products={products}/>
      </div>
    </div>
  );
};

export default ItemListContainer;
