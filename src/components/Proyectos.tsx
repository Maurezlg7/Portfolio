import { useState, useEffect } from "react";
import '../assets/css/proyectos.css';

interface ProyectoCardProps {
    title: string;
    logo: string;
    description: string;
    images: string[];
    repoLink?: string;
    tools: string[];
}

function ProyectoCard({ title, logo, description, images, repoLink, tools }: ProyectoCardProps) {
    const [activeTab, setActiveTab] = useState("Descripcion");

    return (
        <div>
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    {["Descripcion", "Link", "Herramientas"].map(tab => (
                        <li className="nav-item" key={tab}>
                            <button
                                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card-body d-flex justify-content-center align-items-center">
                {activeTab === "Descripcion" && (
                    <div className="card-body">
                        <div className="title">
                            <img src={logo} alt={`${title} Logo`} />
                            <h1>{title}</h1>
                        </div>
                        <div className="description">
                            <p>{description}</p>
                        </div>
                    </div>
                )}
                {activeTab === "Link" && (
                    <div className="link">
                        <div id={`carousel-${title}`} className="carousel slide">
                            <div className="carousel-inner">
                                {images.map((image, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img src={image} className="d-block w-100" alt={`foto ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${title}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${title}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="btn-links">
                            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg> Repositorio
                            </a>
                        </div>
                    </div>
                )}
                {activeTab === "Herramientas" && (
                    <div className="tools">
                        <h2>Herramientas Utilizadas</h2>
                        <ul>
                            {tools.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Proyectos() {
    const proyectos = [
        {
            title: "HARMONYHUB",
            logo: "Logo_Harmony.png",
            description: "Este proyecto consiste en una aplicación web de música desarrollada con ReactJS y consumiendo una API RESTful. La aplicación permite a los usuarios navegar entre canciones, artistas y álbumes, con funcionalidades de autenticación utilizando JWT. Se implementó un sistema de enrutamiento con React Router para gestionar distintas secciones como el perfil de usuario y la página principal. Se utilizaron hooks de React y context API para manejar el estado de la aplicación de manera eficiente. Además, la aplicación incluye operaciones CRUD para gestionar canciones, y el diseño de la interfaz prioriza la funcionalidad y la facilidad de uso. El proyecto fue desplegado en un servidor de producción, y la autenticación asegura que solo los usuarios registrados puedan acceder a ciertas rutas. Este trabajo refleja tanto el uso de tecnologías modernas como la capacidad de integrar y manejar datos de una API externa, todo dentro de una interfaz interactiva y responsive.",
            images: [
                'harmony/Photo_1.png',
                'harmony/Photo_2.png',
                'harmony/Photo_3.png',
                'harmony/Photo_4.png',
                'harmony/Photo_5.png'
            ],
            repoLink: "https://github.com/Maurezlg7/Proyecto_Workbot_HarmonyHub",
            tools: ["ReactJS", "API RESTful", "JWT", "React Router", "Hooks", "Context API", "CRUD"]
        },
        {
            title: "HERMES",
            logo: "Logo_Hermes.png",
            description: "El proyecto integrador consiste en desarrollar una aplicación web de mensajería similar a Discord, que permita registrar usuarios, crear y unirse a servidores, y participar en canales dentro de dichos servidores. Los usuarios pueden enviar mensajes dentro de los canales, los cuales se organizan cronológicamente, y solo el creador de un mensaje puede editarlo o eliminarlo. Además, se implementará un sistema de autenticación, manejo de sesiones y un perfil de usuario que podrá ser editado. También se deberán gestionar errores personalizados para diferentes códigos de estado HTTP y crear un buscador de servidores. La aplicación deberá ser diseñada con HTML, CSS y JavaScript, con una REST API en Flask y una base de datos en MySQL, utilizando el patrón MVC. Se debe administrar el acceso a la API REST y se contemplan funcionalidades adicionales como notificaciones e invitaciones a servidores. Se requiere cumplir con los requisitos básicos para aprobar el proyecto y obtener un puntaje superior con funcionalidades adicionales.",
            images: [
                'hermes/Photo_1.png',
                'hermes/Photo_2.png',
                'hermes/Photo_3.png',
                'hermes/Photo_4.png'
            ],
            repoLink: "https://github.com/Maurezlg7/Hermes",
            tools: ["HTML", "CSS", "JavaScript", "Flask", "MySQL", "MVC"]
        }, {
            title: "MYSQL",
            logo: "tools/Mysql.png",
            description: "Esta es una breve demostración de mi trabajo para la universidad, enfocada en el manejo de consultas SQL. El proyecto se realizó utilizando DBeaver y busca mostrar mis capacidades en este ámbito.",
            images: [
                'Sql_Querys/Photo_1.png',
                'Sql_Querys/Photo_2.png',
                'Sql_Querys/Photo_3.png',
            ],
            repoLink: "https://github.com/Maurezlg7/Sql_Querys",
            tools: ["DBeaver", "SQL"]
        }, {
            title: "CALCULADORA",
            logo: "Calculadora_logo.png",
            description: "Desarrollé una calculadora utilizando Bootstrap, HTML, JavaScript y CSS. La aplicación cuenta con un diseño responsivo y funcionalidades dinámicas para realizar operaciones matemáticas básicas.",
            images: [
                'Calculadora/Photo_1.png',
                'Calculadora/Photo_2.png'
            ],
            repoLink: "https://github.com/Maurezlg7/Calculadora",
            tools: ["Bootstrap", "HTML", "JavaScript", "CSS"]
        }
    ];


    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className={`card text-center w-100 h-100 ${visible ? '' : 'hidden'}`}>
            {proyectos.map((proyecto, index) => (
                <section key={index}>
                    <ProyectoCard {...proyecto} />
                </section>
            ))}
        </main>
    );
}
