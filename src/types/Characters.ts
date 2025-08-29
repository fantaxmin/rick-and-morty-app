interface ItemCharacterListProps {
    imageCharacter: string;
    characterName: string;
    characterSpecies: string;
    isFavorite: boolean;
};

interface SectionListProps {
    title: string;
    counterFavorites: number;
    characters: ItemCharacterType[];
}

interface ItemCharacterType {
    id: number;
    name: string;
    species: string;
    image: string;
    isFavorite: boolean;
}

interface CharacterContextType {
    characters: ItemCharacterType[];
    favorites: ItemCharacterType[];
}

export type { ItemCharacterListProps, SectionListProps, CharacterContextType, ItemCharacterType };