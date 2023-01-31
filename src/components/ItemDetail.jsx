import React, { useEffect, useState ,useContext } from "react";
import {ItemCount} from "../components/ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({item}) =>{
    const [itemStock,setItemStock] = useState(0);
    const {addItem} = useContext (CartContext);

    const onAdd = (quantity) =>{
        setItemStock(itemStock - quantity);
        addItem(item,quantity);
    }

    useEffect(()=>{
        setItemStock(item.stock);
    },[item])

    return (
        <div className="row">
        <div className="col-md-4 offset-md-2">
            <img src={item.img} alt={item.nombre} className="img-fluid img-item my-auto" />
        </div>
        <div className="col-md-4 my-auto">
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
            <p><b>${item.precio}</b></p>
            <ItemCount stock={item.stock} onAdd ={onAdd}  />
        </div>
    </div>
    )
}

export default ItemDetail;  