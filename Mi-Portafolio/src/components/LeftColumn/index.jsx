import ProfilePhoto from "./ProfilePhoto";

export default function LeftColumn() {
    return (
      <>
        {/* Columna izquierda */}
        <div className="left-column">
          <div className="profile">
            <ProfilePhoto />
            <h2>Daniel Guillén</h2>
            <p className="subtitle">Desarrollador Web Full Stack</p>
          </div>
  
          <div className="contact-info">
            <h3 className="section-title">Contacto</h3>
            <a href="mailto:tucorreo@ejemplo.com"><i className="fas fa-envelope"></i> tucorreo@ejemplo.com</a>
            <a href="tel:+123456789"><i className="fas fa-phone"></i> +34 123 456 789</a>
            <a href="https://linkedin.com/tuperfil" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> linkedin.com/tuperfil</a>
            <a href="https://github.com/tuperfil" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> github.com/tuperfil</a>
            <a href="#"><i className="fas fa-map-marker-alt"></i> Barcelona, España</a>
          </div>
  
          <div className="skills">
            <h3 className="section-title">Habilidades Técnicas</h3>
            <ul className="skills-list">
              <li><i className="fas fa-code"></i> HTML5, CSS3, JavaScript</li>
              <li><i className="fab fa-react"></i> React.js / Vue.js</li>
              <li><i className="fab fa-php"></i> PHP (PrestaShop)</li>
              <li><i className="fas fa-database"></i> MySQL, MongoDB</li>
              <li><i className="fab fa-node-js"></i> Node.js, Express</li>
              <li><i className="fas fa-mobile-alt"></i> PWAs</li>
              <li><i className="fab fa-git-alt"></i> Git, GitHub</li>
              <li><i className="fab fa-docker"></i> Docker</li>
              <li><i className="fas fa-chart-line"></i> GA4, Google Tag Manager</li>
            </ul>
          </div>
  
          <div className="languages">
            <h3 className="section-title">Idiomas</h3>
            <ul className="skills-list">
              <li><i className="fas fa-language"></i> Español (Nativo)</li>
              <li><i className="fas fa-language"></i> Catalán (Competente)</li>
              <li><i className="fas fa-language"></i> Inglés (Intermedio)</li>
            </ul>
          </div>
        </div>
      </>
    );
  }