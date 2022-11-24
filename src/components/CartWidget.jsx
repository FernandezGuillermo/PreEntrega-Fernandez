import React from "react";

const CartWidget = () =>{
    return(
        <div>
            <button type="button" className="btn btn-dark position-relative">
                <img src="images/img-carrito.png" alt="Carrito" width="32" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div>
    )
}

export default CartWidget;