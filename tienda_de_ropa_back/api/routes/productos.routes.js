import express from "express";
import * as controllers from "../controllers/productos.controlador.js"
import { validateProduct } from "../../middleware/producto.validate.middleware.js"; 
import { validateToken } from "../../middleware/token.middleware.js"

const route = express.Router()

route.get("/",[ validateToken ], controllers.getRopa)
route.get("/ropas",[ validateToken ], controllers.getRopa)
route.get("/ropas/:id",[ validateToken ], controllers.getRopaId)
route.post("/ropas", [validateProduct, validateToken ], controllers.crearRopa)
route.delete("/ropa/:id",[ validateToken ], controllers.borrarProducto)
route.put("/ropa/:id",[ validateToken ], controllers.reemplazarProducto)  
route.get("/categorias", controllers.getCategorias);
route.get("/materiales", controllers.getMateriales);


export default route