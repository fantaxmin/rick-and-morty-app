import iconSearch from '../assets/icons/Search New.svg';
import iconContent from '../assets/icons/Right Content.svg';
import { useContext } from 'react';
import { CharacterContext } from '../context/CharactersProvider';

const SearchInput = () => {

    const { handleSearchChange } = useContext(CharacterContext);

    return (
        <div className="relative w-full mb-4">
            <img
                src={iconSearch}
                alt="Search Icon"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
            <input 
                type="text" 
                placeholder="Search or filter results"
                className="border border-gray-300 rounded-md p-2 my-2 w-full pl-10"
                aria-label="Search or filter results"
                onChange={(e) => handleSearchChange(e.target.value)}
            />
            <button>
                <img
                    src={iconContent}
                    alt="Content Icon"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8"
                />
            </button>
        </div>
    );
};

export default SearchInput;