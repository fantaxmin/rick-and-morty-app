import type { ItemCharacterListProps } from "../types/Characters";

const ItemCharacterList = ({ imageCharacter = '', characterName, characterSpecies, isFavorite } : ItemCharacterListProps) => {
    return(
        <li
            className="flex items-center p-2 border-t border-gray-200"
        >
            <div
                className="w-12 h-12 bg-gray-300 rounded-full"
            >
                { /* Character Image */ }
            </div>
            <div
                className="ml-2 flex-grow flex flex-col"
            >
                <span
                    className="ml-2 font-bold"
                >
                    {characterName}
                </span>
                <span
                    className="ml-2 text-gray-500 text-sm"
                >
                    {characterSpecies}
                </span>
            </div>
            <button
                className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full"
            >
                <span className="text-yellow-500 text-xl">★</span>
            </button>
        </li>
    );
};

export default ItemCharacterList;