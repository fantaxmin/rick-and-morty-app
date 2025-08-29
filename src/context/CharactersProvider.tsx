import { createContext, useEffect, useState } from "react";
import type { CharacterContextType, ItemCharacterType } from "../types/Characters";
import { mockCharacters } from "../utils/mockData";

const defaultCharacterContext: CharacterContextType = {
    allCharacters: [],
    showCharacters: [],
    favorites: [],
    filterVisible: false,
    hasActiveFilters: false,
    handleFilterVisibility: () => {},
    handleSearchChange: () => {},
    handleFilterChange: () => {}
};

const CharacterContext = createContext<CharacterContextType>(defaultCharacterContext);

const CharacterProvider = ({ children }: { children: React.ReactNode }) => {

    const [allCharacters, setAllCharacters] = useState<ItemCharacterType[]>([]);
    const [showCharacters, setShowCharacters] = useState<ItemCharacterType[]>([]);
    const [favorites, setFavorites] = useState<ItemCharacterType[]>([]);
    const [filterVisible, setFilterVisible] = useState<boolean>(false);
    const [hasActiveFilters, setHasActiveFilters] = useState<boolean>(false);

    useEffect(() =>{
        setAllCharacters(mockCharacters.characters);
        setFavorites(mockCharacters.characters.filter(character => character.isFavorite));
        setShowCharacters(mockCharacters.characters.filter(character => !character.isFavorite));
    }, []);

    const handleSearchChange = (searchTerm: string) => {
        const filteredCharacters = allCharacters.filter(character =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (!searchTerm) {
            setShowCharacters(allCharacters.filter(character => !character.isFavorite));
            setHasActiveFilters(false);
            return;
        }
        setShowCharacters(filteredCharacters);
        setHasActiveFilters(true);
    };

    const handleFilterVisibility = (isVisible: boolean) => {
        setFilterVisible(isVisible);
    };

    const handleFilterChange = ( selectedSpecies : string, selectedCharacter : string) => {
        if( selectedCharacter === 'All' && selectedSpecies === 'All' ){
            setShowCharacters(allCharacters.filter(character => !character.isFavorite));
            setHasActiveFilters(false);
            return;
        }
        setHasActiveFilters(true);
        if(  selectedCharacter === 'All' ){
            setShowCharacters(allCharacters.filter(character => character.species === selectedSpecies));
            return;
        }
        if(  selectedSpecies === 'All' ){
            setShowCharacters(allCharacters.filter(character => (selectedCharacter === 'Favorite' ? character.isFavorite : !character.isFavorite)));
            return;
        }
        setShowCharacters(allCharacters.filter(character =>
            character.species === selectedSpecies && (selectedCharacter === 'Favorite' ? character.isFavorite : !character.isFavorite)
        ));
    };

    return (
        <CharacterContext.Provider
            value={{
                allCharacters,
                showCharacters,
                favorites,
                filterVisible,
                hasActiveFilters,
                handleFilterVisibility,
                handleSearchChange,
                handleFilterChange
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};

export { CharacterContext, CharacterProvider };
