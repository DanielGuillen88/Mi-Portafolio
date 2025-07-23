import { useState } from 'react';
export default function PlayingWithReact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
      setIsOpen(!isOpen);
  };

      return (
            <div className="bg-white rounded-b-xl shadow-lg overflow-hidden mb-4">
            {/* Encabezado actúa como botón */}
            <h3 className="accordion-header bg-white border-b-2 border-black text-black p-2 cursor-pointer flex justify-between items-center text-xl fontsemibold transition-colors duration-300 hover:bg-blue-900 hover:text-white"
            onClick={toggleAccordion}
            >    
                Playing with React/Vue <i className="fab fa-react"></i>
            </h3>

            {/* Contenido del acordeón */}
            {isOpen && (
                <div className="bg-gray-100 p-4 rounded-b-lg">
                    <div className="transition-all duration-300 ease-in-out">                    
                        <ul className="studies-list">
                        <li><i className="fab fa-react"><i className="fa-brands fa-node-js"></i></i> <b>Social Code:</b> Aplicacion web estilo Instagram.</li>
                        <li><i className="fa-brands fa-vuejs"><i className="fab fa-react"></i></i> <b>Xplora Cultura:</b> Web informativa con eventos culturales de tu ciudad.</li>
                        <li><i className="fab fa-react"></i> <b>TODO TypeScript:</b> Listado  y organizador de tareas.</li> 
                        <li><i className="fab fa-react"></i><i className="fa-brands fa-google"></i> <b>Michelangelo:</b> Gestión de inventario y salidas.</li> 
                        </ul>                    
                    </div>
                </div>
            )}
        </div>
      );
    }