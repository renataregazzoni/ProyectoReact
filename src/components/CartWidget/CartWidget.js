import cart from "./assets/cart.svg"
import "bulma/css/bulma.css"

const CartWidget = () =>{
    return (
        <div className="cart-container is-pulled-right"> 
            <img src={cart} alt="cart-widget"/>
            0
        </div>
        
    )
}

export default CartWidget;