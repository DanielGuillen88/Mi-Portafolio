import { useState } from 'react';
import { estudiantes, form, jabon, luffy, mas, method, puntoblanco, thecorner } from '../../../img';

export default function PlayingWithJs() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
      setIsOpen(!isOpen);
  };

  const jsProjects = [
    { id: 'luffy', src: luffy, alt: 'Luffy', href: "https://danielguillen.free.nf/playing-js//index.html" },
    { id: 'method', src: method, alt: 'Métodos de array', href: "https://danielguillen.free.nf/playing-js//index.html" },
    { id: 'puntoblanco', src: puntoblanco, alt: 'Punto Blanco', href: "https://danielguillen.free.nf/playing-js//index.html" },
    { id: 'thecorner', src: thecorner, alt: 'TheCorner', href: "https://danielguillen.free.nf/playing-js//index.html" },
    { id: 'form', src: form, alt: 'Formulario', href: "https://danielguillen.free.nf/playing-js//index.html" },
    { id: 'jabon', src: jabon, alt: 'Jabones', href: "https://danielguillen.free.nf/playing-js//index.html" },
    { id: 'estudiantes', src: estudiantes, alt: 'Estudiantes', href: "https://danielguillen.free.nf/playing-js//index.html" },
    { id: 'mas', src: mas, alt: 'Mas', href: "https://danielguillen.free.nf/index.html" },
];

      return (
<div className="">
            {/* Encabezado actúa como botón */}
            <h3
                className="degree accordion-header p-1 flex justify-between items-center"
                onClick={toggleAccordion}
            >
                Playing with JavaScript <i className="fa-brands fa-js"></i>
            </h3>

            {/* Contenido del acordeón */}
            {isOpen && (
                <div className="transition-all duration-300 ease-in-out">
                    <div className="carousel w-full rounded-box shadow-xl">
                        {jsProjects.map((project) => (
                            <div key={project.id} className="carousel-item w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                                <a href={project.href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                    <img
                                        src={project.src}
                                        alt={project.alt}
                                        className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
                                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Error+Carga`; }}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
      );
    }