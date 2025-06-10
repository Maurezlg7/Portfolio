import { useState, useEffect } from "react";
import '../assets/css/contacto.css';

export default function Contacto() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`contacto-container ${visible ? '' : 'hidden'}`}>
            <h1 className='title'>COMUNICATE CONMIGO</h1>
            <div className='contact-methods'>
                <a href="https://wa.me/5493875637692" className='contact-link' target="_blank" rel="noopener noreferrer">
                    <img src="social-media/Whatsapp.png" alt="WhatsApp" className='contact-icon' />
                    WhatsApp
                </a>
                <a href="https://www.facebook.com/profile.php?id=61561956656885" className='contact-link' target="_blank" rel="noopener noreferrer">
                    <img src="social-media/Facebook.png" alt="Facebook" className='contact-icon' />
                    Facebook
                </a>
                <a href="https://www.instagram.com/maurezg7/" className='contact-link' target="_blank" rel="noopener noreferrer">
                    <img src="social-media/Instagram.png" alt="Instagram" className='contact-icon' />
                    Instagram
                </a>
                <a href="mailto:tuemail@example.com" className='contact-link'>
                    <img src="social-media/Gmail.png" alt="Email" className='contact-icon' />
                    Correo Electrónico
                </a>
            </div>
        </div>
    );
}
