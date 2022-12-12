import React from "react";
import CartWidget from "./CartWidget";
import { Link,NavLink } from "react-router-dom";

const NavBar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-oscuro"> 
            <div className="container-fluid mt-2">
            <Link className="navbar-brand" to={"/"}>Oxford Polo Club</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/jeans"}>Jeans</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/chino"}>Chinos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/signIn"}>Sing In</NavLink>
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