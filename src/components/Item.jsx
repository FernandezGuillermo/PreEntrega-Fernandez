const Item = ({product}) => {

    const {nombre, descripcion , img, precio} = product

    return (
        <div>
            <p>{nombre}</p>
            <p>{precio}</p>
        </div>
    )
}

export {Item}