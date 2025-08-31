import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/CharactersProvider";
import HeartIcon from "./icon/HeartIcon";
import ArrowIcon from "./icon/ArrowIcon";

const DetailsCharacters = ({ characterId } : { characterId: string }) => {

    const { getCharacterById, handleFavoriteToggle, toggleSidebar, isSidebarVisible } = useContext(CharacterContext);
    const navigate = useNavigate();
    const character = getCharacterById(Number(characterId));
    if (!character) {
        navigate("/not-found");
        return null;
    }

    const handleBackButton = () => {
        toggleSidebar();
        navigate("/");
    }


    return (
            <section
                className={`flex flex-col w-full pt-5 px-20 max-sm:block max-sm:pt-10 max-sm:transition-all max-sm:duration-300 max-sm:ease-in-out ${isSidebarVisible ? 'max-sm:w-0 max-sm:opacity-0' : 'max-sm:w-full max-sm:opacity-100'}`}
            >
                <nav className="hidden max-sm:flex items-center justify-between mb-6 p-4 fixed top-0 left-0 right-0 bg-white z-10">
                    <button 
                        onClick={handleBackButton}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <ArrowIcon className="w-6 h-6" />
                    </button>
                </nav>
                <div className="w-28 h-28 max-sm:w-40 max-sm:h-40 relative mt-16 mb-10">
                    <img src={character.image} alt={character.name} className="rounded-full w-full h-full object-cover" />
                    <button 
                        className="w-10 h-10 rounded-full bg-white absolute bottom-0 right-0"
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
