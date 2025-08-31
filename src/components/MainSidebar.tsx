import { useContext } from "react";
import { CharacterContext } from "../context/CharactersProvider";
import SearchCharacters from "./SearchCharacters";
import ResultsHeaderSectionList from "./ResultsSectionList";
import SectionList from "./SectionList";
import TitleSectionList from "./TitleSectionList";
import FavoritesList from "./FavoritesLists";

const MainSidebar = () => {

    const { favorites, showCharacters, hasActiveFilters, isSidebarVisible } = useContext(CharacterContext);

    return (
        <aside className={`w-122 h-screen p-4 pt-4 border-r border-gray-300 bg-gray-100 flex flex-col overflow-hidden max-sm:fixed max-sm:z-50 max-sm:top-0 max-sm:left-0 max-sm:transition-all max-sm:duration-300 max-sm:ease-in-out ${isSidebarVisible ? 'max-sm:w-full max-sm:opacity-100' : 'max-sm:w-0 max-sm:opacity-0'}`}>
            <h2 className="text-2xl py-4 font-bold">Rick and Morty list</h2>
            <SearchCharacters />
            {
                hasActiveFilters.active && (
                    <>
                        <ResultsHeaderSectionList
                            showCharacters={showCharacters}
                        />
                    </>
                )
            }
            {
                !hasActiveFilters.active && (
                    <>
                        <TitleSectionList
                            title="Favorites"
                            counterFavorites={favorites.length}
                        />
                        <FavoritesList
                            characters={favorites}
                        />
                    </>
                )
            }
            <TitleSectionList
                title="Characters"
                counterFavorites={showCharacters.length}
            />
            <SectionList
                characters={showCharacters}
            />
        </aside>
    );
};

export default MainSidebar;