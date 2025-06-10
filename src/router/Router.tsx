import { createBrowserRouter} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import CV from '../components/CV';
import Proyectos from '../components/Proyectos';
import Habilidades from '../components/Habilidades';
import Contacto from '../components/Contacto';

const router = createBrowserRouter([
    {
        path: "/maurezlg7-portfolio/",
        element: <Navbar />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "CV",
                element: <CV />
            },
            {
                path: "Proyectos",
                element: <Proyectos />
            },
            {
                path: "Habilidades",
                element: <Habilidades />
            },
            {
                path: "Contacto",
                element: <Contacto />
            }
        ]
    }
]);

export default router;
