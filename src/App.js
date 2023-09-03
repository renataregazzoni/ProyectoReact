import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bulma/css/bulma.css"
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Context/CartContext";
import { db } from "./sevices/firebase/firebaseConfig";
import {getDocs, collection} from "firebase/firestore"



function App(){
    return(
        <div className="App">
            <BrowserRouter>
            <CartProvider>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting={"Todos los productos."}/>}/>
                <Route path='/category/categoryId' element={<ItemListContainer greeting={"Prodcutos por categoria."}/>}/>
                <Route path='/item/:iditem' element={<ItemDetailContainer />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path='*' element={<h1>404 NOT FOUND </h1>}/>

            </Routes>
            </CartProvider>
            </BrowserRouter>
           
        </div>
            
    )
}

export default App;






//<NavBar/>
//<ItemListContainer greeting={"Descubre la magia de la cerámica."}/> 
