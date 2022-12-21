import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";



const ItemCount = ({stock,onAdd}) =>{
    const [count,setCount] = useState(1);
    const [itemStock,setItemStock] = useState(stock);
    const [soldOut,setSoldOut] = useState(false);

    const increase = () => count < itemStock && setCount(count+1);
    const decrease = () => count > 1 && setCount(count-1);

    const addToCart = (quantity) =>{
        if(count <= itemStock){
            setCount(1);
            setItemStock(itemStock-quantity);
            setSoldOut(true);
            onAdd(quantity);
        }
    }

    useEffect (() =>{
        setItemStock(stock);
    },[stock])
 
    return(
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={decrease}>-</button>
            <button type="button" className="btn btn-primary" >{count}</button>
            <button type="button" className="btn btn-primary" onClick={increase}>+</button>
            {soldOut ? <Link to={"/cart"} className="btn btn-primary">Terminar mi compra</Link> : <button type="button" className="btn btn-primary" onClick={()=>{addToCart(count)}}>Agregar al carrito</button>}
        </div>
    )
}

export {ItemCount};