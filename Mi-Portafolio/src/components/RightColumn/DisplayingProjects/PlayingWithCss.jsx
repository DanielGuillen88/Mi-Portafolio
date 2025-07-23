import { useState } from 'react';
import { pig, creeper, octopus, panda, ristorante, tortugas, pepperoni, mas} from '../../../img';

export default function PlayingWithCss() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
      setIsOpen(!isOpen);
  };

  const cssProjects = [
    { id: 'pig', src: pig, alt: 'Pig', href: "https://danielguillen.free.nf/playing-css/2-pig/index.html" },
    { id: 'creeper', src: creeper, alt: 'Creeper', href: "https://danielguillen.free.nf/playing-css/3B-creeper/index.html" },
    { id: 'octopus', src: octopus, alt: 'Octopus', href: "https://danielguillen.free.nf/playing-css/4-octopus/index.html" },
    { id: 'panda', src: panda, alt: 'Panda', href: "https://danielguillen.free.nf/playing-css/8-bootstrap-panda/index.html" },
    { id: 'ristorante', src: ristorante, alt: 'Ristorante', href: "https://danielguillen.free.nf/playing-css/9-bootstrap-ristorante/index.html" },
    { id: 'tortugas', src: tortugas, alt: 'Tortugas', href: "https://danielguillen.free.nf/playing-css/10-bootstrap-tortugas/index.html" },
    { id: 'pepperoni', src: pepperoni, alt: 'Pepperoni', href: "https://danielguillen.free.nf/playing-css/11-bootstrap-pepperoni/index.html" },
    { id: 'mas', src: mas, alt: 'Mas', href: "https://danielguillen.free.nf/index.html" },
];

      return (
            <div className="bg-white rounded-b-xl shadow-lg overflow-hidden mb-4">
            {/* Encabezado actúa como botón */}
            <h3 className="accordion-header bg-white border-b-2 border-black text-black p-2 cursor-pointer flex justify-between items-center text-xl fontsemibold transition-colors duration-300 hover:bg-blue-900 hover:text-white"
               onClick={toggleAccordion}
            >
                Playing with CSS <i className="fas fa-paint-brush"></i> 
            </h3>

            {/* Contenido del acordeón */}
            {isOpen && (
                <div className="bg-gray-100 p-4 rounded-b-lg">
                    <div className="transition-all duration-300 ease-in-out">
                        <div className="carousel w-full">
                            {cssProjects.map((project) => (
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