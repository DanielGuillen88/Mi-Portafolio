import AboutMe from "./aboutme";
import AboutMyLearning from "./AboutMyLearning";
import AboutMyJobs from "./AboutMyJobs";
import DisplayingProjects from "./DisplayingProjects";

export default function RightColumn() {
    return (
        <div className="p-8 bg-white">
            <div className="bg-blue-900 text-white p-5 -mt-8 -mx-8 mb-8">
                <h1 className="text-4xl font-bold m-0">Bienvenido a Mi Portafolio</h1>
            </div>
            
            <section className="mb-4">
                {/* un poco sobre mi */}
                <AboutMe />
            </section>

            <section className="mb-4">
                {/* sobre donde he trabajado */}
                <AboutMyJobs />
            </section>

            <section className="mb-4">
                {/* sobre lo que he aprendido */}
                <AboutMyLearning />
            </section>

            <section className="mb-4">
                {/* proyectos destacados */}
                <h3 className="section-title text-xl font-semibold text-blue-400 border-b-2 border-blue-400 pb-1 mb-4">Proyectos Destacados</h3>
                <DisplayingProjects />
            </section>
        </div>
    );
}
