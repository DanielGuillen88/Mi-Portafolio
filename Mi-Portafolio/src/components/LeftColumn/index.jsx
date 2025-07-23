import { useState, useEffect } from "react";
import ProfilePhoto from "./ProfilePhoto";

export default function LeftColumn() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      const isDarkMode = document.documentElement.classList.contains("dark-mode");
      setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
      const html = document.documentElement;
      html.classList.toggle("dark-mode"); // clase activa modo oscuro
      setDarkMode(!darkMode);
    };

    return (
      <>
        {/* Columna izquierda */}
        <div className="bg-blue-900 text-white p-8 h-full">

          <div className="text-center mb-8">
            {/* foto Perfil */}
            <ProfilePhoto />

            <h2 className="text-3xl font-bold mt-4">Daniel Guillén</h2> 
            <h3 className="text-xl font-medium mt-1">Full Stack Developer</h3>
            
            {/* modo oscuro */}
            <span 
              className="inline-block mt-4 px-3 py-1 bg-blue-400 rounded-md cursor-pointer hover:bg-blue-800 transition-colors duration-200"
              onClick={toggleDarkMode}
            >
              {darkMode ? "Modo Oscuro 🌛" : "Modo Claro ☀️"}
            </span>
          </div>
  
          <div className="contact-info mb-8">

            <h3 className="text-blue-400 border-b-2 border-blue-400 pb-1 mt-6 mb-4 text-lg uppercase font-semibold">Contacto</h3>
            {/* Información de Contacto */}
            <a href="mailto:danielguillen85@gmail.com" className="text-white no-underline flex items-center mb-2 hover:text-blue-200 transition-colors duration-200"><i className="fas fa-envelope mr-2 text-blue-400 w-5 text-center"></i> Mi Correo</a>
            <a href="tel:+34669365423" className="text-white no-underline flex items-center mb-2 hover:text-blue-200 transition-colors duration-200"><i className="fas fa-phone mr-2 text-blue-400 w-5 text-center"></i> Mi Teléfono</a>
            <a href="https://wa.me/34669365423?text=Hola%20Dani!%20Me%20encant%C3%B3%20tu%20portafolio%20%C2%BFQu%C3%A9%20te%20parece%20si%20concretamos%20una%20llamada%3F" target="_blank" rel="noopener noreferrer" className="text-white no-underline flex items-center mb-2 hover:text-blue-200 transition-colors duration-200"><i className="fa-brands fa-whatsapp mr-2 text-blue-400 w-5 text-center"></i> Mi Whatsapp</a>
            <a href="https://www.linkedin.com/in/daniel-guillen-oliver/" target="_blank" rel="noopener noreferrer" className="text-white no-underline flex items-center mb-2 hover:text-blue-200 transition-colors duration-200"><i className="fab fa-linkedin mr-2 text-blue-400 w-5 text-center"></i>Mi LinkedIn</a>
            <a href="https://github.com/DanielGuillen88" target="_blank" rel="noopener noreferrer" className="text-white no-underline flex items-center mb-2 hover:text-blue-200 transition-colors duration-200"><i className="fab fa-github mr-2 text-blue-400 w-5 text-center"></i>Mis Repositorios</a>
            <a className="text-white no-underline flex items-center mb-2 hover:text-blue-200 transition-colors duration-200"><i className="fas fa-map-marker-alt mr-2 text-blue-400 w-5 text-center"></i> Barcelona, España</a>
          </div>
  
          
          <div className="skills">
            <h3 className="text-blue-400 border-b-2 border-blue-400 pb-1 mt-6 mb-4 text-lg uppercase font-semibold">Tecnologías</h3>
            {/* Habilidades Técnicas */}
            <ul className="list-none pl-0">
              <li className="mb-2 flex items-center"><i className="fas fa-code mr-2 text-blue-400"></i> HTML5, CSS3, JavaScript</li>
              <li className="mb-2 flex items-center"><i className="fas fa-paint-brush mr-2 text-blue-400"></i> Tailwind, Bootstrap</li>
              <li className="mb-2 flex items-center"><i className="fab fa-react mr-2 text-blue-400"></i> React.js, Vue.js</li>
              <li className="mb-2 flex items-center"><i className="fas fa-mobile-alt mr-2 text-blue-400"></i> PWAs</li> 
              <li className="mb-2 flex items-center"><i className="fab fa-node-js mr-2 text-blue-400"></i> Node.js, Express, Firebase</li>
              <li className="mb-2 flex items-center"><i className="fab fa-php mr-2 text-blue-400"></i> PHP (WordPress, PrestaShop)</li>
              <li className="mb-2 flex items-center"><i className="fas fa-database mr-2 text-blue-400"></i> MySQL, MongoDB, FireStore</li>
              <li className="mb-2 flex items-center"><i className="fa-brands fa-github mr-2 text-blue-400"></i> Git, GitHub</li>
              <li className="mb-2 flex items-center"><i className="fas fa-pencil-ruler mr-2 text-blue-400"></i> Figma, Gimp</li>
              <li className="mb-2 flex items-center"><i className="fa-brands fa-google mr-2 text-blue-400"></i> Analytics 4, Tag Manager, AdSense</li>
            </ul>
          </div>
  
          <div className="languages">
            <h3 className="text-blue-400 border-b-2 border-blue-400 pb-1 mt-6 mb-4 text-lg uppercase font-semibold">Idiomas</h3>
            {/* Idiomas */}
            <ul className="list-none pl-0">
              <li className="mb-2 flex items-center"><i className="fas fa-language mr-2 text-blue-400"></i> Español (Nativo)</li>
              <li className="mb-2 flex items-center"><i className="fas fa-language mr-2 text-blue-400"></i> Catalán (Competente)</li>
              <li className="mb-2 flex items-center"><i className="fas fa-language mr-2 text-blue-400"></i> Inglés (Intermedio)</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
