import { useState } from 'react';

export default function AboutMe() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden mb-4">
            <h3
                className="accordion-header bg-white border-b-2 border-blue-400 text-blue-400 p-2 cursor-pointer flex justify-between items-center text-xl font-semibold transition-colors duration-300 hover:bg-blue-900 hover:text-white"
                onClick={toggleAccordion}
            >
                Un poco sobre Mí
                {/* icono colapso */}
                <span className="text-xl ml-2">{isOpen ? '▲' : '▼'}</span>
            </h3>

            {/* Contenido del acordeón */}
            <div className="bg-gray-100 p-4 rounded-b-lg">
                {/* siempre visible */}
                <p className="text-gray-800 leading-relaxed mb-3">
                    Fuera del ámbito profesional, soy <b>aventurero</b> y curioso por la naturaleza. Disfruto de los <b>viajes</b> (Indonesia es mi destino favorito, de momento), amo la <b>pizza de pepperoni</b> y mi pasión por las <b>motos</b> subraya mi deseo de libertad.
                </p>

                {/* visibles al clicar */}
                {isOpen && (
                    <div className="transition-all duration-300 ease-in-out">
                        <p className="text-gray-800 leading-relaxed mb-3">
                            Me adapto fácilmente a <b>nuevos entornos</b>, me gusta aplicar el <b>orden, buscar soluciones eficientes, optimizar procesos y asegurar la calidad</b> en cada trabajo.
                        </p>
                        <p className="text-gray-800 leading-relaxed mb-3">
                            Cuento con experiencia en <b>logística, administración de documentación, transporte de mercancías y comercio electrónico</b>, y más recientemente, en <b>desarrollo de aplicaciones</b>.
                        </p>
                        <p className="text-gray-800 leading-relaxed">
                            Actualmente, estoy inmerso en el <b>aprendizaje de nuevas tecnologías para consolidarme como desarrollador</b>. Me gusta decir que he aprendido a <b>transformar ideas en aplicaciones con nuevas tecnologías y con foco en la experiencia del usuario</b>.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
