import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useToken } from '../contexts/session.context';
import Favicon from '../../assets/Favicon.svg';

const Navbar = () => {
    const token = useToken()
    return (
        <nav className="navbar navbar-expand-md navbar-danger bg-danger p-3">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center"><img src={Favicon} alt="JKV" className="me-2" style={{ height: '64px' }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/inicio" className="nav-link text-light fs-5" aria-current="page">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link text-light fs-5" aria-current="page">
                                        Sobre nosotros
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-light fs-5" aria-current="page">
                                        Productos
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/logout" className="nav-link text-light fs-5">
                                        Salir
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-light fs-5">
                                        Iniciar Sesión
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/registro" className="nav-link text-light fs-5">
                                        Registro
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;