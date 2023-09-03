import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart (prev => [...prev, {...item,quantity}])
            setTotal((prev) => prev + item.price * quantity)
        }else {
            console.error("El producto ya fue agregado.")
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter (prod=> prod.id !== itemId)
        setCart(cartUpdated)
        setTotal(
            (prev) =>
              prev - removeItem.item.price * removeItem.quantity
          )
    }
    const clearCart = () => {
        setCart([])
        setTotal(0)
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total}}> 
        { children }
        </CartContext.Provider>
    )
}

