import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemListContainer/ItemList";
import "bulma/css/bulma.css"

function App(){
    return(
        <div>
            <NavBar/>

            <ItemList greeting={"Descubre la magia de la cerámica"}/> 
        </div>
            
    )
}

export default App;