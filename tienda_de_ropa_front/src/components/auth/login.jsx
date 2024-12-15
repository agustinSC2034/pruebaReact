import React, { useState, useCallback, Profiler } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLogin } from "../contexts/session.context";
import { login as loginService } from "../../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const navigate = useNavigate();

  const handleEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const usuario = await loginService(email, password);
        login(usuario.token);

        Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión exitoso!",
          text: `Bienvenido/a, ${usuario.nombre || "Usuario"}!`,
          confirmButtonColor: "#dc3545",
        });

        navigate("/"); // Redirigir al home después de iniciar sesión
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error de inicio de sesión",
          text: "Correo o contraseña incorrectos. Inténtalo de nuevo.",
          confirmButtonColor: "#dc3545",
        });
      }
    },
    [email, password, login, navigate]
  );

  return (
    <Profiler id="Login">
      <div className="d-flex justify-content-center align-items-center login">
        <form
          onSubmit={handleSubmit}
          className="p-4 shadow-lg rounded"
          style={{ width: "450px", backgroundColor: "#f9f9f9" }}
        >
          <h3 className="text-center mb-4 text-danger">Iniciar Sesión</h3>
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
            Iniciar Sesión
          </button>
          <div className="text-center mt-4">
            <p className="fw-bold">
              ¿No tienes cuenta?{" "}
              <Link to="/registro" className="ms-2 btn btn-primary">
                ¡Regístrate aquí!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Profiler>
  );
};

export default Login;
