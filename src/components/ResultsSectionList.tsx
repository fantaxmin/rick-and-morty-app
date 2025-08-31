import { useContext } from "react";
import type { ResultsHeaderSectionListProps } from "../types/Characters";
import { CharacterContext } from "../context/CharactersProvider";

const ResultsHeaderSectionList = ({ showCharacters } : ResultsHeaderSectionListProps) => {

    const { hasActiveFilters } = useContext(CharacterContext);

    return (
        <section className={  `flex items-center justify-between mt-4 mb-2`}>
            <h4 className="text-lg font-semibold text-blue-500">{showCharacters.length} Results</h4>
            <div
                className="bg-green-100 text-green-500 p-2 rounded-md"
            >
                <h4>{hasActiveFilters.counter} Filter</h4>
            </div>
        </section>
    );
};

export default ResultsHeaderSectionList;
