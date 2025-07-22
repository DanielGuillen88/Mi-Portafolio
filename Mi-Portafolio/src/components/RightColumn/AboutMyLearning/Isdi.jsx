import { useState } from 'react';

export default function Isdi() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="about-me-accordion">
        <div className="degree accordion-header" onClick={toggleAccordion}>
        Bootcamp de Programación en ISDI Coders
            <span className="accordion-icon">{isOpen ? '🧨' : '🚀'}</span>
        </div>

        {/* Primera parte siempre visible */}
        <p className="about-me-paragraph mt-2">
            Mi despegue en el mundo del desarrollo web y de aplicaciones full-stack comenzó en la escuela <b>ISDI Coders en Barcelona</b> junto al profesor <a href="https://www.linkedin.com/in/manuelbarzi/" target="_blank" rel="noopener noreferrer" className="teacher-link">Manu</a>, donde inicié mi aprendizaje desde cero y senté las bases de mi carrera tecnológica.
        </p>

        {/* Más detalles visibles al clicar */}
        {isOpen && (
        <div className="accordion-content">
        <p className="about-me-paragraph">
            Como desarrollador web full-stack en formación, he adquirido experiencia sólida tanto en <b>frontend como en backend</b>, abarcando las siguientes áreas clave:
        </p>
        <ul className="studies-list">
            <li><i className="fas fa-desktop"></i> <b>Programación web en el entorno cliente</b>
                <ul className="studies-list">
                <li><i className="fas fa-file-code"></i> <b>HTML:</b> Fundamentos sólidos para el desarrollo web.</li>
                <li><i className="fa-brands fa-js"></i> <b>JavaScript:</b> Lógica de programación avanzada en  para optimización y resolución de problemas.</li>
                <li><i className="fas fa-mobile-alt"></i> <b>CSS + Tailwind:</b> Diseño de interfaces responsivas.</li> 
                <li><i className="fab fa-react"></i> <b>React + Vite:</b> Crear componentes reutilizables y dinámicos en el frontend.</li> 
                </ul>
            </li>
            <br/>
            <li><i className="fas fa-server"></i> <b>Programación web en el entorno servidor</b>
                <ul className="studies-list">
                <li><i className="fa-brands fa-node-js"></i> <b>Node.js + Express:</b> Crear lógica de peticiones y respuestas en el backend.</li> 
                <li><i className="fas fa-database"></i> <b>MongoDB + Mongoose:</b> Gestión de bases de datos.</li>
                <li><i className="fas fa-plug"></i> <b>APIs REST:</b> Comunicación estructurada HTTP.</li>
                </ul>
            </li>
            <br/>
            <li><i className="fas fa-pizza-slice"></i> <b>Extras</b>
                <ul className="studies-list">
                <li><i className="fa-brands fa-github"></i> <b>Git/GitHub:</b> Trabajo en equipo y documentación de trabajo.</li> 
                <li><i className="fas fa-vial"></i> Aplicación de <b>TDD (Desarrollo Guiado por Pruebas, Mocha y Chai)</b> para asegurar la calidad del código.</li>
                <li><i className="fas fa-puzzle-piece"></i> Instalación y configuración de módulos necesarios para enriquecer la aplicación.</li> 
                <li><i className="fas fa-book"></i> Adopción de buenas prácticas en <b>documentación y comentarios claros</b> en el código.</li>
                </ul>
            </li>
        </ul>
        </div>
        )}
    </div>
    );
}