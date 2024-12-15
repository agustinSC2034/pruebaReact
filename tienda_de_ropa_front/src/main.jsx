//Codigos importantes
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
//Librerias
import { createContext, StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Vistas
import Layout from './components/layout/layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Productos from './components/Productos.jsx';
import ProtectedRoute from "./components/layout/ProtectedRoute.jsx"
import Logout from './components/auth/logout.jsx';
import NuevoProducto from './components/nuevoProducto.jsx';

const Login = lazy(() => import("./components/auth/login.jsx"))
const Registro = lazy(() => import("./components/auth/registro.jsx"))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/inicio",
        element: < Home />
      },
      {
        path: "/about",
        element: < About />
      },
      {
        path: "/",
        element: <ProtectedRoute><Productos /></ProtectedRoute>
      },
      {
        path: "/producto/nuevo",
        element: <ProtectedRoute>< NuevoProducto /></ProtectedRoute>
      },
      {
        path: "/login",
        element: <Suspense fallback={<div>Cargando...</div>} ><Login /></Suspense>
      },
      {
        path: "/registro",
        element: <Suspense fallback={<div>Cargando...</div>} ><Registro /></Suspense>
      },
      {
        path: "/logout",
        element: <Logout />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
