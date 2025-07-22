import { useState } from 'react';
export default function PlayingWithReact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
      setIsOpen(!isOpen);
  };

      return (
<div className="">
            {/* Encabezado actúa como botón */}
            <h3
                className="degree accordion-header p-1 flex justify-between items-center"
                onClick={toggleAccordion}
            >
                Playing with React/Vue <i className="fab fa-react"></i>
            </h3>

            {/* Contenido del acordeón */}
            {isOpen && (
                <div className="transition-all duration-300 ease-in-out">                    
                    <ul className="studies-list">
                    <li><i className="fab fa-react"><i className="fa-brands fa-node-js"></i></i> <b>Social Code:</b> Aplicacion web estilo Instagram.</li>
                    <li><i className="fa-brands fa-vuejs"><i className="fab fa-react"></i></i> <b>Xplora Cultura:</b> Web informativa con eventos culturas de tu ciudad.</li>
                    <li><i className="fab fa-react"></i> <b>TODO TypeScript:</b> Listado  y organizador de tareas.</li> 
                    <li><i className="fab fa-react"></i><i className="fa-brands fa-google"></i> <b>Michelangelo:</b> Gestión de inventario y salidas.</li> 
                    </ul>                    
                </div>
            )}
        </div>
      );
    }