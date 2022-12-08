import { useState } from "react";

const ItemCount = ({initial,stock,onAdd}) =>{
    const [count,setCount] = useState(initial)

    const increase = () => count < stock && setCount(count+1);
    const decrease = () => count > initial && setCount(count-1);

    return(
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={decrease}>-</button>
            <p>{count}</p>
            <button type="button" className="btn btn-primary" onClick={increase}>+</button>
        </div>
    )
}