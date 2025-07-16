import AboutMe from "./aboutme";
import AboutMyJobs from "./AboutMyJobs";
import "./index.css";

export default function RightColumn() {
    return (
        <>
            {/* Columna derecha */}
            <div className="right-column">
                <div className="name-title">
                    <h1>Bienvenido a Mi Portafolio</h1>
                    {/* <p className="subtitle">Desarrollador Web Full Stack | Especialista en eCommerce</p> */}
                </div>

                <section>
                    
                    <AboutMe />

                </section>

                <section>

                    <AboutMyJobs />

                </section>

                <section>
                    <h3 className="section-title">Experiencia Profesional</h3>
                    <div className="experience-item">
                        <div className="job-title">Desarrollador Web Full Stack (Freelance)</div>
                        <div className="date">2022 - Presente</div>
                        <ul>
                            <li>Desarrollo de tiendas eCommerce con PrestaShop, incluyendo módulos personalizados.</li>
                            <li>Creación de PWAs para mejorar la experiencia móvil de clientes.</li>
                            <li>Integración de GA4 y Google Ads para seguimiento de conversiones.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="job-title">Practicante de Desarrollo Web</div>
                        <div className="company">Empresa Tecnológica, Barcelona</div>
                        <div className="date">2021 - 2022</div>
                        <ul>
                            <li>Colaboración en el desarrollo de aplicaciones web con React y Node.js.</li>
                            <li>Optimización de rendimiento y SEO para clientes.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3 className="section-title">Educación</h3>
                    <div className="education-item">
                        <div className="degree">Certificado Profesional en Desarrollo y Aplicaciones Web (Nivel 3)</div>
                        <div className="institution">Centro de Formación, Barcelona</div>
                        <div className="date">2025</div>
                    </div>
                </section>

                <section>
                    <h3 className="section-title">Proyectos Destacados</h3>
                    <div className="project-card">
                        <h4 className="project-title">Tienda eCommerce con PrestaShop</h4>
                        <p>Desarrollo completo de tienda online con integración de GA4 y pasarela de pago. Optimización del rendimiento y diseño responsive.</p>
                        <p><strong>Tecnologías:</strong> PHP, MySQL, JavaScript, GA4</p>
                    </div>

                    <div className="project-card">
                        <h4 className="project-title">Aplicación PWA para Seguimiento de Métricas</h4>
                        <p>PWA que muestra datos de GA4 en tiempo real con gráficos interactivos y capacidad de trabajo offline.</p>
                        <p><strong>Tecnologías:</strong> React, Service Workers, Google APIs</p>
                    </div>
                </section>
            </div>
        </>
    );
}