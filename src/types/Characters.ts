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
    allCharacters: ItemCharacterType[];
    showCharacters: ItemCharacterType[];
    favorites: ItemCharacterType[];
    handleSearchChange: (searchTerm: string) => void;
}

interface FilterCharactersProps {
    filterVisible: boolean;
}

export type { ItemCharacterListProps, SectionListProps, CharacterContextType, ItemCharacterType, FilterCharactersProps };