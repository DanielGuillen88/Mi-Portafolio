import { useState } from 'react';

export default function TheCorner() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="about-me-accordion">
        <div className="degree accordion-header" onClick={toggleAccordion}>
        Curso Perfeccionamiento Front End en The Corner
        <span className="accordion-icon">{isOpen ? '🧨' : '🚀'}</span>
        </div>

            {/* Primera parte siempre visible */}
            <p className="about-me-paragraph mt-2">
                Tuve la oportunidad de perfeccionar la parte <b>front-end</b> en el desarrollo web en <b>The Corner</b>, donde trabajé por primera vez con compañeros presencialmente, organizando y dividiendo tareas. Todo esto, bajo la guía del profesor <a href="https://www.linkedin.com/in/marcosardelli/" target="_blank" rel="noopener noreferrer" className="teacher-link">Marco</a>.
            </p>

            {/* Más detalles visibles al clicar */}
            {isOpen && (
                <div className="accordion-content">
                    <p className="about-me-paragraph">
                        Durante este curso, me centré en las siguientes tecnologías y herramientas:
                    </p>
                    <ul className="studies-list">

                    <li><i className="fas fa-desktop"></i> <b>Programación web en el entorno cliente</b>
                        <ul className="studies-list">
                        <li><i className="fas fa-file-code"></i> <b>HTML:</b> Webs mediante lenguajes de marca.</li>
                        <li><i className="fa-brands fa-js"></i> <b>JavaScript:</b> Lógica de programación avanzada en  para optimización y resolución de problemas.</li>
                        <li><i className="fab fa-bootstrap"></i> <b>CSS + Bootstrap 5</b>: Diseños y maquetación resposivas.</li> 
                        <li><i className="fab fa-vuejs"></i> <b>Vue.js</b>: Como framework principal de front-end.</li> 
                        <li><i className="fab fa-react"></i> <b>React</b>: Utilizado para proyectos de migración y la implementación de nuevas funcionalidades.</li> 
                        <li><i className="fas fa-cogs"></i> Aplicación de <b>buenas prácticas y estructuras modulares</b> para desarrollar aplicaciones eficientes y escalables.</li>
                        </ul>
                    </li>
                    <br/>
                    <li><i className="fas fa-chalkboard-teacher"></i> <b>Herramientas educativas y gestión de proyectos</b>
                        <ul className="studies-list">
                            <li><i className="fa-brands fa-microsoft"></i> <b>Teams:</b> Comunicación y trabajo en equipo.</li> 
                            <li><i className="fab fa-figma"></i> <b>Figma</b>: Diseño de interfaces y creación de prototipos colaborativos.</li> 
                            <li><i className="fa-brands fa-trello"></i> <b>Trello</b>: Gestión de tareas y coordinación de equipo.</li> 
                            <li><i className="fa-brands fa-github"></i> <b>Git/GitHub:</b> Trabajo en equipo y documentación de trabajo.</li> 
                        </ul>
                    </li>
                    </ul>
                    <p className="about-me-paragraph">
                        <b>Prácticas:</b> Realicé mis prácticas con un cliente vinculado al sector cultural y de eventos de una ciudad catalana. Durante esta experiencia, participé activamente en el proceso de migración de su página web de <b>Vue a React</b>, incorporando nuevas funcionalidades y adaptando componentes utilizando <b>Bootstrap 5</b> para asegurar un diseño consistente y responsive.
                    </p>
                </div>
            )}
        </div>
    );
}