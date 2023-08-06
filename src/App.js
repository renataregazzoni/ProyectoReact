import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bulma/css/bulma.css"


function App(){
    return(
        <div className="App">
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/categoryId' element={<ItemListContainer/>}/>
                <Route path='/item/:iditem' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<h1>404 NOT FOUND </h1>}/>

            </Routes>
            </BrowserRouter>
           
        </div>
            
    )
}

export default App;






//<NavBar/>
//<ItemListContainer greeting={"Descubre la magia de la cerámica."}/> 
