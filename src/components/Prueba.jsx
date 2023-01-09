import React, { useEffect,useState } from "react";
import {doc,getDoc,getFirestore} from "firebase/firestore";

const Prueba =() =>{
    const [producto,setProducto] = useState({});
    useEffect(()=>{
        const db = getFirestore();
        const productos = doc(db,"productos","JG8Xk0emNnobK7Yx3hlP");
        getDoc(productos).then((data)=>{
            if(data.exists()){
                console.log(data.data());
            }else{
                console.log("El producto no existe");
            }
        })
    },[])
    return(
        <h1>documento</h1>
    )
}

export {Prueba};
