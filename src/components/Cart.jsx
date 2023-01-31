import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () =>{
    const {cart,cartTotal,clear, removeItem,sumTotal} = useContext(CartContext);

    if(cartTotal() === 0){
        return (
            <div className="container my-5">
                <div className="row text-center">
                    <div className="alert alert-danger" role="alert">No se encontraron productos</div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item =>(
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.nombre} width={50}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.precio}</td> 
                                    <td className="align-middle"><Link onClick={() =>{removeItem(item.id)}}><img src="/images/trash3.svg" alt={"Eliminar producto"} width={20}/></Link></td>
                                </tr>
                            ))
                        }
                            <tr>
                                <td  colSpan={2} >&nbsp;</td>
                                <td className="text-end">Total a pagar :</td>
                                <td>${sumTotal()}</td>
                                <td><Link to={"/checkOut"} className="btn btn-cart">Finalizar la compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container text-end my-3">
                <button className="btn btn-dark text-center" onClick={()=>clear()}>Vaciar el carrito</button>
            </div>
        </div>
    )
}

export default Cart;