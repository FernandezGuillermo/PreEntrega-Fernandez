import { useState } from "react";
import React from "react";

const ItemCount = ({stock,onAdd}) =>{
    const [count,setCount] = useState(1)

    const increase = () => count < stock && setCount(count+1);
    const decrease = () => count > 1 && setCount(count-1);
 
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