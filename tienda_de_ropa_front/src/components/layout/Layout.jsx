import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { SessionProvider } from "../contexts/session.context";

const Layout = () => {
  return (
    <SessionProvider>
      <Navbar />
      <Outlet />
      <footer className="bg-primary text-white py-4">
        <div className="container">
          <div className="row">
            {/* Sección de enlaces */}
            <div className="col-md-4 mb-3">
              <h5 className="text-uppercase">Enlaces útiles</h5>
              <ul className="list-unstyled">
                <li><a href="/Inicio" className="text-white text-decoration-none">Inicio</a></li>
                <li><a href="/about" className="text-white text-decoration-none">Sobre nosotros</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contacto</a></li>
                <li><a href="/" className="text-white text-decoration-none">Productos</a></li>
              </ul>
            </div>

            {/* Sección de contacto */}
            <div className="col-md-4 mb-3">
              <h5 className="text-uppercase">Contáctanos</h5>
              <p className="mb-1"><i className="bi bi-envelope-fill"></i> contacto@tienda.com</p>
              <p className="mb-1"><i className="bi bi-telephone-fill"></i> +54 123 456 789</p>
              <p><i className="bi bi-geo-alt-fill"></i> Buenos Aires, Argentina</p>
            </div>

            {/* Sección de redes sociales */}
            <div className="col-md-4 mb-3">
              <h5 className="text-uppercase">Síguenos</h5>
              <a href="https://www.facebook.com" target="_blank" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://ar.linkedin.com/" target="_blank" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <hr className="border-light" />
          <div className="text-center">
            <p className="mb-0">&copy; 2024 Tienda De Ropa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </SessionProvider>
  );
};

export default Layout;
