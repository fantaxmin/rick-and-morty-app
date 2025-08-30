import { useContext } from "react";
import { useNavigate } from "react-router";
import { CharacterContext } from "../context/CharactersProvider";
import HeartIcon from "./icon/HeartIcon";

const DetailsCharacters = ({ characterId } : { characterId: string }) => {

    const { getCharacterById, handleFavoriteToggle } = useContext(CharacterContext);
    const navigate = useNavigate();
    const character = getCharacterById(Number(characterId));
    if (!character) {
        navigate("/not-found");
        return null;
    }

    return (
            <section
                className="flex flex-col w-full pt-10 px-20 max-sm:hidden"
            >
                <div className="w-28 h-28 relative mb-4">
                    <img src={character.image} alt={character.name} className="rounded-full" />
                    <button 
                        className="w-9 h-9 rounded-full bg-white absolute bottom-0 right-0"
                        onClick={() => handleFavoriteToggle(character.id)}
                    >
                        <HeartIcon
                            isFavorite={character.isFavorite}
                            className="justify-center items-center w-7 h-7 text-accent mx-auto my-auto cursor-pointer"
                        />
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
                <ul className="list-disc">
                    <li className="flex flex-col w-full py-5 border-t border-gray-200">
                        <span className="font-bold">Specie</span>
                        <span className="text-gray-500 text-md">{character.species}</span>
                    </li>
                    <li className="flex flex-col w-full py-5 border-t border-gray-200">
                        <span className="font-bold">Status</span>
                        <span className="text-gray-500 text-md">{character.status}</span>
                    </li>
                </ul>

            </section>
    );
};

export default DetailsCharacters;
