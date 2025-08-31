import { createContext, useEffect, useState } from "react";
import type { CharacterContextType, CurrentFiltersInterface, HasActiveFiltersInterface, ItemCharacterType } from "../types/Characters";
import { fetchCharacters } from "../services/charactersService";

const defaultCharacterContext: CharacterContextType = {
    isSidebarVisible: true,
    allCharacters: [],
    showCharacters: [],
    favorites: [],
    filterVisible: false,
    hasActiveFilters: { active: false, counter: 0 },
    currentFilter: { selectedSpecies: 'All', selectedCharacter: 'All', sortOrder: 'none' },
    toggleSidebar : () => null,
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
    const [currentFilter, setCurrentFilter] = useState<CurrentFiltersInterface>({ selectedSpecies: 'All', selectedCharacter: 'All', sortOrder: 'none' });
    const [hasActiveFilters, setHasActiveFilters] = useState<HasActiveFiltersInterface>({ active: false, counter: 0 });

    const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

    // API call to fetch characters
    useEffect(() =>{
        const character = async () => {
            const data = await fetchCharacters();
            setAllCharacters(data);
            setFavorites(data.filter((character : ItemCharacterType) => {
                character.isFavorite = character.id === 4 || character.id === 6;
                return character.isFavorite;
            }));
            setShowCharacters(data.filter((character : ItemCharacterType) => !character.isFavorite));
        }
        character();
    }, []);

   

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

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
    const handleFilterChange = (selectedSpecies: string, selectedCharacter: string, sortOrder: 'asc' | 'desc' | 'none' = 'none') => {
            setCurrentFilter({ selectedSpecies, selectedCharacter, sortOrder });
            let searchCharacterType = { species: false, character: false };
            let counterFilters = 0;
            if( selectedSpecies !== 'All'){
                searchCharacterType.species = true;
                counterFilters += 1;
            }
            if( selectedCharacter !== 'All' ){
                searchCharacterType.character = true;
                counterFilters += 1;
            }
            if( searchCharacterType ){
                let filteredCharacters = allCharacters.filter(character => {
                    const matchesSpecies  = searchCharacterType.species ? character.species === selectedSpecies : true;
                    const matchesCharacter = searchCharacterType.character ? character.name === selectedCharacter : true;
                    return matchesSpecies && matchesCharacter;
                });

                // Aplicar ordenamiento si está especificado
                if (sortOrder !== 'none') {
                    filteredCharacters = [...filteredCharacters].sort((a, b) => {
                        const comparison = a.name.localeCompare(b.name);
                        return sortOrder === 'asc' ? comparison : -comparison;
                    });
                }

                setShowCharacters(filteredCharacters);
            }
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
                isSidebarVisible,
                allCharacters,
                showCharacters,
                favorites,
                filterVisible,
                hasActiveFilters,
                currentFilter,
                toggleSidebar,
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
