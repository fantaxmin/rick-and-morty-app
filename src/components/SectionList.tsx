import type { SectionListProps } from "../types/Characters";
import ItemCharacterList from "./ItemCharacterList";

const SectionList = ({ title, counterFavorites } : SectionListProps) =>{
    return(
        <>
            <h3
                className="text-lg font-semibold text-gray-500"
            >
                {title} ({counterFavorites})
            </h3>
            <ul
                className="mt-2 space-y-2 overflow-y-auto max-h-60"
            >
                <ItemCharacterList
                    imageCharacter=""
                    characterName="Rick Sanchez"
                    characterSpecies="Human"
                    isFavorite={true}
                />
            </ul>
        </>
    );
};

export default SectionList;