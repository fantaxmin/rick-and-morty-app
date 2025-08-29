import type { ResultsSectionListProps } from "../types/Characters";

const ResultsSectionList = ({ showCharacters } : ResultsSectionListProps) => {
    
    return (
        <section className={  `flex items-center justify-between mt-4 mb-2`}>
            <h4 className="text-lg font-semibold text-blue-500">{showCharacters.length} Results</h4>
            <div
                className="bg-green-100 text-green-500 p-2 rounded-md"
            >
                <h4>1 Filter</h4>
            </div>
        </section>
    );
};

export default ResultsSectionList;
