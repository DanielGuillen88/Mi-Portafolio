import { useState } from 'react';
import { elviaje, mas, mcdonalds, tienda, trabajadores, trastienda, usuarios } from '../../../img';

export default function PlayingWithPhp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
      setIsOpen(!isOpen);
  };

  const phpProjects = [
    { id: 'trabajadores', src: trabajadores, alt: 'Trabajadores', href: "https://danielguillen.free.nf/playing-php//index.html" },
    { id: 'usuarios', src: usuarios, alt: 'Usuarios', href: "https://danielguillen.free.nf/playing-php//index.html" },
    { id: 'mcdonalds', src: mcdonalds, alt: ' Mcdonalds', href: "https://danielguillen.free.nf/playing-php//index.html" },
    { id: 'tienda', src: tienda, alt: 'Tienda', href: "https://danielguillen.free.nf/playing-php//index.html" },
    { id: 'trastienda', src: trastienda, alt: 'Trastienda', href: "https://danielguillen.free.nf/playing-php//index.html" },
    { id: 'elviaje', src: elviaje, alt: 'El Viaje', href: "https://danielguillen.free.nf/elviaje" },
    { id: 'mas', src: mas, alt: 'Mas', href: "https://danielguillen.free.nf/index.html" },
];

      return (
<div className="">
            {/* Encabezado actúa como botón */}
            <h3
                className="degree accordion-header p-1 flex justify-between items-center"
                onClick={toggleAccordion}
            >
                Playing with PHP <i className="fab fa-php"></i>
            </h3>

            {/* Contenido del acordeón */}
            {isOpen && (
                <div className="transition-all duration-300 ease-in-out">
                    <div className="carousel w-full rounded-box shadow-xl">
                        {phpProjects.map((project) => (
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