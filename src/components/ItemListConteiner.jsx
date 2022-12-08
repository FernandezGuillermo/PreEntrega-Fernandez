import React, { useState } from "react";
import { products } from '../utils/products';
import {customFetch} from '../utils/customFetch';
import { useEffect } from "react";
import {ItemList} from '../components/ItemList';

const ItemListConteiner = () =>{
    const [listProducts,setListProducts] = useState([])
    const [loading,setLoading] = useState(true)
    
    useEffect(() =>{
        customFetch(products)
            .then(res => {
                setListProducts(res)
            })
    },[])

    console.log(listProducts);

    return(
        <div>
            <ItemList listProducts={listProducts} />
        </div>
    )
}

export default ItemListConteiner;