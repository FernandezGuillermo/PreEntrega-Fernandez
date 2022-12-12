import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from '../utils/products';

import { useEffect } from "react";
import {ItemList} from '../components/ItemList';


const ItemListConteiner = () =>{
    const [listProducts,setListProducts] = useState([])
    const {id} = useParams ()
    
    useEffect(() =>{
        const promise = new Promise((res,rej)=>{
            res(id ? products.filter(listProducts => listProducts.category === id) : products)
        })
        promise.then((data)=>{
            setListProducts(data);
        })
    },[id])



    return(
        <div className="container">
            <ItemList listProducts={listProducts} />
        </div>
    )
}

export default ItemListConteiner;