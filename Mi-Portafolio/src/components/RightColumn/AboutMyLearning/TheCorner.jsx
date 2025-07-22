import { useState } from 'react';

export default function TheCorner() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden mb-4">
            <h3 className="accordion-header bg-white border-b-2 border-black text-black p-2 cursor-pointer flex justify-between items-center text-xl fontsemibold transition-colors duration-300 hover:bg-blue-900 hover:text-white"
               onClick={toggleAccordion}
            >
            Curso Perfeccionamiento Front End en The Corner
            <span className="text-xl ml-2">{isOpen ? '📘' : '📖'}</span>
            </h3>

        {/* Contenido del acordeón */}
        <div className="bg-gray-100 p-4 rounded-b-lg">
            {/* siempre visible */}
            <p className="text-gray-800 leading-relaxed mb-3">
                Tuve la oportunidad de perfeccionar la parte <b>front-end</b> en el desarrollo web en <b>The Corner</b>, donde trabajé por primera vez con compañeros presencialmente, organizando y dividiendo tareas. Todo esto, bajo la guía del profesor <a href="https://www.linkedin.com/in/marcosardelli/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:bg-blue-900 hover:text-white">Marco</a>.
            </p>

        {/* visibles al clicar */}
        {isOpen && (
        <div className="transition-all duration-300 ease-in-out">
            <p className="text-gray-800 leading-relaxed mb-3">
                        Durante este curso, me centré en las siguientes tecnologías y herramientas:
                    </p>
                    
                <ul className="list-none pl-0 space-y-4">

                    <li className="flex items-start text-gray-800">
                        <i className="fas fa-desktop mr-2 mt-1"></i>
                        <div>
                            <b>Programación web en el entorno cliente</b>

                            <ul className="list-none pl-6 mt-2 space-y-2">
                                <li className="flex items-start text-gray-700">
                                    <i className="fas fa-file-code mr-2 mt-1"></i>
                                    <div>
                                        <b>HTML:</b> Webs mediante lenguajes de marca.
                                    </div>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <i className="fa-brands fa-js mr-2 mt-1"></i>
                                    <div>
                                        <b>JavaScript:</b> Lógica de programación avanzada para optimización y resolución de problemas.
                                    </div>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <i className="fab fa-bootstrap mr-2 mt-1"></i>
                                    <div>
                                        <b>CSS + Bootstrap 5</b>: Diseños y maquetación responsivas.
                                    </div>
                                </li> 
                                <li className="flex items-start text-gray-700">
                                    <i className="fab fa-vuejs mr-2 mt-1"></i>
                                    <div>
                                        <b>Vue.js</b>: Como framework principal de front-end.
                                    </div>
                                </li> 
                                <li className="flex items-start text-gray-700">
                                    <i className="fab fa-react mr-2 mt-1"></i>
                                    <div>
                                        <b>React</b>: Utilizado para proyectos de migración y la implementación de nuevas funcionalidades.
                                    </div>
                                </li> 
                                <li className="flex items-start text-gray-700">
                                    <i className="fas fa-cogs mr-2 mt-1"></i>
                                    <div>
                                        Aplicación de <b>buenas prácticas y estructuras modulares</b> para desarrollar aplicaciones eficientes y escalables.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="flex items-start text-gray-800">
                        <i className="fas fa-chalkboard-teacher mr-2 mt-1"></i>
                        <div>
                            <b>Herramientas educativas y gestión de proyectos</b>
                            <ul className="list-none pl-6 mt-2 space-y-2">
                                <li className="flex items-start text-gray-700">
                                    <i className="fa-brands fa-microsoft mr-2 mt-1"></i>
                                    <div>
                                        <b>Teams:</b> Comunicación y trabajo en equipo.
                                    </div>
                                </li> 
                                <li className="flex items-start text-gray-700">
                                    <i className="fab fa-figma mr-2 mt-1"></i>
                                    <div>
                                        <b>Figma</b>: Diseño de interfaces y creación de prototipos colaborativos.
                                    </div>
                                </li> 
                                <li className="flex items-start text-gray-700">
                                    <i className="fa-brands fa-trello mr-2 mt-1"></i>
                                    <div>
                                        <b>Trello</b>: Gestión de tareas y coordinación de equipo.
                                    </div>
                                </li> 
                                <li className="flex items-start text-gray-700">
                                    <i className="fa-brands fa-github mr-2 mt-1"></i>
                                    <div>
                                        <b>Git/GitHub:</b> Trabajo en equipo y documentación de trabajo.
                                    </div>
                                </li> 
                            </ul>
                        </div>
                    </li>
                </ul>
                <br />
                    <p className="about-me-paragraph">
                        <b>Prácticas:</b> Realicé mis prácticas con un cliente vinculado al sector cultural y de eventos de una ciudad catalana. Durante esta experiencia, participé activamente en el proceso de migración de su página web de <b>Vue a React</b>, incorporando nuevas funcionalidades y adaptando componentes utilizando <b>Bootstrap 5</b> para asegurar un diseño consistente y responsive.
                    </p>
            </div>
            )}
            </div>
        </div>
    );
}