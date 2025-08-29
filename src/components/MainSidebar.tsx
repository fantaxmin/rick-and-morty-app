import { useContext } from "react";
import { CharacterContext } from "../context/CharactersProvider";
import SearchCharacters from "./SearchCharacters";
import SectionList from "./SectionList";

const MainSidebar = () => {

    const { favorites, showCharacters } = useContext(CharacterContext);

    return (
        <aside className="w-96 h-screen p-4 pt-4 border-r border-gray-300 bg-gray-100 max-sm:w-full">
            <h2 className="text-2xl py-4 font-bold">Rick and Morty list</h2>
            <SearchCharacters />
            <SectionList
                title="Favorites"
                counterFavorites={favorites.length}
                characters={favorites}
            />
            <SectionList
                title="Characters"
                counterFavorites={showCharacters.length}
                characters={showCharacters}
            />
        </aside>
    );
};

export default MainSidebar;