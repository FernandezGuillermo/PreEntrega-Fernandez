import { createContext, useState } from "react";
import { products } from "../utils/products";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [cart,setCart] = useState([]);      
    const isInCart = (id) =>{
        return cart.some(x => x.id === id); 
    }
    const addItem = (item,quantity) =>{
        if(isInCart(item.id)){
            let pos = cart.findIndex (x => x.id === item.id);
            cart [pos].quantity += quantity;
            setCart();
        }
        else{
            setCart([...cart,{...item,quantity:quantity}])
        }
    }

    const removeItems = (id) =>{
        const products = cart.filter(x =>x.id !== id);
        setCart(...[products]); 
    }

    const clear = () =>{
        setCart ([]);
    }

    const cartTotal = () =>{
        return cart.reduce((total,item) => total+= item.quantity,0);
    }

    const sumTotal = () =>{
        return cart.reduce((total,item) => total+= item.quantity * item.precio,0);
    }

    return(
        <CartContext.Provider value={{cart,addItem, removeItems,clear,cartTotal,sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

