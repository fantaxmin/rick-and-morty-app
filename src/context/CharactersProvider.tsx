import { createContext, useEffect, useState } from "react";
import type { CharacterContextType, CurrentFiltersInterface, HasActiveFiltersInterface, ItemCharacterType } from "../types/Characters";
import type { Character, CharacterQueryResult, CharactersQueryResult } from "../types/GraphQL";
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client'
import { useQuery } from "@apollo/client/react";

const httpLink = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters {
    characters {
        results {
            id
            name
            status
            species
            image
        }
    }
}
`;

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      image
    }
  }
`;

const defaultCharacterContext: CharacterContextType = {
    isSidebarVisible: true,
    allCharacters: [],
    showCharacters: [],
    favorites: [],
    filterVisible: false,
    hasActiveFilters: { active: false, counter: 0 },
    currentFilter: { selectedSpecies: 'All', selectedCharacter: 'All', sortOrder: 'none' },
    loading: false,
    error: null,
    toggleSidebar : () => null,
    handleFilterVisibility: () => {},
    handleSearchChange: () => {},
    handleFilterChange: () => {},
    handleFavoriteToggle: () => {},
    getCharacterById: async () => null,
    addOpinion: () => {},
    updateOpinion: () => {},
    removeOpinion: () => {}
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

    // Inicializar el estado de las opiniones desde localStorage
    useEffect(() => {
        const savedOpinions = JSON.parse(localStorage.getItem('characterOpinions') || '{}');
        console.log('Loaded saved opinions:', savedOpinions);
    }, []);

    const { loading, error, data } = useQuery<CharactersQueryResult>(GET_ALL_CHARACTERS);

    // API with GraphQL
    useEffect(() => {
        if (loading) {
            console.log("Cargando datos de personajes...");
            return;
        }

        if (error) {
            console.error("Error al obtener los datos de personajes:", error);
            return;
        }

        // Si data existe y tiene resultados, procesamos los datos
        if (data?.characters?.results) {
            const all = data.characters.results.map((character: Character): ItemCharacterType => ({
                id: Number(character.id),
                name: character.name,
                status: character.status,
                species: character.species,
                image: character.image,
                isFavorite: character.id === '4' || character.id === '6'
            }));

            // Filtramos los personajes
            const favoriteCharacters = all.filter(character => character.isFavorite);
            const nonFavoriteCharacters = all.filter(character => !character.isFavorite);

            // Actualizamos los estados
            setAllCharacters(all);
            setFavorites(favoriteCharacters);
            setShowCharacters(nonFavoriteCharacters);
            console.log("Datos de personajes cargados y procesados.");
        }
    }, [data, loading, error]);

   

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

    // Función de utilidad para obtener las opiniones guardadas
    const getSavedOpinions = () => {
        try {
            return JSON.parse(localStorage.getItem('characterOpinions') || '{}');
        } catch (error) {
            console.error('Error parsing saved opinions:', error);
            return {};
        }
    };

    // Get character by ID using GraphQL
    const getCharacterById = async (id: number) => {
        try {
            const { data } = await client.query<CharacterQueryResult>({
                query: GET_CHARACTER,
                variables: { id: String(id) }
            });

            if (!data || !data.character) return null;

            // Obtener las opiniones guardadas
            const savedOpinions = JSON.parse(localStorage.getItem('characterOpinions') || '{}');
            const savedOpinion = savedOpinions[id];
            
            const isFavorite = favorites.some(fav => fav.id === id);
            return {
                id: Number(data.character.id),
                name: data.character.name,
                status: data.character.status,
                species: data.character.species,
                image: data.character.image,
                isFavorite,
                opinion: savedOpinion
            };
        } catch (error) {
            console.error("Error fetching character:", error);
            return null;
        }
    };

    // Manejo de opiniones
    const addOpinion = (id: number, text: string) => {
        // Crear el objeto de opinión
        const newOpinion = {
            text,
            createdAt: new Date().toISOString()
        };

        // Obtener opiniones existentes y actualizar
        const opinions = getSavedOpinions();
        opinions[id] = newOpinion;
        
        // Guardar en localStorage
        localStorage.setItem('characterOpinions', JSON.stringify(opinions));
        console.log('Opinion saved:', { id, opinion: newOpinion }); // Debug log

        // Actualizar el estado
        const updatedCharacters = allCharacters.map(character => 
            character.id === id ? { ...character, opinion: newOpinion } : character
        );
        setAllCharacters(updatedCharacters);

        const updatedFavorites = favorites.map(character =>
            character.id === id ? { ...character, opinion: newOpinion } : character
        );
        setFavorites(updatedFavorites);

        const updatedShowCharacters = showCharacters.map(character =>
            character.id === id ? { ...character, opinion: newOpinion } : character
        );
        setShowCharacters(updatedShowCharacters);
    };

    const updateOpinion = (id: number, text: string) => {
        addOpinion(id, text);
    };

    const removeOpinion = (id: number) => {
        const updatedCharacters = allCharacters.map(character => {
            if (character.id === id) {
                const { opinion, ...rest } = character;
                return rest;
            }
            return character;
        });
        setAllCharacters(updatedCharacters);

        // Actualizar también los favoritos y showCharacters
        const updatedFavorites = favorites.map(character =>
            character.id === id ? { ...character, opinion: undefined } : character
        );
        setFavorites(updatedFavorites);

        const updatedShowCharacters = showCharacters.map(character =>
            character.id === id ? { ...character, opinion: undefined } : character
        );
        setShowCharacters(updatedShowCharacters);

        // Remover del localStorage
        const opinions = JSON.parse(localStorage.getItem('characterOpinions') || '{}');
        delete opinions[id];
        localStorage.setItem('characterOpinions', JSON.stringify(opinions));
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
                loading,
                error,
                toggleSidebar,
                handleFilterVisibility,
                handleSearchChange,
                handleFilterChange,
                handleFavoriteToggle,
                getCharacterById,
                addOpinion,
                updateOpinion,
                removeOpinion
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};

export { CharacterContext, CharacterProvider };
