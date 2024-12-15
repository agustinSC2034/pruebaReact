import express from "express"
import * as controladores from "../controllers/productos.controlador.js"

const route = express.Router()

//Rutas
route.get("/", controladores.getRopa)
route.get("/productos", controladores.getRopa)
route.get("/productos/:id", controladores.getRopaId)
route.get("/producto/nuevo", controladores.formRopaNueva)
route.post( "/producto/nuevo", controladores.agregarRopa )
route.get( "/producto/eliminar/:id", controladores.eliminarRopa )
route.get( "/producto/modificar/:id", controladores.FormModificarRopa )
route.post( "/producto/modificar/:id", controladores.modificarRopa )

//Filtros
route.get("/categoria/:category", controladores.filtrarPorCategoria);
route.get("/materials/:material", controladores.filtrarPorMaterial);


export default route