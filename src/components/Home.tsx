import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/home.css';

export default function Home() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={`Home ${visible ? '' : 'hidden'}`}>
                <div className='Info-Container'>
                    <div className='Photo'>
                        <img src="Foto_Perfil.jpg" alt="Foto_Perfil" />
                    </div>
                    <div className='About-me'>
                        <h1>Mauro L. Gomez</h1>
                        <h2>¡Hola! Soy Programador Full Stack</h2>
                        <p>
                            Soy un programador apasionado por la tecnología con experiencia en el desarrollo de aplicaciones web utilizando tecnologías modernas como Python (Flask, Django), React, y MySQL. A lo largo de mi carrera académica y proyectos personales, he adquirido un sólido conocimiento en la integración de backend y frontend, desarrollando soluciones prácticas y escalables. Me especializo en el manejo eficiente de bases de datos estructuradas y en la implementación de funcionalidades interactivas y dinámicas en interfaces web.
                        </p>
                    </div>
                </div>
                <div className='Btn-Options'>
                    <div className='Container_btn'>
                        <Link to="pdf/Curriculum vitae - Mauro L. Gomez _ Español.pdf" target="_blank" className='Button btn-A'>Curriculum Vítae</Link>
                        <Link to="Proyectos" className='Button btn-B'>Proyectos</Link>
                        <Link to="Habilidades" className='Button btn-C'>Habilidades</Link>
                        <Link to="Contacto" className='Button btn-D'>Contacto</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
