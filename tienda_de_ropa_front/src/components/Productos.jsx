import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductos } from '../services/productos.service';

const Home = () => {
    const [productos, setProductos] = useState([]); 
    const [productosFiltrados, setProductosFiltrados] = useState([]); 
    const [categorias, setCategorias] = useState([]); 
    const [materiales, setMateriales] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(''); 
    const [materialSeleccionado, setMaterialSeleccionado] = useState(''); 
    const [productoSeleccionado, setProductoSeleccionado] = useState(null); 

    const navigate = useNavigate();

    useEffect(() => {
        getProductos()
            .then(datos => {
                setProductos(datos);
                setProductosFiltrados(datos); 

                const categoriasUnicas = [...new Set(datos.map(prod => prod.category))];
                const materialesUnicos = [...new Set(datos.flatMap(prod => prod.materials))];

                setCategorias(categoriasUnicas);
                setMateriales(materialesUnicos);
            })
            .catch((err) => {
                console.error("Error al cargar los productos:", err);
                navigate("/login");
            });
    }, [navigate]);

    useEffect(() => {
        let filtrados = productos;

        if (categoriaSeleccionada) {
            filtrados = filtrados.filter(producto => producto.category === categoriaSeleccionada);
        }

        if (materialSeleccionado) {
            filtrados = filtrados.filter(producto => producto.materials.includes(materialSeleccionado));
        }

        setProductosFiltrados(filtrados);
    }, [categoriaSeleccionada, materialSeleccionado, productos]);

    const handleVerProducto = (producto) => {
        setProductoSeleccionado(producto);
    };

    const handleCerrarModal = () => {
        setProductoSeleccionado(null);
    };

    return (
        <div className="container">
            <a className="btn btn-outline-primary mt-3 mb-3 w-100" href="/producto/nuevo">Nueva Ropa</a>

            <div className="row mb-4">
                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={categoriaSeleccionada}
                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                    >
                        <option value="">Todas las categorías</option>
                        {categorias.map((categoria) => (
                            <option key={categoria} value={categoria}>
                                {categoria}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={materialSeleccionado}
                        onChange={(e) => setMaterialSeleccionado(e.target.value)}
                    >
                        <option value="">Todos los materiales</option>
                        {materiales.map((material) => (
                            <option key={material} value={material}>
                                {material}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            
            <div className="row justify-content-center">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <div key={producto._id} className="col-md-4 col-lg-3 col-sm-12 mb-4">
                            <ProductCard producto={producto} onVerProducto={handleVerProducto} />
                        </div>
                    ))
                ) : (
                    <p>No se encontraron productos.</p>
                )}
            </div>

            
            {productoSeleccionado && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold text-danger">{productoSeleccionado.name}</h5>
                                <button type="button" className="btn-close" onClick={handleCerrarModal}></button>
                            </div>
                            <div className="modal-body">
                                <img
                                    className="img-fluid mb-3"
                                    src={`http://localhost:3333/img/${productoSeleccionado.img}`}
                                    alt={productoSeleccionado.name}
                                />
                                <p className='text-center fs-4'>{productoSeleccionado.description}</p>
                                <p><strong className='text-primary'>Categoría:</strong> {productoSeleccionado.category}</p>
                                <p><strong className='text-danger'>Materiales:</strong> {productoSeleccionado.materials.join(', ')}</p>
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                                <p><strong className='text-danger'>Precio:</strong> ${productoSeleccionado.price}</p>
                                <button type="button" className="btn btn-primary" onClick={handleCerrarModal}>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProductCard = ({ producto, onVerProducto }) => {
    const backendURL = "http://localhost:3333";

    return (
        <div className="card h-100">
            <img
                className="card-img-top img-fluid"
                src={`${backendURL}/img/${producto.img}`}
                alt={producto.name}
            />
            <div className="card-body">
                <h5 className="card-title fs-2 fw-bold">{producto.name}</h5>
                <p className="fs-6 m-0 fw-bold text-primary">{producto.category}</p>
                <p className="m-0 text-danger">{producto.materials.join(', ')}</p>
                <p className="m-0 fw-bold fs-1 text-primary text-center">$ {producto.price}</p>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-outline-primary w-100" onClick={() => onVerProducto(producto)}>
                    Ver
                </button>
            </div>
        </div>
    );
};

export default Home;
