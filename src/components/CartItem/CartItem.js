import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const CartItem = ({ item, quantity }) => {
  const { removeProduct } = useContext(CartContext)
  return (
    <div className="grid grid-cols-4 pl-6">
      <p> {item.pName} </p>
      <p>Cantidad: {quantity}</p>
      <p>Precio: {item.price}</p>
      <button
        className="btn btn-sm btn-outline btn-warning h-14 w-20"
        onClick={() => removeProduct(item.id)}
      >
        Eliminar artículo
      </button>
    </div>
  )
}

export default CartItem