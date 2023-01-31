import React from "react";


const SingInConteiner = () =>{
    return (
        <div className="background-main container-fluid justify-content-evenly">
        <section className="my-5 mx-auto">
        <div className="row background-main container-fluid justify-content-evenly">
            <article className="col-xl-6 col-md-12 my-auto">
                <h1>Resgistrate para obtener beneficios</h1>
                <form className="formulario">
                    <label for="user" className="form-label mx-2 formulario-user">User</label>
                    <input type="text" className="form-control" />
                    <div className="mensajeUser"></div>
                    <label for="email" className="form-label mx-2 formulario-email">Email</label>
                    <input type="email" required className="form-control"/>
                    <div className="mensajeEmail"></div>
                    <label for="password" className="form-label mx-2 formulario-password">Password</label>
                    <input type="password" className="form-control"/>
                    <button type="submit" className="btn-my-2 formulario-btn btn-dark">Sign In</button>
                    <button type="reset" className="btn-my-2 formulario-btn btn-dark">Clean Form</button>
                </form>
            </article>
            <article className="col-xl-6 col-md-12">
                <img src="../images/img-polo-signIn.jpg" alt="polo deporte" className="img-polo-signIn"/>
            </article> 
        </div>
        </section>
        </div>
    )
}

export default SingInConteiner;