interface ItemCharacterListProps {
    imageCharacter: string;
    characterName: string;
    characterSpecies: string;
    isFavorite: boolean;
};

interface SectionListProps {
    title: string;
    counterFavorites: number;
}

interface CharacterContextType {
    characters: any[];
    favorites: any[];
}

export type { ItemCharacterListProps, SectionListProps, CharacterContextType };