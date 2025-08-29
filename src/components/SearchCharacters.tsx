import iconSearch from '../assets/icons/Search New.svg';
import iconContent from '../assets/icons/Right Content.svg';
import { useContext } from 'react';
import { CharacterContext } from '../context/CharactersProvider';
import FilterCharacters from './FilterCharacters';

const SearchInput = () => {

    const { filterVisible, handleSearchChange, handleFilterVisibility } = useContext(CharacterContext);

    return (
        <>
            <section className="relative w-full ">
                <img
                    src={iconSearch}
                    alt="Search Icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                />
                <input
                    type="text"
                    placeholder="Search or filter results"
                    className="border border-gray-300 bg-gray-200 rounded-md p-4 my-2 w-full pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-secondary "
                    aria-label="Search or filter results"
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
                <button onClick={() => handleFilterVisibility(!filterVisible)}>
                    <img
                        src={iconContent}
                        alt="Content Icon"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8"
                    />
                </button>
            </section>
            <FilterCharacters 
                filterVisible={filterVisible}
            />
        </>
    );
};

export default SearchInput;