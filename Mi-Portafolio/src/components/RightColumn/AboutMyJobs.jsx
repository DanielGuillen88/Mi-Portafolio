import { useState } from 'react';

export default function AboutMyJobs() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="about-me-accordion"> {/* Consider renaming this class to "experience-accordion" or similar for clarity */}
            <h3 className="section-title accordion-header" onClick={toggleAccordion}>
                Dónde he trabajado
                <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
            </h3>

            {/* Párrafo siempre visible - Un resumen o la parte más reciente/relevante */}
            <p className="about-me-paragraph">
                Mi vida laboral esta llena de <b>experiencias diversas, como en logística, administración, transporte</b> y acabando ahora en el <b>desarrollo de aplicaciones</b>. Esta evolución me ha dotado de una perspectiva diferente para resolver problemas y optimizar procesos.
            </p>

            {/* Más detalles visibles al clicar */}
            {isOpen && (
                <div className="accordion-content">
                    <p className="about-me-paragraph">
                        Comencé en el sector del <b>e-commerce de libros y películas</b>, gestionando tanto ventas al cliente final como servicios de externalización de almacenes para pequeñas tiendas. Poco después, en una <b>fábrica de piezas de plástico</b> (incluyendo componentes para Opel), adquirí experiencia en entornos de producción.
                    </p>
                    <p className="about-me-paragraph">
                        Mi paso por <b>DHL</b> me sumergió en la <b>gestión aduanera</b> y la documentación de envíos, además de resolver <b>incidencias con los envíos "más problemáticos"</b>. Posteriormente, en la <b>Policía Local</b>, fui parte del departamento de Vía Pública, administrando documentación, registrando multas de tráfico y apoyando la gestión de terrazas y mercados.
                    </p>
                    <p className="about-me-paragraph">
                        Volví al e-commerce con una tienda de <b>consumibles de impresora</b>, donde tuve mi primer contacto con <b>PrestaShop</b> y la migración a <b>WooCommerce</b>, centrándome en la logística. Tras la crisis, compaginé la obtención de mi carnet de camión pesado con el <b>picking en los almacenes de Decathlon</b> (abasteciendo Europa), incluso colaborando en eventos de equipo.
                    </p>
                    <p className="about-me-paragraph">
                        Durante la pandemia de COVID, trabajé en <b>Seur Now</b>, crucial para la <b>conexión entre hospitales y laboratorios</b>, transportando PCRs y vacunas. Luego, en <b>Integra2</b>, conduje camiones refrigerados para material veterinario. También abastecí comercios Spar desde los almacenes de <b>Fragadis</b> y gestioné la recogida y transporte de mercancías peligrosas en <b>Catalana de Residuos</b>.
                    </p>
                     <p className="about-me-paragraph">
                        Fue mientras trabajaba en <b>Catalana de Residuos</b> cuando inicié mi <b>aprendizaje en desarrollo web y de aplicaciones con nuevas tecnologías</b>. Actualmente, sigo expandiendo mis conocimientos y estoy desarrollando una app para la gestión de inventario y salida de mercancías, a la vez que compagino mis estudios con mi trabajo en <b>FCC</b> como conductor de camión de recogida de residuos.
                    </p>
                </div>
            )}
        </div>
    );
}
