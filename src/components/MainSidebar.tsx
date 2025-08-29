import CharactersList from "./CharactersList";
import FavoritesCharacters from "./FavoritesCharacters";
import SearchCharacters from "./SearchCharacters";

const MainSidebar = () => {
    return (
        <aside>
            <h2>Rick and Morty list</h2>
            <SearchCharacters />
            <FavoritesCharacters />
            <CharactersList />
        </aside>
    );
};

export default MainSidebar;