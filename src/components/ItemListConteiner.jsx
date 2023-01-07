import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from '../utils/products';
import { useEffect } from "react";
import {ItemList} from '../components/ItemList';
import {Prueba} from "../components/Prueba";




const ItemListConteiner = () =>{
    const [listProducts,setListProducts] = useState([])
    const {id} = useParams ()
    
    useEffect(() =>{
        const promise = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(id ? products.filter(listProducts => listProducts.category === id) : products)
                },2000)
            },)
            
        promise.then((data)=>{
            setListProducts(data);
        })
    },[id])



    return(
        <div className="container">
            <ItemList listProducts={listProducts} />
            <Prueba/>
        </div>
    )
}

export default ItemListConteiner;