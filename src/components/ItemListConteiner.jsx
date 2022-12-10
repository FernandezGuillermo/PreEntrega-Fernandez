import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from '../utils/products';
import {customFetch} from '../utils/customFetch';
import { useEffect } from "react";
import {ItemList} from '../components/ItemList';


const ItemListConteiner = () =>{
    const [listProducts,setListProducts] = useState([])
    const {id} = useParams ()
    
    useEffect(() =>{
        customFetch(products)
            .then(res => {
                setListProducts(res)
            })
    },[id])

    console.log(listProducts);

    return(
        <div className="container">
            <ItemList listProducts={listProducts} />
        </div>
    )
}

export default ItemListConteiner;