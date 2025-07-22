import Isdi from "./Isdi";
import TheCorner from "./TheCorner";
import Etif from "./Etif";

export default function AboutMyLearning() {

    return (
        <>
            <h3 className="accordion-header bg-white border-b-2 border-blue-400 text-blue-400 p-2 flex justify-between items-center text-xl font-semibold transition-colors duration-300">
            Sobre mi aprendizaje</h3>

            {/* # ISDI */}
            <Isdi />
            {/* # TheCorner */}
            <TheCorner />
            {/* # Etif */}
            <Etif />

        </>

    );
}
