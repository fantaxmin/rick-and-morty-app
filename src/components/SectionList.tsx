import type { SectionListProps } from "../types/Characters";
import ItemCharacterList from "./ItemCharacterList";

const SectionList = ({ characters } : SectionListProps) =>{
    return(
        <>
            <ul className={` flex-1 min-h-[150px] max-h-[calc(100dvh-2rem)] mt-2 space-y-2 py-4 overflow-y-auto `}>
                {
                    characters.map(character => (
                        <ItemCharacterList
                            id={character.id}
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