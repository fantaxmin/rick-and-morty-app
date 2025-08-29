import type { SectionListProps } from "../types/Characters";
import ItemCharacterList from "./ItemCharacterList";

const SectionList = ({ title, counterFavorites, characters } : SectionListProps) =>{
    return(
        <>
            <h3
                className="text-lg font-semibold text-gray-500"
            >
                {title} ({counterFavorites})
            </h3>
            <ul
                className="mt-2 space-y-2 max-h-60 py-4"
            >
                {
                    characters.map(character => (
                        <ItemCharacterList
                            key={character.id}
                            imageCharacter={character.image}
                            characterName={character.name}
                            characterSpecies={character.species}
                            isFavorite={character.isFavorite}
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default SectionList;