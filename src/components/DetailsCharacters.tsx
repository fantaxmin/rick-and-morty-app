import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/CharactersProvider";
import HeartIcon from "./icon/HeartIcon";
import ArrowIcon from "./icon/ArrowIcon";
import type { ItemCharacterType } from "../types/Characters";

const DetailsCharacters = ({ characterId } : { characterId: string }) => {
    const { 
        handleFavoriteToggle, 
        toggleSidebar, 
        isSidebarVisible, 
        getCharacterById,
        addOpinion,
        updateOpinion,
        removeOpinion
    } = useContext(CharacterContext);
    const [opinionText, setOpinionText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState<ItemCharacterType | null>(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const result = await getCharacterById(Number(characterId));
                if (!result) {
                    navigate("/not-found");
                    return;
                }
                console.log('Character data:', result); // Debug log
                
                // Obtener las opiniones guardadas
                const savedOpinions = JSON.parse(localStorage.getItem('characterOpinions') || '{}');
                const savedOpinion = savedOpinions[result.id];
                console.log('Saved opinion:', savedOpinion); // Debug log
                
                // Actualizar el personaje con la opinión guardada
                setCharacter({
                    ...result,
                    opinion: savedOpinion
                });
            } catch (error) {
                console.error("Error fetching character:", error);
                navigate("/not-found");
            } finally {
                setLoading(false);
            }
        };
        
        fetchCharacter();
    }, [characterId, getCharacterById, navigate]);

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (!character) return null;

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
                        <span className="font-bold">Species</span>
                        <span className="text-gray-500 text-md">{character.species}</span>
                    </li>
                    <li className="flex flex-col w-full py-5 border-t border-gray-200">
                        <span className="font-bold">Status</span>
                        <span className="text-gray-500 text-md">{character.status}</span>
                    </li>
                </ul>

                <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold mb-4">Your opinion about {character.name}</h3>
                    {console.log('Current character state:', character)} {/* Debug log */}
                    {character.opinion && !isEditing ? (
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700">{character.opinion.text}</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Written on {new Date(character.opinion.createdAt).toLocaleDateString()}
                            </p>
                            <div className="mt-4 space-x-2">
                                <button
                                    onClick={() => {
                                        setOpinionText(character.opinion?.text || "");
                                        setIsEditing(true);
                                    }}
                                    className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        removeOpinion(character.id);
                                        setOpinionText("");
                                    }}
                                    className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <textarea
                                value={opinionText}
                                onChange={(e) => setOpinionText(e.target.value)}
                                placeholder="Write your opinion here..."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                rows={4}
                            />
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => {
                                        if (opinionText.trim()) {
                                            if (isEditing) {
                                                updateOpinion(character.id, opinionText);
                                            } else {
                                                addOpinion(character.id, opinionText);
                                            }
                                            setOpinionText("");
                                            setIsEditing(false);
                                        }
                                    }}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    disabled={!opinionText.trim()}
                                >
                                    {isEditing ? 'Save changes' : 'Save opinion'}
                                </button>
                                {isEditing && (
                                    <button
                                        onClick={() => {
                                            setOpinionText("");
                                            setIsEditing(false);
                                        }}
                                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>

            </section>
    );
};

export default DetailsCharacters;
