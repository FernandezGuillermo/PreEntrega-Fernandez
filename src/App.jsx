import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListConteiner from "./components/ItemListConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Error404 from "./components/Error404";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = () =>{
  return(
    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path={"/"} element={<ItemListConteiner/>} />
            <Route path={"/category/:id"} element={<ItemListConteiner/>} />
            <Route path={"/item/:id"} element={<ItemDetailConteiner/>} />
            <Route path={"*"} element={<Error404/>} />
        </Routes>
          <Footer/>
    </BrowserRouter>
  )
}



export default App;