import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registro } from "../../services/auth.service";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ nombre, email, password }); // Verifica que los datos sean correctos
    try {
      await registro({ nombre, email, password });
      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: `¡Bienvenido, ${nombre}! Ya puedes iniciar sesión.`,
        confirmButtonColor: "#dc3545",
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al registrarse",
        text: error.mensaje || "Hubo un problema al procesar tu registro.",
        confirmButtonColor: "#dc3545",
      });
    }
  };



  return (
    <div className="d-flex justify-content-center align-items-center login">
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow-lg rounded"
        style={{ width: "450px" }}
      >
        <h3 className="text-center mb-4 text-danger">Registrar Usuario</h3>
        <div className="mb-3">
          <label
            htmlFor="nombre"
            className="form-label text-danger"
          >
            Nombre
          </label>
          <input
            type="text"
            className="form-control focus-ring focus-ring-danger"
            id="nombre"
            placeholder="Ingresa tu nombre"
            onChange={handleNombre}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label text-danger"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control focus-ring focus-ring-danger"
            id="email"
            placeholder="Ingresa tu correo"
            onChange={handleEmail}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label text-danger"
          >
            Contraseña
          </label>
          <input
            type="password"
            className="form-control focus-ring focus-ring-danger"
            id="password"
            placeholder="Ingresa tu contraseña"
            onChange={handlePassword}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-danger w-100"
        >
          ¡Registrar!
        </button>
        <div className="text-center mt-4">
          <p className="fw-bold">
            ¿Ya tienes usuario?{" "}
            <Link
              to="/login"
              className="ms-2 btn btn-primary"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registro;
