import { useState } from 'react';
import { elviaje, mas, mcdonalds, tienda, trabajadores, trastienda, usuarios } from '../../../img';

export default function PlayingWithPhp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
      setIsOpen(!isOpen);
  };

  const phpProjects = [
    { id: 'trabajadores', src: trabajadores, alt: 'Trabajadores', href: "https://danielguillen.free.nf/playing-php/2-gestion-trabajadores/index.html" },
    { id: 'usuarios', src: usuarios, alt: 'Usuarios', href: "https://danielguillen.free.nf/playing-php/3-gestion-usuarios/index.php" },
    { id: 'mcdonalds', src: mcdonalds, alt: ' Mcdonalds', href: "https://danielguillen.free.nf/playing-php/4-mcdonalds/index.php" },
    { id: 'tienda', src: tienda, alt: 'Tienda', href: "https://danielguillen.free.nf/playing-php/5-tienda-online/index.php" },
    { id: 'trastienda', src: trastienda, alt: 'Trastienda', href: "https://danielguillen.free.nf/playing-php/5-tienda-online/index.php" },
    { id: 'elviaje', src: elviaje, alt: 'El Viaje', href: "https://danielguillen.free.nf/elviaje" },
    { id: 'mas', src: mas, alt: 'Mas', href: "https://danielguillen.free.nf/portafolio.html" },
];

      return (
            <div className="bg-white rounded-b-xl shadow-lg overflow-hidden mb-4">
            {/* Encabezado actúa como botón */}
            <h3 className="accordion-header bg-white border-b-2 border-black text-black p-2 cursor-pointer flex justify-between items-center text-xl fontsemibold transition-colors duration-300 hover:bg-blue-900 hover:text-white"
            onClick={toggleAccordion}
            >
                Playing with PHP <i className="fab fa-php"></i>
            </h3>

            {/* Contenido del acordeón */}
            {isOpen && (
                <div className="bg-gray-100 p-4 rounded-b-lg">
                    <div className="transition-all duration-300 ease-in-out">
                        <div className="carousel w-full">
                            {phpProjects.map((project) => (
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