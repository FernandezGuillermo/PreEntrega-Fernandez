import React, { useEffect } from "react";
import { useState } from "react";
import {ItemCount} from "../components/ItemCount"

const ItemDetail = ({item}) =>{
    const [itemStock,setItemStock] = useState(0);

    const onAdd = (quantity) =>{
        setItemStock(itemStock - quantity);
    }

    useEffect(()=>{
        setItemStock(item.stock);
    },[item])

    return (
        <div className="row">
        <div className="col-md-4 offset-md-2">
            <img src={item.img} alt={item.nombre} className="img-fluid" />
        </div>
        <div className="col-md-4">
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
            <p><b>${item.precio}</b></p>
            <ItemCount stock={item.stock} onAdd ={onAdd}  />
        </div>
    </div>
    )
}

export default ItemDetail;  