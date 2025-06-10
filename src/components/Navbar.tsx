import { Link, Outlet } from 'react-router-dom';
import '../assets/css/nav.css';

export default function Navbar() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid d-flex justify-content-between">
                        <Link className='navbar-brand' to="/Portfolio/">
                            <ul className="navbar-nav ms-auto d-flex align-items-center container_home">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg>
                                </li>
                                <li>
                                    <h3>Mauro L. Gomez</h3>
                                </li>
                                <li className='container-link-home'>
                                    <span className='info'>Desarrollador de Software @ UPATECO</span>
                                </li>
                            </ul>
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item d-flex align-items-center justify-content-center mx-2">
                                    <Link className='nav-link active' to={'CV'}>Curriculum Vitae</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center justify-content-center mx-2">
                                    <Link className='nav-link active' to={'Proyectos'}>Proyectos</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center justify-content-center mx-2">
                                    <Link className='nav-link active' to={'Habilidades'}>Habilidades</Link>
                                </li>
                                <li className="nav-item d-flex align-items-center justify-content-center mx-2">
                                    <Link className='nav-link active' to={'Contacto'}>Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
