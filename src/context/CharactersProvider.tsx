import { createContext, useEffect, useState } from "react";
import type { CharacterContextType, ItemCharacterType } from "../types/Characters";
import { mockCharacters } from "../utils/mockData";

const defaultCharacterContext: CharacterContextType = {
    characters: [],
    favorites: []
};

const CharacterContext = createContext<CharacterContextType>(defaultCharacterContext);

const CharacterProvider = ({ children }: { children: React.ReactNode }) => {

    const [characters, setCharacters] = useState<ItemCharacterType[]>([]);
    const [favorites, setFavorites] = useState<ItemCharacterType[]>([]);


    useEffect(() =>{
        const getData = mockCharacters;
        setCharacters(getData.characters);
        setFavorites(getData.characters.filter(character => character.isFavorite));
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
