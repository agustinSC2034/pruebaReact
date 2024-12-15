import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about-us py-5 bg-light">
      <div className="container align-content-center" style={{ height: "60vh" }}>
        <div className="row" >
          <div className="col-12 text-center mb-4">
            <h1 className="display-4 text-primary fw-bold">Sobre Nosotros</h1>
            <p className="lead text-muted">
              Moda con propósito, estilo con personalidad.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              En <strong>JKV</strong>, creemos que la moda es más que ropa: es una forma de expresarte, de sentirte seguro y de mostrar tu estilo único. Desde nuestros comienzos, hemos trabajado para ofrecer prendas de alta calidad, diseñadas pensando en la comodidad y las últimas tendencias.
            </p>
            <p>
              Nuestra misión es brindarte una experiencia de compra excepcional, con productos cuidadosamente seleccionados y un servicio que supere tus expectativas.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Estamos comprometidos con la sostenibilidad y el respeto por el medio ambiente. Incorporamos prácticas responsables en cada paso de nuestra cadena de producción para que puedas vestir con estilo y tranquilidad.
            </p>
            <p>
              Gracias por ser parte de nuestra comunidad. Explora nuestra colección y encuentra tu nuevo look favorito. ¡Juntos estamos redefiniendo la moda!
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <Link to="/" className="btn btn-outline-primary btn-lg">
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
