import { useContext } from "react";
import type { ItemCharacterListProps } from "../types/Characters";
import HeartIcon from "./icon/HeartIcon";
import { CharacterContext } from "../context/CharactersProvider";
import { Link } from "react-router";

const ItemCharacterList = ({ id, imageCharacter = '', characterName, characterSpecies, isFavorite } : ItemCharacterListProps) => {

    const { handleFavoriteToggle } = useContext(CharacterContext);

    const handleFavoriteClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        handleFavoriteToggle(id);
    };

    return(
        <li className="flex items-center p-5 border-t border-gray-200 hover:bg-primary active:bg-primary hover:cursor-pointer hover:rounded-lg transition-all duration-200">
            <Link to={`/character/${id}`} className="flex flex-grow items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full">
                    { /* Character Image */ }
                </div>
                <div className="ml-2 flex-grow flex flex-col">
                    <span className="ml-2 font-bold">
                        {characterName}
                    </span>
                    <span className="ml-2 text-gray-500 text-sm">
                        {characterSpecies}
                    </span>
                </div>
            </Link>
            <button
                className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full"
                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                onClick={handleFavoriteClick}
            >
                <span className="text-accent text-xl">
                    <HeartIcon 
                        isFavorite={isFavorite}
                        className="w-6 h-6"
                    />
                </span>
            </button>
        </li>
    );
};

export default ItemCharacterList;