import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListConteiner from "./components/ItemListConteiner";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = () =>{
  return(
    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path={"/"} element={<ItemListConteiner/>} />
        </Routes>
          <Footer/>
    </BrowserRouter>
  )
}



export default App;