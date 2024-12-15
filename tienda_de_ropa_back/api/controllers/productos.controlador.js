import * as servicios from "../../services/productos.service.js"

async function getRopa(req, res) {
    try {
        const filtros = req.query;
        const ropas = await servicios.getRopa(filtros);
        res.status(200).json(ropas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la ropa" });
    }
}

function getRopaId(req, res) {
    const id = req.params.id
    servicios.getRopaId(id)
        .then((ropa) => res.status(200).json(ropa))
}
async function crearRopa(req, res) {
    try {
        console.log("Archivo recibido:", req.file);
        console.log("Cuerpo de la solicitud:", req.body);

        const ropa = req.body;
        const imagePath = req.file ? `/img/${req.file.filename}` : null;
        const nuevaRopa = {
            ...ropa,
            img: imagePath,
        };
        const ropas = await servicios.agregarRopa(nuevaRopa);
        res.status(201).json(ropas);
    } catch (error) {
        console.error("Error en crearRopa:", error);
        res.status(500).json({ error: "Error al crear la ropa", detalle: error.message });
    }
}

function borrarProducto(req, res) {
    const id = req.params.id
    console.log("LLEGO EL BORRAR", req.params.id)
    servicios.borrarProducto(id)
        .then(() => res.status(204).json(id))
        .catch(() => res.status(404).json({ mensaje: "Recurso no encontrado" }))
}

function reemplazarProducto(req, res) {
    const id = req.params.id
    const ropa = req.body
    servicios.modificarRopa(id, ropa)
        .then((ropa) => res.status(204).json(ropa))
        .catch(() => res.status(404).json({ mensaje: "Recurso no encontrado" }))
}
function getCategorias(req, res) {
    servicios.getCategoriasUnicas()
        .then((categorias) => res.status(200).json(categorias))
        .catch((error) => res.status(500).json({ mensaje: "Error al obtener categorías", error }));
}

function getMateriales(req, res) {
    servicios.getMaterialesUnicos()
        .then((materiales) => res.status(200).json(materiales))
        .catch((error) => res.status(500).json({ mensaje: "Error al obtener materiales", error }));
}

export {
    getRopa,
    getRopaId,
    crearRopa,
    borrarProducto,
    reemplazarProducto,
    getCategorias,
    getMateriales
}