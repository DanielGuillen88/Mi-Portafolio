import AboutMe from "./aboutme";
import AboutMyLearning from "./AboutMyLearning";
import AboutMyJobs from "./AboutMyJobs";
import DisplayingProjects from "./DisplayingProjects";
import "../../styles/RightColumn.css";

export default function RightColumn() {
    return (
        <>
            {/* Columna derecha */}
            <div className="right-column">
                <div className="name-title">
                    <h1>Bienvenido a Mi Portafolio</h1>
                </div>

                <section>
                    
                    <AboutMe />

                </section>

                <section>

                    <AboutMyJobs />

                </section>

                <section>

                    <AboutMyLearning />

                </section>

                <section>
                    <h3 className="section-title">Proyectos Destacados</h3>
                        <DisplayingProjects />


                    {/* <div className="project-card">

                    </div> */}
                </section>
            </div>
        </>
    );
}