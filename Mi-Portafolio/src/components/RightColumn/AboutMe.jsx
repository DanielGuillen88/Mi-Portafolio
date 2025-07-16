import { useState } from 'react';

export default function AboutMe() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="about-me-accordion">
            <h3 className="section-title accordion-header" onClick={toggleAccordion}>
                Un poco sobre Mí
                <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
            </h3>

            {/* siempre visible */}
            <p className="about-me-paragraph">
            Fuera del ámbito profesional, soy <b>aventurero</b> y curioso por la naturaleza. Disfruto de los <b>viajes</b> (Indonesia es mi destino favorito, de momento), amo la <b>pizza de pepperoni</b> y mi pasión por las <b>motos</b> subraya mi deseo de libertad.
            </p>

            {/* más parrafos visibles al clicar */}
            {isOpen && (
                <div className="accordion-content">
                    <p className="about-me-paragraph">
                        Me adapto fácilmente a <b>nuevos entornos</b>, me gusta aplicar el <b>orden, buscar soluciones eficientes, optimizar procesos y asegurar la calidad</b> en cada trabajo.
                    </p>
                    <p className="about-me-paragraph">
                        Cuento con experiencia en <b>logística, administración de documentación, transporte de mercancías y comercio electrónico</b>, y más recientemente, en <b>desarrollo de aplicaciones</b>.
                    </p>
                    <p className="about-me-paragraph">
                        Actualmente, estoy inmerso en el <b>aprendizaje de nuevas tecnologías para consolidarme como desarrollador</b>. Me gusta decir que he aprendido a <b>transformar ideas en aplicaciones con nuevas tecnologías y con foco en la experiencia del usuario</b>.
                    </p>
                </div>
            )}
        </div>
    );
}