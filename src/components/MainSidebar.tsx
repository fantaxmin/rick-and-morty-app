import SearchCharacters from "./SearchCharacters";
import SectionList from "./SectionList";

const MainSidebar = () => {
    return (
        <aside className="w-80 h-screen p-4 pt-4 border-r border-gray-300 backdrop-blur-md">
            <h2 className="text-2xl py-4 font-bold">Rick and Morty list</h2>
            <SearchCharacters />
            <SectionList
                title="Favorites"
                counterFavorites={0}
                
            />
            <SectionList
                title="Characters"
                counterFavorites={4}
            />
        </aside>
    );
};

export default MainSidebar;