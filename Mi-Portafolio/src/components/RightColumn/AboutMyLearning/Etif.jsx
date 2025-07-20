import { useState } from 'react';

export default function Etif() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="about-me-accordion">
        <div className="degree accordion-header" onClick={toggleAccordion}>
        Certificado Profesional en Desarrollo y Aplicaciones Web (Nivel 3) en Etif
            <span className="accordion-icon">{isOpen ? '🧨' : '🚀'}</span>
        </div>

        {/* Primera parte siempre visible */}
        <p className="about-me-paragraph">
            En <b>Etif</b>, obtuve el <b>Certificado Profesional en Desarrollo de Aplicaciones Web</b>. Fue una experiencia muy valiosa, tuve la oportunidad de aprender junto al profesor <a href="https://www.linkedin.com/in/williamscano/" target="_blank" rel="noopener noreferrer" className="teacher-link">Williams</a>. Aunque fue una clase pequeña, el ambiente presencial fue fundamental para mi desarrollo.
        </p>

        {/* Más detalles visibles al clicar */}
        {isOpen && (
        <div className="accordion-content">
        <p className="about-me-paragraph">
            Durante esta formación, profundicé en diversas áreas clave del desarrollo web y la gestión de proyectos:
        </p>
        <ul className="studies-list">
            <li><i className="fas fa-desktop"></i> <b>Programación web en el entorno cliente</b>
                <ul className="studies-list">
                    <li><i className="fas fa-file-code"></i> <b>HTML + CSS:</b> Webs mediante lenguajes de marca.</li>
                    <li><i className="fab fa-bootstrap"></i> <b>Bootstrap:</b> Diseños y maquetación resposivas.</li>
                    <li><i className="fa-brands fa-js"></i> <b>JavaScript + jQuery:</b> Desarrollo y reutilización de componentes software y multimedia mediante lenguajes.</li>
                    <li><i className="fas fa-eye"></i> <b>Wave + Lighthouse:</b> Usabilidad y accesibilidad en el entorno cliente.</li>
                </ul>
            </li>
            <br/>
            <li><i className="fas fa-server"></i> <b>Programación web en el entorno servidor</b>
                <ul className="studies-list">
                    <li><i className="fa-brands fa-php"></i> <b>PHP + XAMPP:</b> Desarrollo backend con acceso a bases de datos.</li>
                    <li><i className="fas fa-database"></i> <b>MySQL:</b> Operaciones CRUD y gestión de datos desde PHP.</li>
                </ul>
            </li>
            <br/>
            <li><i className="fas fa-cloud-upload-alt"></i> <b>Implantación de aplicaciones Web</b> en entornos internet, intranet y extranet.
                <ul className="studies-list">
                    <li><i className="fas fa-upload"></i> <b>FileZilla:</b> Subida de sitios web.</li>
                    <li><i className="fas fa-globe"></i> <b>InfinityFree:</b> Creación de subdominios y alojamiento webs.</li>
                    <li><i className="fab fa-wordpress"></i> <b>WordPress y PrestaShop:</b> Creación rápida de sitios web con CMS.</li>
                </ul>
            </li>
            <br/>
            <li><i className="fa-solid fa-book"></i> <b>Herramientas educativas y gestión de proyectos</b>
                <ul className="studies-list">
                    <li><i className="fas fa-chalkboard-teacher"></i> <b>Classroom y MoodleCloud:</b >Manejo de herramientas educativas.</li>
                    <li><i className="fa-brands fa-github"></i> <b>Git/GitHub:</b> Trabajo en equipo y documentación de trabajo.</li> 
                </ul>
            </li>
            <br/>
            <li><i className="fas fa-chart-line"></i> <b>SEO, analítica y monetización</b>
                <ul className="studies-list">
                <li><i className="fa-brands fa-google"></i> <b>Google Analytics 4: </b> Implementación en webs y maquetación de métricas con <b>Looker</b>.</li>
                    <li><i className="fa-brands fa-google"></i> <b>Google AdSense:</b> Creación de campañas e inclusión de anuncios en webs.</li>
                    <li><i className="fas fa-search-dollar"></i> Análisis de <b>keywords con Semrush</b> o similares para SEO.</li>
                    <li><i className="fas fa-sitemap"></i> Creación de archivos <b>sitemap.xml y robots.txt</b> para optimización de motores de búsqueda.</li>
                </ul>
            </li>
            <br/>
            <li><i className="fas fa-pizza-slice"></i> <b>Extras</b>
                <ul className="studies-list">
                    <li><i className="fab fa-android"></i> Conversión de webs a formato <b>APK</b>.</li>
                </ul>
            </li>

        </ul>
        </div>
        )}
    </div>
    );
}