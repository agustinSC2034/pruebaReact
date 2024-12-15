import * as servicios from "../services/productos.service.js"
import * as vistas from "../views/views.productos.js"

const getRopa = (req, res) => {
    servicios.getRopa()
        .then((productos) => res.send(vistas.CrearPagina("Productos", vistas.ListaDeProductos(productos))))
}
const getRopaId = (req, res) => {
    const id = req.params.id
    servicios.getRopaId(id)
        .then((producto) => {
            console.log(producto)
            res.send(vistas.CrearPagina("Producto", vistas.CrearDetalle(producto)))
        })
        .catch(error => console.log(error))
}

const formRopaNueva = (req, res) => {
    Promise.all([
        servicios.getMaterialesUnicos(),
        servicios.getCategoriasUnicas()
    ])
        .then(([materiales, categorias]) => {
            res.send(vistas.CrearPagina("Nueva Ropa", vistas.nuevaRopa(materiales, categorias)));
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error al cargar los materiales o categorías");
        });
};

const agregarRopa = async (req, res) => {
    try {
        const ropa = req.body;

        if (!Array.isArray(ropa.materials)) {
            ropa.materials = [ropa.materials];
        }

        await servicios.agregarRopa(ropa);

        res.redirect("/productos");
    } catch (error) {
        console.error("Error al agregar ropa:", error);
        res.status(500).json({ error: "Error al agregar ropa" });
    }
};



const FormModificarRopa = (req, res) => {
    const id = req.params.id;

    Promise.all([
        servicios.getRopaId(id),
        servicios.getMaterialesUnicos(),
        servicios.getCategoriasUnicas()
    ])
        .then(([ropa, materiales, categorias]) => {
            res.send(vistas.CrearPagina("Modificar Ropa", vistas.modificarRopa(ropa, materiales, categorias)));
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error al cargar la ropa, los materiales o las categorías");
        });
};


const modificarRopa = (req, res) => {
    const id = req.params.id;
    let ropa = req.body;

    if (!Array.isArray(ropa.materials)) {
        ropa.materials = [ropa.materials];
    }

    servicios.modificarRopa(id, ropa)
        .then(() => res.redirect("/productos"))
        .catch(err => res.status(500).send("Error al modificar la ropa."));
};

const eliminarRopa = (req, res) => {
    const id = req.params.id
    servicios.borrarProducto(id)
        .then(() => res.redirect("/productos"))
}

const filtrarPorCategoria = async (req, res) => {
    const category = req.params.category;
    try {
        const productos = await servicios.getRopa({ category });
        res.send(vistas.CrearPagina("Productos Filtrados", vistas.ListaDeProductos(productos)));
    } catch (error) {
        res.status(500).send("Error al filtrar por categoría");
    }
};

const filtrarPorMaterial = async (req, res) => {
    const material = req.params.material;
    try {
        const productos = await servicios.getRopa({ materials: material });
        res.send(vistas.CrearPagina("Productos Filtrados", vistas.ListaDeProductos(productos)));
    } catch (error) {
        res.status(500).send("Error al filtrar por material");
    }
};


export {
    getRopa,
    getRopaId,
    formRopaNueva,
    agregarRopa,
    FormModificarRopa,
    modificarRopa,
    eliminarRopa,
    filtrarPorCategoria,
    filtrarPorMaterial
}