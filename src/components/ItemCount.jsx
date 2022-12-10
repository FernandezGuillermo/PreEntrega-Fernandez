import { useState } from "react";
import React from "react";

const ItemCount = ({initial,stock}) =>{
    const [count,setCount] = useState(initial)

    const increase = () => count < stock && setCount(count+1);
    const decrease = () => count > initial && setCount(count-1);
    const onAdd =() =>{
        if(stock >0){
            console.log("Agregaste " + count + " productos al carrito")
        }
    }

    return(
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={decrease}>-</button>
            <button type="button" className="btn btn-primary" >{count}</button>
            <button type="button" className="btn btn-primary" onClick={increase}>+</button>
            <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export {ItemCount};