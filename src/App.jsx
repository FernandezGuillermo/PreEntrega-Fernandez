import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListConteiner from "./components/ItemListConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import { CheckOut } from "./components/CheckOut";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SingInConteiner from "./components/SingInConteiner";
import CartContextProvider from "./context/CartContext";


const App = () =>{
  return(
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path={"/"} element={<ItemListConteiner/>} />
            <Route path={"/category/:id"} element={<ItemListConteiner/>} />
            <Route path={"/item/:id"} element={<ItemDetailConteiner/>} />
            <Route path={"/signIn"} element={<SingInConteiner/>} />
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/checkOut"} element={<CheckOut/>}/>
            <Route path={"*"} element={<Error404/>} />
        </Routes>
          <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  )
}



export default App;