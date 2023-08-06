import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "bulma/css/bulma.css"

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <Link to='/'>
            <h1 className="title has-text-centered is-1">ClayCrafted</h1>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/tazas'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Tazas</NavLink>
                <NavLink to={'/category/platos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Platos</NavLink>
                <NavLink to={'/category/portaVasos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>PortaVasos</NavLink>
                <NavLink to={'/category/velas'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Velas</NavLink>
            </div>
        
           
            <CartWidget />
        </nav>
    )

}

export default NavBar;
