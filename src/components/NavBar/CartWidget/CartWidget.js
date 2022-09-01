
//CartWidget
import {Link} from "react-router-dom"
import iconCart from './icon-cart.png'


import { CartContext } from "../../../Context/CartContext"
import { useContext } from "react"


function CartWidget () {

    const { cantInCart } = useContext(CartContext)
    
    return (

        <div>
        <Link to="/cart">
        <img src={iconCart} width="40px"/>
        </Link>
        {   cantInCart == 0 ? "" : (cantInCart) }
        </div>

    )
}

export default CartWidget;