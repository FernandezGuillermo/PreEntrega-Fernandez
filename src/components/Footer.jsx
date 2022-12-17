import React from "react";

const Footer = () =>{
    return(
        <section className="footer container-fluid">
            <article className="row">
                <div className="col-xl-3 my-auto text-center footer__text">
                    <p className="footer__text">Folow Us</p>
                    <a href="https://www.instagram.com/polo.esperanza/?hl=es-la"><img src="../images/img-instagram.png" alt="instagram" className="footer__instagram" id="icono-instagram"/></a>
                    <a href="https://es-la.facebook.com/poloclubesperanza/"><img src="../images/img-facebook.png" alt="facebook" className="footer__facebook" id="icono-facebook"/></a>
                </div>
                <div className="col-xl-6 text-center my-auto">
                    <p className="footer__text">Contact Us</p>
                    <p className="footer__text">Lehmann 1339</p>
                    <p className="footer__text">+54 342 530-4765</p>
                </div>
                <div className="col-xl-3 my-auto text-center">
                    <img src="../images/img-polo-nav.png" alt="logo marca" className="footer-logo mt-3"/>
                    <p className="footer-text-logo text-center">Local exclusivo Oxford Polo Club</p>
                </div>
            </article>
            <article className="row">
                <div>
                    <p className="footer__text text-center">© Todos los derechos reservados</p>
                </div>
            </article>
        </section>
    )
}

export default Footer;