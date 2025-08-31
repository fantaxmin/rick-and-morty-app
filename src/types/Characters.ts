interface ItemCharacterListProps {
    id: number;
    imageCharacter: string;
    characterName: string;
    characterSpecies: string;
    isFavorite: boolean;
};

interface ResultsHeaderSectionListProps {
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
    status: string;
    isFavorite: boolean;
}

interface HasActiveFiltersInterface {
    active: boolean;
    counter: number;
}

interface CurrentFiltersInterface {
    selectedSpecies: string;
    selectedCharacter: string;
    sortOrder: 'asc' | 'desc' | 'none';
}

interface HeartIconProps {
    isFavorite: boolean;
    className?: string;
}

interface CharacterContextType {
    isSidebarVisible: boolean;
    allCharacters: ItemCharacterType[];
    showCharacters: ItemCharacterType[];
    favorites: ItemCharacterType[];
    filterVisible: boolean;
    hasActiveFilters: HasActiveFiltersInterface;
    currentFilter: CurrentFiltersInterface;
    toggleSidebar: () => void;
    handleFilterVisibility: (isVisible: boolean) => void;
    handleSearchChange: (searchTerm: string) => void;
    handleFilterChange: (selectedSpecies: string, selectedCharacter: string, sortOrder: 'asc' | 'desc' | 'none') => void;
    handleFavoriteToggle: (id: number) => void;
    getCharacterById: (id: number) => ItemCharacterType | null;
}

interface FilterCharactersProps {
    filterVisible: boolean;
}

export type { 
    ItemCharacterListProps,
    ResultsHeaderSectionListProps,
    TitleSectionProps,
    SectionListProps,
    CharacterContextType,
    ItemCharacterType,
    HasActiveFiltersInterface,
    CurrentFiltersInterface,
    HeartIconProps,
    FilterCharactersProps 
};