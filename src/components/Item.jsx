import React from "react"
import { Link } from "react-router-dom"

const Item = ({product}) => {

    const {nombre,img} = product

    return (
        <section className="background-main container-fluid col-xl-4">
                <div id="contenedorProductos" className="d-flex gap-3 m-3 justify-content-evenly row">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                    <Link to={"/item/" + product.id} className="text-decoration-none">
                    <img src={img} className="card-img-top" alt="imagen producto"/>
                    </Link>
                    <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <div className="input-group mb-3">
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export {Item}