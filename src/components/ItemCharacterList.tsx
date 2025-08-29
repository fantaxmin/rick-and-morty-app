import type { ItemCharacterListProps } from "../types/Characters";

const ItemCharacterList = ({ imageCharacter = '', characterName, characterSpecies, isFavorite } : ItemCharacterListProps) => {
    return(
        <li
            className="flex items-center p-2 border-b border-gray-200"
        >
            <div
                className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full"
            >
                { /* Character Image */ }
            </div>
            <div
                className="ml-2 flex-grow flex flex-col"
            >
                <span
                    className="ml-2 grow-7 font-bold"
                >
                    {characterName}
                </span>
                <span
                    className="ml-2 flex-shrink-0 text-gray-500 text-sm"
                >
                    {characterSpecies}
                </span>
            </div>
            <button
                className="ml-2 flex-3"
            >
                <span className="text-yellow-500">★</span>
            </button>
        </li>
    );
};

export default ItemCharacterList;