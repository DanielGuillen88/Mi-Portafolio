import { useState } from 'react';

export default function Etif() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden mb-4">
            {/* Encabezado actúa como botón */}
            <h3 className="accordion-header bg-white border-b-2 border-black text-black p-2 cursor-pointer flex justify-between items-center text-xl fontsemibold transition-colors duration-300 hover:bg-blue-900 hover:text-white"
               onClick={toggleAccordion}
            >
            Cert. Prof. Desarrollo y Aplicaciones Web (Nivel 3) en Etif
            <span className="text-xl ml-2">{isOpen ? '📘' : '📖'}</span>
            </h3>

            {/* Contenido del acordeón */}
            <div className="bg-gray-100 p-4 rounded-b-lg">
                {/* siempre visible */}
                <p className="text-gray-800 leading-relaxed mb-3">
                En <b>Etif</b>, obtuve el <b>Certificado Profesional en Desarrollo de Aplicaciones Web</b>. Fue una experiencia muy valiosa, tuve la oportunidad de aprender junto al profesor <a href="https://www.linkedin.com/in/williamscano/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:bg-blue-900 hover:text-white">Williams</a>. Aunque fue una clase pequeña, el ambiente presencial fue fundamental para mi desarrollo.
                </p>

            {/* visibles al clicar */}
            {isOpen && (
            <div className="transition-all duration-300 ease-in-out">
                <p className="text-gray-800 leading-relaxed mb-3">
                Durante esta formación, profundicé en diversas áreas clave del desarrollo web y la gestión de proyectos:
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
                                    <b>HTML + CSS:</b> Webs mediante lenguajes de marca.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fab fa-bootstrap mr-2 mt-1"></i>
                                <div>
                                    <b>Bootstrap:</b> Diseños y maquetación responsivas.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fa-brands fa-js mr-2 mt-1"></i>
                                <div>
                                    <b>JavaScript + jQuery:</b> Desarrollo y reutilización de componentes software y multimedia mediante lenguajes.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-eye mr-2 mt-1"></i>
                                <div>
                                    <b>Wave + Lighthouse:</b> Usabilidad y accesibilidad en el entorno cliente.
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
                                <i className="fa-brands fa-php mr-2 mt-1"></i>
                                <div>
                                    <b>PHP + XAMPP:</b> Desarrollo backend con acceso a bases de datos.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-database mr-2 mt-1"></i>
                                <div>
                                    <b>MySQL:</b> Operaciones CRUD y gestión de datos desde PHP.
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="flex items-start text-gray-800">
                    <i className="fas fa-cloud-upload-alt mr-2 mt-1"></i>
                    <div>
                        <b>Implantación de aplicaciones Web</b> en entornos internet, intranet y extranet.
                        <ul className="list-none pl-6 mt-2 space-y-2">
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-upload mr-2 mt-1"></i>
                                <div>
                                    <b>FileZilla:</b> Subida de sitios web.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-globe mr-2 mt-1"></i>
                                <div>
                                    <b>InfinityFree:</b> Creación de subdominios y alojamiento webs.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fab fa-wordpress mr-2 mt-1"></i>
                                <div>
                                    <b>WordPress y PrestaShop:</b> Creación rápida de sitios web con CMS.
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="flex items-start text-gray-800">
                    <i className="fa-solid fa-book mr-2 mt-1"></i>
                    <div>
                        <b>Herramientas educativas y gestión de proyectos</b>
                        <ul className="list-none pl-6 mt-2 space-y-2">
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-chalkboard-teacher mr-2 mt-1"></i>
                                <div>
                                    <b>Classroom y MoodleCloud:</b> Manejo de herramientas educativas.
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

                <li className="flex items-start text-gray-800">
                    <i className="fas fa-chart-line mr-2 mt-1"></i>
                    <div>
                        <b>SEO, analítica y monetización</b>
                        <ul className="list-none pl-6 mt-2 space-y-2">
                            <li className="flex items-start text-gray-700">
                                <i className="fa-brands fa-google mr-2 mt-1"></i>
                                <div>
                                    <b>Google Analytics 4:</b> Implementación en webs y maquetación de métricas con <b>Looker</b>.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fa-brands fa-google mr-2 mt-1"></i>
                                <div>
                                    <b>Google AdSense:</b> Creación de campañas e inclusión de anuncios en webs.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-search-dollar mr-2 mt-1"></i>
                                <div>
                                    Análisis de <b>keywords con Semrush</b> o similares para SEO.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <i className="fas fa-sitemap mr-2 mt-1"></i>
                                <div>
                                    Creación de archivos <b>sitemap.xml y robots.txt</b> para optimización de motores de búsqueda.
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
                                <i className="fab fa-android mr-2 mt-1"></i>
                                <div>
                                    Conversión de webs a formato <b>APK</b>.
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