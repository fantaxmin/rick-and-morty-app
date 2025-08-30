import { createContext, useEffect, useState } from "react";
import type { CharacterContextType, HasActiveFiltersInterface, ItemCharacterType } from "../types/Characters";
// import { mockCharacters } from "../utils/mockData";
import { fetchCharacters } from "../services/charactersService";

const defaultCharacterContext: CharacterContextType = {
    allCharacters: [],
    showCharacters: [],
    favorites: [],
    filterVisible: false,
    hasActiveFilters: { active: false, counter: 0 },
    handleFilterVisibility: () => {},
    handleSearchChange: () => {},
    handleFilterChange: () => {},
    handleFavoriteToggle: () => {},
    getCharacterById: () => null
};

const CharacterContext = createContext<CharacterContextType>(defaultCharacterContext);

const CharacterProvider = ({ children }: { children: React.ReactNode }) => {

    const [allCharacters, setAllCharacters] = useState<ItemCharacterType[]>([]);
    const [showCharacters, setShowCharacters] = useState<ItemCharacterType[]>([]);
    const [favorites, setFavorites] = useState<ItemCharacterType[]>([]);
    const [filterVisible, setFilterVisible] = useState<boolean>(false);
    const [hasActiveFilters, setHasActiveFilters] = useState<HasActiveFiltersInterface>({ active: false, counter: 0 });

    useEffect(() =>{
        const character = async () => {
            const data = await fetchCharacters();
            setAllCharacters(data);
            setShowCharacters(data.filter((character : ItemCharacterType) => !character.isFavorite));
        }
        character();
    }, []);

    // Handle search input changes
    const handleSearchChange = (searchTerm: string) => {
        const filteredCharacters = allCharacters.filter(character =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (!searchTerm) {
            setShowCharacters(allCharacters.filter(character => !character.isFavorite));
            setHasActiveFilters({ active: false, counter: 0 });
            return;
        }
        setShowCharacters(filteredCharacters);
        setHasActiveFilters({ active: true, counter: 0 });
    };

    // Handle filter visibility changes
    const handleFilterVisibility = (isVisible: boolean) => {
        setFilterVisible(isVisible);
    };

    // Handle filter changes
    const handleFilterChange = ( selectedSpecies : string, selectedCharacter : string) => {
        if( selectedCharacter === 'All' && selectedSpecies === 'All' ){
            setShowCharacters(allCharacters.filter(character => !character.isFavorite));
            setHasActiveFilters({ active: false, counter: 0 });
            return;
        }
        let activeFilters = { active: true, counter: 0 };
        if(  selectedCharacter === 'All' ){
            setShowCharacters(allCharacters.filter(character => character.species === selectedSpecies));
            activeFilters.counter++;
            setHasActiveFilters(activeFilters);
            return;
        }
        if(  selectedSpecies === 'All' ){
            setShowCharacters(allCharacters.filter(character => (selectedCharacter === 'Favorite' ? character.isFavorite : !character.isFavorite)));
            activeFilters.counter++;
            setHasActiveFilters(activeFilters);
            return;
        }
        setShowCharacters(allCharacters.filter(character =>
            character.species === selectedSpecies && (selectedCharacter === 'Favorite' ? character.isFavorite : !character.isFavorite)
        ));
        setHasActiveFilters({ active: true, counter: 2 });
    };

    const handleFavoriteToggle = ( id : number ) => {
        const character = allCharacters.find(character => character.id === id);
        if( !character ){
            return;
        }
        const updatedCharacter = { ...character, isFavorite: !character.isFavorite };
        const updatedCharacters = allCharacters.map(character =>{
            return character.id === id ? updatedCharacter : character;
        });
        setAllCharacters(updatedCharacters);
        setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== id));
        if( updatedCharacter.isFavorite ){
            setFavorites(prevFavorites => [...prevFavorites, updatedCharacter]);
        }
        setShowCharacters(updatedCharacters.filter(character => !character.isFavorite));
    };

    // Get character by ID
    const getCharacterById = (id: number) => {
        let character = favorites.find(character => character.id === id);
        if (character) {
            return character;
        }
        character = allCharacters.find(character => character.id === id);
        if (character) {
            return character;
        }
        return null;
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
                handleFilterChange,
                handleFavoriteToggle,
                getCharacterById
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};

export { CharacterContext, CharacterProvider };
