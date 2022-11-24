import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListConteiner from "./components/ItemListConteiner";

const App = () =>{
  return(
    <div>
      <NavBar/>
      <ItemListConteiner greeting={"Bienvenidos a Oxford Polo Club"}/>
      <Footer/>
    </div>
  )
}



export default App;