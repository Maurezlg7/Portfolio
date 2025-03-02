import { useState, useEffect } from 'react';
import '../assets/css/habilidades.css';

export default function Habilidades() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`Body-Habilidades ${visible ? '' : 'hidden'}`}>
            <div className='escpecialidades'>
                <h1 className='title'>ESPECIALIDADES</h1>
                <ul className='skills'>
                    <li>
                        <img src="tools/python.png" alt="" />
                        <span>PYTHON</span>
                    </li>
                    <li>
                        <img src="tools/Javascript.png" alt="" />
                        <span>JAVASCRIPT</span>
                    </li>
                    <li>
                        <img src="tools/Typescript.png" alt="" />
                        <span>TYPESCRIPT</span>
                    </li>
                    <li>
                        <img src="tools/React.png" alt="" />
                        <span>REACT</span>
                    </li>
                    <li>
                        <img src="tools/Flask.png" alt="" />
                        <span>FLASK</span>
                    </li>
                    <li>
                        <img src="tools/Mysql.png" alt="" />
                        <span>MYSQL</span>
                    </li>
                    <li>
                        <img src="tools/json-logo.png" alt="" />
                        <span>JSON</span>
                    </li>
                    <li>
                        <img src="tools/sass-logo.png" alt="" />
                        <span>Sass/SCSS</span>
                    </li>
                    <li>
                        <img src="tools/Django.png" alt="" />
                        <span>DJANGO</span>
                    </li>
                    <li>
                        <img src="tools/Git.png" alt="" />
                        <span>Git</span>
                    </li>
                    <li>
                        <img src="tools/Postgresql_elephant.png" alt="" />
                        <span>PostgreSQL</span>
                    </li>
                </ul>
            </div>
            <div className='otros'>
                <h1 className='title'>OTRAS HABILIDADES</h1>
                <ul className='skills'>
                    <li>
                        <img src="tools/Java.png" alt="" />
                        <span>JAVA</span>
                    </li>
                    <li>
                        <img src="tools/C.png" alt="" />
                        <span>C</span>
                    </li>
                    <li>
                        <img src="tools/Angular.png" alt="" />
                        <span>Angular</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}