import { useContext } from "react";
import { CharacterContext } from "../context/CharactersProvider";
import SearchCharacters from "./SearchCharacters";
import ResultsSectionList from "./ResultsSectionList";
import SectionList from "./SectionList";
import TitleSectionList from "./TitleSectionList";

const MainSidebar = () => {

    const { favorites, showCharacters, hasActiveFilters } = useContext(CharacterContext);

    return (
        <aside className="w-96 h-screen p-4 pt-4 border-r border-gray-300 bg-gray-100 max-sm:w-full">
            <h2 className="text-2xl py-4 font-bold">Rick and Morty list</h2>
            <SearchCharacters />
            {
                hasActiveFilters && (
                    <>
                        <ResultsSectionList
                            showCharacters={showCharacters}
                        />
                    </>
                )
            }
            {
                !hasActiveFilters && (
                    <>
                        <TitleSectionList
                            title="Favorites"
                            counterFavorites={favorites.length}
                        />
                        <SectionList
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