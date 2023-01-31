import React from "react";

const Portada = () =>{
    return(
        <div>
            <section className="portada">
            <article className="row">
                <div className="col-xl-3 my-auto">
                    <h1 className="text-center text-marca" id="text-marca">Oxford Polo Club</h1>
                    <p className="text-center text-portada" id="text-portada"></p>
                </div>
                <div className="col-xl-3 g-0">
                    <img src="../images/img-portada-1.jpg" alt="Imagen Portada" className="img-portada-1"/>
                </div>
                <div className="col-xl-3 g-0">
                    <img src="../images/img-portada-2.jpg" alt="Imagen Portada" className="img-portada-2"/>
                </div>
                <div className="col-xl-3 g-0">
                    <img src="../images/img-portada-3.jpg" alt="Imagen Portada" className="img-portada-3"/>
                </div>
            </article>
        </section>
        </div>
    )   
}

export default Portada;