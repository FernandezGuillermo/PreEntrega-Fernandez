import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { getFirestore,collection,addDoc, writeBatch} from "firebase/firestore";


const CheckOut = () =>{
    const {cart,clear,sumTotal} = useContext(CartContext);
    const [nombre,setNombre] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");
    const [orderId,setOrderId] = useState("");

    const generarOrden = () =>{
        const fecha = new Date ();
        const order = {
            buyer:{name:nombre,phone:telefono,email:email},
            items:cart.map(item =>({id:item.id,title:item.nombre,quntity:item.quantity,priceTotal:item.quantity * item.precio})),
            total:sumTotal(),
            order_date:`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db,"orders")
        addDoc(ordersCollection,order).then((data)=>{
            addDoc(ordersCollection, order).then((data)=>{
                console.log(data.id);
                setOrderId(data.id);

        //const batch = writeBatch(db);
        //const updateOrder = doc(db,"orders",data.id);
        //batch.update()

                clear();
            });
        });
    }

    return(
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e)=>{setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Telefono: </label>
                            <input type="text" className="form-control" placeholder="Ingrese su telefono" onInput={(e)=>{setTelefono(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email </label>
                            <input type="text" className="form-control" placeholder="Ingrese su e-mail" onInput={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-dark" onClick={generarOrden}>Terminar la compra</button>
                    </form>
                </div>
                    <div className="col-md-6 my-auto">
                        <table className="table">
                        <tbody>
                            {cart.map(item =>(
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.nombre} width={50}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.precio}</td> 
                                </tr>
                            ))
                        }
                            <tr>
                                <td  colSpan={2} >&nbsp;</td>
                                <td className="text-end">Total a pagar :</td>
                                <td>${sumTotal()}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId ? <div className="alert" role="alert">La orden generada es: <b>{orderId}</b></div>:""}
                </div>
            </div>
        </div>
        )
}

export {CheckOut};