import { createContext, useEffect, useState } from "react";
import type { CharacterContextType, ItemCharacterType } from "../types/Characters";
import { mockCharacters } from "../utils/mockData";

const defaultCharacterContext: CharacterContextType = {
    allCharacters: [],
    showCharacters: [],
    favorites: [],
    handleSearchChange: () => {}
};

const CharacterContext = createContext<CharacterContextType>(defaultCharacterContext);

const CharacterProvider = ({ children }: { children: React.ReactNode }) => {

    const [allCharacters, setAllCharacters] = useState<ItemCharacterType[]>([]);
    const [showCharacters, setShowCharacters] = useState<ItemCharacterType[]>([]);
    const [favorites, setFavorites] = useState<ItemCharacterType[]>([]);

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
            return;
        }
        setShowCharacters(filteredCharacters);
    };

    return (
        <CharacterContext.Provider
            value={{
                allCharacters,
                showCharacters,
                favorites,
                handleSearchChange,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};

export { CharacterContext, CharacterProvider };
