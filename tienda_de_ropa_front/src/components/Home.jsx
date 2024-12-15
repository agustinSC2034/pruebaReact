import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const Home = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, ingresa un correo válido.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "¡Gracias por suscribirte!",
        text: `Te hemos registrado con el correo: ${email}`,
      });
      setEmail(""); // Limpiar el campo de email
    }
  };

  return (
    <div className="container-fluid p-0">
      <div
        className="hero-section bg-primary text-white text-center d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div>
          <h1 className="display-3 fw-bold">Bienvenidos a JKV</h1>
          <p className="lead fs-4">Tu destino para la moda y el estilo único</p>
          <a href="#about" className="btn btn-light btn-lg mt-4">
            Descubre más
          </a>
        </div>
      </div>

      <div id="about" className="container py-5">
        <h2 className="fw-bold text-center mb-4">¿Quiénes somos?</h2>
        <p className="text-center">
          En <strong>JKV</strong>, nos apasiona ofrecer las
          tendencias más recientes con la mejor calidad. Nuestro compromiso es
          brindarte una experiencia única, destacando tu personalidad a través
          de la moda.
        </p>
        <p className="text-center">
          Únete a nuestra comunidad y descubre lo mejor del diseño y la
          innovación en cada prenda.
        </p>
        <div className="text-center">
          <a href="/about" className="btn btn-primary mt-3">
            Más sobre nosotros
          </a>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container text-center">
          <h3 className="fw-bold">Suscríbete a nuestro newsletter</h3>
          <p className="mb-4">
            Entérate antes que nadie de nuestras ofertas y nuevos lanzamientos.
          </p>
          <form className="d-flex justify-content-center" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="form-control w-50 me-2"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
