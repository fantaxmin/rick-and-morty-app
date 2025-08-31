interface Character {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface CharacterQueryResult {
    character: Character;
}

interface CharactersQueryResult {
    characters: {
        results: Character[];
    };
}

export type { Character, CharacterQueryResult, CharactersQueryResult };
