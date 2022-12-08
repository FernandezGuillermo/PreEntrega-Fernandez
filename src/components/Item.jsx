const Item = ({product}) => {

    const {nombre, descripcion , img, precio,id} = product

    return (
        <section className="background-main container-fluid">
            <h1 className="text-h1 mx-4 mt-3">Jeans</h1>
                <div id="contenedorProductos" className="d-flex gap-3 m-3 justify-content-evenly row">
                    <div className="col-xl-12 col-md-12 col-sm-1">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">$ {precio} </p>
                    <div className="input-group mb-3">
                </div>
                <button id={id} className="btn btn-primary">Agregar al carrito</button>
            </div>
            </div>
            </div>
        </section>
    )
}

export {Item}