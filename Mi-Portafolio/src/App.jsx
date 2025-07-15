
export default function App() {

  return (
    <div className="cv-container"> {/* Cambiado 'class' a 'className' */}
      {/* Columna izquierda */}
      <div className="left-column"> {/* Cambiado 'class' a 'className' */}
        <div className="profile"> {/* Cambiado 'class' a 'className' */}
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZmlsfGVufDB8fDB8fHww" alt="Foto de perfil" className="profile-img" /> {/* Cambiado 'class' a 'className' y añadido autocierre */}
          <h2>Tu Nombre</h2>
          <p className="subtitle">Desarrollador Web Full Stack</p> {/* Cambiado 'class' a 'className' */}
        </div>

        <div className="contact-info"> {/* Cambiado 'class' a 'className' */}
          <h3 className="section-title">Contacto</h3> {/* Cambiado 'class' a 'className' */}
          <a href="mailto:tucorreo@ejemplo.com"><i className="fas fa-envelope"></i> tucorreo@ejemplo.com</a> {/* Cambiado 'class' a 'className' */}
          <a href="tel:+123456789"><i className="fas fa-phone"></i> +34 123 456 789</a> {/* Cambiado 'class' a 'className' */}
          <a href="https://linkedin.com/tuperfil" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> linkedin.com/tuperfil</a> {/* Cambiado 'class' a 'className' y añadido rel */}
          <a href="https://github.com/tuperfil" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> github.com/tuperfil</a> {/* Cambiado 'class' a 'className' y añadido rel */}
          <a href="#"><i className="fas fa-map-marker-alt"></i> Barcelona, España</a> {/* Cambiado 'class' a 'className' */}
        </div>

        <div className="skills"> {/* Cambiado 'class' a 'className' */}
          <h3 className="section-title">Habilidades Técnicas</h3> {/* Cambiado 'class' a 'className' */}
          <ul className="skills-list"> {/* Cambiado 'class' a 'className' */}
            <li><i className="fas fa-code"></i> HTML5, CSS3, JavaScript</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fab fa-react"></i> React.js / Vue.js</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fab fa-php"></i> PHP (PrestaShop)</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fas fa-database"></i> MySQL, MongoDB</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fab fa-node-js"></i> Node.js, Express</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fas fa-mobile-alt"></i> PWAs</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fab fa-git-alt"></i> Git, GitHub</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fab fa-docker"></i> Docker</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fas fa-chart-line"></i> GA4, Google Tag Manager</li> {/* Cambiado 'class' a 'className' */}
          </ul>
        </div>

        <div className="languages"> {/* Cambiado 'class' a 'className' */}
          <h3 className="section-title">Idiomas</h3> {/* Cambiado 'class' a 'className' */}
          <ul className="skills-list"> {/* Cambiado 'class' a 'className' */}
            <li><i className="fas fa-language"></i> Español (Nativo)</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fas fa-language"></i> Catalán (Competente)</li> {/* Cambiado 'class' a 'className' */}
            <li><i className="fas fa-language"></i> Inglés (Intermedio)</li> {/* Cambiado 'class' a 'className' */}
          </ul>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="right-column"> {/* Cambiado 'class' a 'className' */}
        <div className="name-title"> {/* Cambiado 'class' a 'className' */}
          <h1>Tu Nombre</h1>
          <p className="subtitle">Desarrollador Web Full Stack | Especialista en eCommerce</p> {/* Cambiado 'class' a 'className' */}
        </div>

        <section>
          <h3 className="section-title">Sobre Mí</h3> {/* Cambiado 'class' a 'className' */}
          <p>
            Desarrollador web titulado en Desarrollo y Aplicaciones Web (nivel 3) con experiencia en creación de aplicaciones full stack, tiendas online con PrestaShop y análisis de datos con GA4. Apasionado por el desarrollo de PWAs y la optimización del rendimiento web. Combinó habilidades técnicas con conocimientos en marketing digital para ofrecer soluciones integrales.
          </p>
        </section>

        <section>
          <h3 className="section-title">Experiencia Profesional</h3>
          <div className="experience-item"> {/* Cambiado 'class' a 'className' */}
            <div className="job-title">Desarrollador Web Full Stack (Freelance)</div> {/* Cambiado 'class' a 'className' */}
            <div className="date">2022 - Presente</div> {/* Cambiado 'class' a 'className' */}
            <ul>
              <li>Desarrollo de tiendas eCommerce con PrestaShop, incluyendo módulos personalizados.</li>
              <li>Creación de PWAs para mejorar la experiencia móvil de clientes.</li>
              <li>Integración de GA4 y Google Ads para seguimiento de conversiones.</li>
            </ul>
          </div>

          <div className="experience-item"> {/* Cambiado 'class' a 'className' */}
            <div className="job-title">Practicante de Desarrollo Web</div> {/* Cambiado 'class' a 'className' */}
            <div className="company">Empresa Tecnológica, Barcelona</div> {/* Cambiado 'class' a 'className' */}
            <div className="date">2021 - 2022</div> {/* Cambiado 'class' a 'className' */}
            <ul>
              <li>Colaboración en el desarrollo de aplicaciones web con React y Node.js.</li>
              <li>Optimización de rendimiento y SEO para clientes.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="section-title">Educación</h3> {/* Cambiado 'class' a 'className' */}
          <div className="education-item"> {/* Cambiado 'class' a 'className' */}
            <div className="degree">Certificado Profesional en Desarrollo y Aplicaciones Web (Nivel 3)</div> {/* Cambiado 'class' a 'className' */}
            <div className="institution">Centro de Formación, Barcelona</div> {/* Cambiado 'class' a 'className' */}
            <div className="date">2025</div> {/* Cambiado 'class' a 'className' */}
          </div>
        </section>

        <section>
          <h3 className="section-title">Proyectos Destacados</h3> {/* Cambiado 'class' a 'className' */}
          <div className="project-card"> {/* Cambiado 'class' a 'className' */}
            <h4 className="project-title">Tienda eCommerce con PrestaShop</h4> {/* Cambiado 'class' a 'className' */}
            <p>Desarrollo completo de tienda online con integración de GA4 y pasarela de pago. Optimización del rendimiento y diseño responsive.</p>
            <p><strong>Tecnologías:</strong> PHP, MySQL, JavaScript, GA4</p>
          </div>

          <div className="project-card"> {/* Cambiado 'class' a 'className' */}
            <h4 className="project-title">Aplicación PWA para Seguimiento de Métricas</h4> {/* Cambiado 'class' a 'className' */}
            <p>PWA que muestra datos de GA4 en tiempo real con gráficos interactivos y capacidad de trabajo offline.</p>
            <p><strong>Tecnologías:</strong> React, Service Workers, Google APIs</p>
          </div>
        </section>
      </div>
    </div>
  )
}