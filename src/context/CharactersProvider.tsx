import { createContext, useEffect, useState } from "react";
import type { CharacterContextType, ItemCharacterType } from "../types/Characters";
import { mockCharacters } from "../utils/mockData";

const defaultCharacterContext: CharacterContextType = {
    characters: [],
    favorites: []
};

const CharacterContext = createContext<CharacterContextType>(defaultCharacterContext);

const CharacterProvider = ({ children }: { children: React.ReactNode }) => {

    let data : ItemCharacterType[] = [];
    const [characters, setCharacters] = useState<ItemCharacterType[]>([]);
    const [favorites, setFavorites] = useState<ItemCharacterType[]>([]);


    useEffect(() =>{
        data = mockCharacters.characters;
        setFavorites(data.filter(character => character.isFavorite));
        setCharacters(data.filter(character => !character.isFavorite));
    }, []);

    return (
        <CharacterContext.Provider
            value={{
                characters,
                favorites
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};

export { CharacterContext, CharacterProvider };
