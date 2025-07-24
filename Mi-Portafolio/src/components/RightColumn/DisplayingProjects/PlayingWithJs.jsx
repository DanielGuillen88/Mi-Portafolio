import { useState } from 'react';
import { estudiantes, form, jabon, luffy, mas, method, puntoblanco, thecorner } from '../../../img';

export default function PlayingWithJs() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
      setIsOpen(!isOpen);
  };

  const jsProjects = [
    { id: 'luffy', src: luffy, alt: 'Luffy', href: "https://danielguillen.free.nf/playing-js/1-cv-luffy/index.html" },
    { id: 'method', src: method, alt: 'Métodos de array', href: "https://danielguillen.free.nf/playing-js/2-method-array/index.html" },
    { id: 'puntoblanco', src: puntoblanco, alt: 'Punto Blanco', href: "https://danielguillen.free.nf/ver1/index.html" },
    { id: 'thecorner', src: thecorner, alt: 'TheCorner', href: "https://danielguillen.free.nf/playing-js/6-the-corner/index.html" },
    { id: 'form', src: form, alt: 'Formulario', href: "https://danielguillen.free.nf/playing-js/8-form/index.html" },
    { id: 'jabon', src: jabon, alt: 'Jabones', href: "https://danielguillen.free.nf/playing-js/9-tienda-jabon/index.html" },
    { id: 'estudiantes', src: estudiantes, alt: 'Estudiantes', href: "https://danielguillen.free.nf/playing-js/10-gestion-estudiantes/index.html" },
    { id: 'mas', src: mas, alt: 'Mas', href: "https://danielguillen.free.nf/portafolio.html" },
];

      return (
        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden mb-4">
        {/* Encabezado actúa como botón */}
        <h3 className="accordion-header bg-white border-b-2 border-black text-black p-2 cursor-pointer flex justify-between items-center text-xl fontsemibold transition-colors duration-300 hover:bg-blue-900 hover:text-white"
           onClick={toggleAccordion}
        >                
        Playing with JavaScript <i className="fa-brands fa-js"></i>
        </h3>

            {/* Contenido del acordeón */}
            {isOpen && (
                <div className="bg-gray-100 p-4 rounded-b-lg">
                    <div className="transition-all duration-300 ease-in-out">
                        <div className="carousel w-full">
                        {jsProjects.map((project) => (
                                <div key={project.id} className="carousel-item w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                        <img
                                            src={project.src}
                                            alt={project.alt}
                                            className="w-full transition-transform duration-300 hover:border-2 hover:border-blue-400 hover:scale-95"
                                            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Error+Carga`; }}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
      );
    }