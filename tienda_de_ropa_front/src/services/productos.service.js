import { call } from "./api.service";

// Obtener todos los productos
export async function getProductos() {
    return call({
        uri: "ropas",
        method: "GET",
    });
}

// Obtener un producto por su ID
export async function getProductoById(id) {
    return call({
        uri: `ropas/${id}`,
        method: "GET",
    });
}

// Agregar un nuevo producto
export async function agregarProducto(producto) {
    return call({
        uri: "ropas", 
        method: "POST",
        body: producto,
        headers: {
            "Content-Type": "application/json", 
        },
    });
}
