import type { SectionListProps } from "../types/Characters";
import ItemCharacterList from "./ItemCharacterList";

const FavoritesList = ({ characters }: SectionListProps) => {
    return (
        <ul className={` min-h-[100px] max-h-[25vh] mt-2 space-y-2 py-4 overflow-y-auto scroll-smooth snap-y snap-mandatory`}>
            {characters.map(character => (
                <ItemCharacterList
                    key={character.id}
                    id={character.id}
                    imageCharacter={character.image}
                    characterName={character.name}
                    characterSpecies={character.species}
                    isFavorite={character.isFavorite}
                />
            ))}
        </ul>
    );
};

export default FavoritesList;