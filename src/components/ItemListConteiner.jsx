import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {ItemList} from '../components/ItemList';
import { getFirestore ,collection, getDocs, query, where} from "firebase/firestore";


const ItemListConteiner = () =>{
    const [listProducts,setListProducts] = useState([])
    const {id} = useParams ()

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = collection(db,"productos");
        const q = id ? query(itemCollection,where("category","==",id)) : itemCollection;
        console.log(id);
        getDocs(q).then((data)=>{
            setListProducts(data.docs.map((doc)=>({id:doc.id,...doc.data()})))
        })

    },[id])

    return(
        <div className="container">
            <ItemList listProducts={listProducts} />
        </div>
    )
}

export default ItemListConteiner;