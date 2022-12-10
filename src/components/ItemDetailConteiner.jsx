import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{

    const [item,setItem] = useState([])
    const {id} = useParams()
    
    useEffect(() =>{
            const promise = new Promise ((res,rej) =>{
                setTimeout(()=>{
                    res(products.find(item => item.id === parseInt(id)))
            },2000)
        });
        promise.then((data)=>{
            setItem(data);
        })
    },[id]);

    return(

        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;