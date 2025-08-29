interface ItemCharacterListProps {
    imageCharacter: string;
    characterName: string;
    characterSpecies: string;
    isFavorite: boolean;
};

interface ResultsSectionListProps {
    showCharacters: ItemCharacterType[];
}

interface TitleSectionProps {
    title: string;
    counterFavorites: number;
}

interface SectionListProps {
    characters: ItemCharacterType[];
}

interface ItemCharacterType {
    id: number;
    name: string;
    species: string;
    image: string;
    isFavorite: boolean;
}

interface HeartIconProps {
    isFavorite: boolean;
}

interface CharacterContextType {
    allCharacters: ItemCharacterType[];
    showCharacters: ItemCharacterType[];
    favorites: ItemCharacterType[];
    filterVisible: boolean;
    hasActiveFilters: boolean;
    handleFilterVisibility: (isVisible: boolean) => void;
    handleSearchChange: (searchTerm: string) => void;
    handleFilterChange: (selectedSpecies: string, selectedCharacter: string) => void;
}

interface FilterCharactersProps {
    filterVisible: boolean;
}

export type { 
    ItemCharacterListProps,
    ResultsSectionListProps,
    TitleSectionProps,
    SectionListProps,
    CharacterContextType,
    ItemCharacterType,
    HeartIconProps,
    FilterCharactersProps 
};