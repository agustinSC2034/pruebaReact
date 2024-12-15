import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { agregarProducto, getProductos } from "../services/productos.service";
import Swal from "sweetalert2";

const NuevoProducto = () => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        materials: [],
        price: "",
        description: "",
        img: null,
    });

    const [categorias, setCategorias] = useState([]);
    const [materiales, setMateriales] = useState([]);
    const [materialesSeleccionados, setMaterialesSeleccionados] = useState([]);

    const navigate = useNavigate();

    // Cargar categorías y materiales al montar el componente
    useEffect(() => {
        getProductos()
            .then((productos) => {
                const categoriasUnicas = [...new Set(productos.map((prod) => prod.category))];
                const materialesUnicos = [...new Set(productos.flatMap((prod) => prod.materials))];
                setCategorias(categoriasUnicas);
                setMateriales(materialesUnicos);
            })
            .catch((err) => console.error("Error al cargar categorías y materiales:", err));
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "img") {
            setFormData({ ...formData, img: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleMaterialChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setMaterialesSeleccionados((prev) => [...prev, value]);
        } else {
            setMaterialesSeleccionados((prev) => prev.filter((material) => material !== value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const producto = {
                ...formData,
                materials: materialesSeleccionados,
            };
            await agregarProducto(producto);

            Swal.fire({
                icon: "success",
                title: "¡Producto agregado!",
                text: "El producto se ha agregado exitosamente.",
                confirmButtonText: "Aceptar",
            }).then(() => {
                navigate("/");
            });
        } catch (error) {
            console.error("Error al agregar producto:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al agregar el producto. Por favor, inténtalo nuevamente.",
                confirmButtonText: "Aceptar",
            });
        }
    };

    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "600px", width: "100%" }}>
                <h1 className="text-center text-primary mb-4">Agregar Nuevo Producto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control border border-primary rounded-pill"
                            placeholder="Ingrese el nombre del producto"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Categoría</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="form-select border border-primary rounded-pill"
                            required
                        >
                            <option value="">Selecciona una categoría</option>
                            {categorias.map((categoria) => (
                                <option key={categoria} value={categoria}>
                                    {categoria}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Materiales</label>
                        <div className="row">
                            {materiales.map((material) => (
                                <div key={material} className="col-6 col-md-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            id={material}
                                            value={material}
                                            className="form-check-input"
                                            onChange={handleMaterialChange}
                                        />
                                        <label className="form-check-label" htmlFor={material}>
                                            {material}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Precio</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="form-control border border-primary rounded-pill"
                            placeholder="Ej. 100.00"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Descripción</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="form-control border border-primary rounded"
                            rows="4"
                            placeholder="Agrega una breve descripción del producto"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Imagen</label>
                        <input
                            type="file"
                            name="img"
                            onChange={handleChange}
                            className="form-control border border-primary rounded-pill"
                            accept="image/*"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold">
                        Agregar Producto
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NuevoProducto;
