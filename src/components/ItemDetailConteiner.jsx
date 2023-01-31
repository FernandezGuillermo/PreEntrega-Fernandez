import React,{useEffect,useState} from "react";
import {doc,getDoc,getFirestore} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{

    const [item,setItem] = useState([])
    const {id} = useParams()
    


    useEffect(()=>{
        const db = getFirestore();
        const productos = doc(db,"productos",id);
        getDoc(productos).then((data)=>{
            if(data.exists()){
                setItem({id:data.id,...data.data()})
            }else{
                console.log("El producto no existe");
            }
        })
    },[])

    return(

        <div className="m-5">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;