import { NavLink, Link, useLocation } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';


const NavBar = () =>{
    const location = useLocation();
    return(
        <nav className="NavBar navbar-expand-lg navbar-light bg-light">
            <Link to='/'>
            <h1 className="navbar-brand">ClayCrafted</h1>
            </Link>
            <div className="Categories">
               
                <NavLink to={'/category/tazas'} className={`nav-link ${location.pathname ? 'ActiveOption' : 'Option'}`}>Tazas</NavLink>
                <NavLink to={'/category/platos'} className={`nav-link ${location.pathname ? 'ActiveOption' : 'Option'}`}>Platos</NavLink>
                <NavLink to={'/category/portaVasos'} className={`nav-link ${location.pathname ? 'ActiveOption' : 'Option'}`}>Porta Vasos</NavLink>
                <NavLink to={'/category/velas'} className={`nav-link ${location.pathname ? 'ActiveOption' : 'Option'}`}>Velas</NavLink>



            </div>
        
           
            <CartWidget />
        </nav>
    )

}

export default NavBar;
