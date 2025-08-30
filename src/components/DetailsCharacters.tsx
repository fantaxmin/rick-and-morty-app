import { useContext, useMemo } from "react";
import { useNavigate } from "react-router";
import { CharacterContext } from "../context/CharactersProvider";
import HeartIcon from "./icon/HeartIcon";

const DetailsCharacters = ({ characterId } : { characterId: string }) => {

    const { getCharacterById } = useContext(CharacterContext);
    const navigate = useNavigate();
    const character = useMemo(() => getCharacterById(Number(characterId)), [characterId]);
    if (!character) {
        navigate("/not-found");
        return null;
    }

    return (
            <section
                className="flex flex-col pt-10 pl-20 max-sm:hidden"
            >
                <div className="w-28 h-28 bg-gray-300 rounded-full relative mb-4">
                    {/* Character Image */}
                    <button className="w-14 h-14 rounded-full bg-white absolute bottom-0 right-0">
                        <HeartIcon
                            isFavorite={false}
                            className="justify-center items-center w-10 h-10 text-accent mx-auto my-auto cursor-pointer"
                        />
                    </button>
                </div>
                <h2 className="text-2xl font-bold">{character?.name}</h2>
                <ul className="list-disc pl-5">
                    <li>
                        <span>Species:</span>
                        <span>{character?.species}</span>
                    </li>
                    <li>
                        <span>Status:</span>
                        <span>{character?.status}</span>
                    </li>
                    {/* <li>
                        <span>Occupation:</span>
                        <span>{character?.occupation}</span>
                    </li> */}
                </ul>

            </section>
    );
};

export default DetailsCharacters;
