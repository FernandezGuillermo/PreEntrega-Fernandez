import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-oscuro"> 
            <div className="container-fluid mt-2">
            <a className="navbar-brand" href="../index.html">Oxford Polo Club</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sing In</a>
                </li>           
                <li>
                    <CartWidget/>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;