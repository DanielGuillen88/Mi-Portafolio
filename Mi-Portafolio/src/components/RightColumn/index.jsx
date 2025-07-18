import AboutMe from "./aboutme";
// import AboutMyDevExperience from "./AboutMyDevExperience";
import AboutMyLearning from "./AboutMyLearning";
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

                    <AboutMyLearning />

                </section>

                {/* <section>

                    <AboutMyDevExperience />

                </section> */}

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