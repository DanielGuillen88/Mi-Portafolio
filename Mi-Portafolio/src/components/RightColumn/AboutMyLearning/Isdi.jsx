import { useState } from 'react';

export default function Isdi() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden mb-4">
            <h3 className="accordion-header bg-white border-b-2 border-black text-black p-2 cursor-pointer flex justify-between items-center text-xl fontsemibold transition-colors duration-300 hover:bg-blue-900 hover:text-white"
               onClick={toggleAccordion}
            >
            Bootcamp de Programación en ISDI Coders
            <span className="text-xl ml-2">{isOpen ? '📘' : '📖'}</span>
            </h3>

        {/* Contenido del acordeón */}
        <div className="bg-gray-100 p-4 rounded-b-lg">
            {/* siempre visible */}
            <p className="text-gray-800 leading-relaxed mb-3">
            Mi despegue en el mundo del desarrollo web y de aplicaciones full-stack comenzó en la escuela <b>ISDI Coders en Barcelona</b> junto al profesor <a href="https://www.linkedin.com/in/manuelbarzi/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:bg-blue-900 hover:text-white">Manu</a>, donde inicié mi aprendizaje desde cero y senté las bases de mi carrera tecnológica.
            </p>

        {/* visibles al clicar */}
        {isOpen && (
        <div className="transition-all duration-300 ease-in-out">
            <p className="text-gray-800 leading-relaxed mb-3">
            Como desarrollador web full-stack en formación, he adquirido experiencia sólida tanto en <b>frontend como en backend</b>, abarcando las siguientes áreas clave:
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
                                    <b>HTML:</b> Fundamentos sólidos para el desarrollo web.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fa-brands fa-js mr-2 mt-1"></i>
                                <div>
                                    <b>JavaScript:</b> Lógica de programación avanzada para optimización y resolución de problemas.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-mobile-alt mr-2 mt-1"></i>
                                <div>
                                    <b>CSS + Tailwind:</b> Diseño de interfaces responsivas.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fab fa-react mr-2 mt-1"></i>
                                <div>
                                    <b>React + Vite:</b> Crear componentes reutilizables y dinámicos en el frontend.
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="flex items-start text-gray-800">
                    <i className="fas fa-server mr-2 mt-1"></i>
                    <div>
                        <b>Programación web en el entorno servidor</b>
                        <ul className="list-none pl-6 mt-2 space-y-2">
                            <li className="flex items-start text-gray-700">
                                <i className="fa-brands fa-node-js mr-2 mt-1"></i>
                                <div>
                                    <b>Node.js + Express:</b> Crear lógica de peticiones y respuestas en el backend.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-database mr-2 mt-1"></i>
                                <div>
                                    <b>MongoDB + Mongoose:</b> Gestión de bases de datos.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-plug mr-2 mt-1"></i>
                                <div>
                                    <b>APIs REST:</b> Comunicación estructurada HTTP.
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="flex items-start text-gray-800">
                    <i className="fas fa-pizza-slice mr-2 mt-1"></i>
                    <div>
                        <b>Extras</b>
                        <ul className="list-none pl-6 mt-2 space-y-2">
                            <li className="flex items-start text-gray-700">
                                <i className="fa-brands fa-github mr-2 mt-1"></i>
                                <div>
                                    <b>Git/GitHub:</b> Trabajo en equipo y documentación de trabajo.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-vial mr-2 mt-1"></i>
                                <div>
                                    Aplicación de <b>TDD (Desarrollo Guiado por Pruebas, Mocha y Chai)</b> para asegurar la calidad del código.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-puzzle-piece mr-2 mt-1"></i>
                                <div>
                                    Instalación y configuración de módulos necesarios para enriquecer la aplicación.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-book mr-2 mt-1"></i>
                                <div>
                                    Adopción de buenas prácticas en <b>documentación y comentarios claros</b> en el código.
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        )}
        </div>
    </div>
    );
}