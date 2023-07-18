import CartWidget from "../CartWidget/CartWidget";
import "bulma/css/bulma.css"

const NavBar = () =>{
    return(
        <nav>
            <section className="hero is-warning">
                <div className="hero-body">
                    <h1 className="title has-text-centered">ClayCrafted</h1>
                </div>
            </section>
        
            <div className="buttons is-centered is-spaced">
                <button className="button is-rounded">Inicio</button>
                <button className="button is-rounded">Productos</button>
                <button className="button is-rounded">Turnos</button>
            </div>
            <CartWidget />
        </nav>
    )

}

export default NavBar;
