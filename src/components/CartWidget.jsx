import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{
    const {cartTotal} = useContext(CartContext);
    return(
        <div>
            <Link to={"/cart"} className="cart-btn btn position-relative">
                <img src="images/img-carrito.png" alt="Carrito" width="32" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
            </Link>
        </div>
    )
}

export default CartWidget;