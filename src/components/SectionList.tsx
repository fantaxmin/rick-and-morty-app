import type { SectionListProps } from "../types/Characters";
import ItemCharacterList from "./ItemCharacterList";

const SectionList = ({ characters } : SectionListProps) =>{
    return(
        <>
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