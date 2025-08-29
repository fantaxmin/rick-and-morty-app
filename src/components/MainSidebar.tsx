import { useContext } from "react";
import { CharacterContext } from "../context/CharactersProvider";
import SearchCharacters from "./SearchCharacters";
import SectionList from "./SectionList";

const MainSidebar = () => {

    const { favorites, characters } = useContext(CharacterContext);

    return (
        <aside className="w-80 h-screen p-4 pt-4 border-r border-gray-300 backdrop-blur-md max-sm:w-full">
            <h2 className="text-2xl py-4 font-bold">Rick and Morty list</h2>
            <SearchCharacters />
            <SectionList
                title="Favorites"
                counterFavorites={favorites.length}
                characters={favorites}
            />
            <SectionList
                title="Characters"
                counterFavorites={characters.length}
                characters={characters}
            />
        </aside>
    );
};

export default MainSidebar;