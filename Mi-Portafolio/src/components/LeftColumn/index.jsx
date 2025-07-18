import ProfilePhoto from "./ProfilePhoto";

export default function LeftColumn() {
    return (
      <>
        {/* Columna izquierda */}
        <div className="left-column">
          <div className="profile">
            <ProfilePhoto />
            <h2>Daniel Guillén</h2>
            <p className="subtitle">Full Stack Developer</p>
          </div>
  
          <div className="contact-info">
            <h3 className="section-title">Contacto</h3>
            <a href="mailto:danielguillen85@gmail.com"><i className="fas fa-envelope"></i> Mi Correo</a>
            <a href="tel:+34669365423"><i className="fas fa-phone"></i> Mi Teléfono</a>
            <a href="https://wa.me/34669365423?text=Hola%20Dani!%20Me%20encant%C3%B3%20tu%20portafolio%20%C2%BFQu%C3%A9%20te%20parece%20si%20concretamos%20una%20llamada%3F"><i className="fa-brands fa-whatsapp"></i> Mi Whatsapp</a>
            <a href="https://www.linkedin.com/in/daniel-guillen-oliver/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>Mi LinkedIn</a>
            <a href="https://github.com/DanielGuillen88" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>Mis Repositorios</a>
            <a><i className="fas fa-map-marker-alt"></i> Barcelona, España</a>
          </div>
  
          <div className="skills">
            <h3 className="section-title">Tecnologías</h3>
            {/* para encontrar mas iconos https://fontawesome.com/search?ic=brands */}
            <ul className="skills-list">
              <li><i className="fas fa-code"></i> HTML5, CSS3, JavaScript</li>
              <li><i className="fas fa-paint-brush"></i> Tailwind, Bootstrap</li>
              <li><i className="fab fa-react"></i> React.js, Vue.js</li>
              <li><i className="fas fa-mobile-alt"></i> PWAs</li> 
              <li><i className="fab fa-node-js"></i> Node.js, Express, Firebase</li>
              <li><i className="fab fa-php"></i> PHP (WordPress, PrestaShop)</li>
              <li><i className="fas fa-database"></i> MySQL, MongoDB, FireStore</li>
              <li><i className="fa-brands fa-github"></i> Git, GitHub</li>
              <li><i className="fas fa-pencil-ruler"></i> Figma, Gimp</li>
              <li><i className="fa-brands fa-google"></i> Analytics 4, Tag Manager, AdSense</li>
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