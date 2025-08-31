import { useContext, useState } from "react";
import type { CharacterContextType, FilterCharactersProps } from "../types/Characters";
import { CharacterContext } from "../context/CharactersProvider";
import ArrowIcon from "./icon/ArrowIcon";

const FilterCharacters = ({ filterVisible } : FilterCharactersProps) => {

    const [selectedSpecies, setSelectedSpecies] = useState<string>('All');
    const [selectedCharacter, setSelectedCharacter] = useState<string>('All');

    const { handleFilterChange, handleFilterVisibility,currentFilter } = useContext<CharacterContextType>(CharacterContext);

    const isDisableButton = (selectedSpecies === currentFilter.selectedSpecies && selectedCharacter === currentFilter.selectedCharacter);

    const handleSubmitFilter = (e: React.FormEvent) => {
        e.preventDefault();
        handleFilterVisibility(!filterVisible);
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const selectedCharacter = formData.get('filter-character');
        const selectedSpecies = formData.get('filter-specie');
        handleFilterChange( selectedSpecies as string, selectedCharacter as string );
    };

    return(
        <section
            className={`${filterVisible ? 'animate-slow-show' : 'animate-slow-hidden'}
                        w-88 h-70 mb-4 fixed bg-gray-100 rounded-md p-4 border border-gray-300 top-39
                        max-sm:size-full max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:m-0 max-sm:rounded-none max-sm:z-50`}
        >
            <nav className="hidden flex items-center justify-between mb-6 -mt-1 relative max-sm:block">
                <button 
                    onClick={() => handleFilterVisibility(!filterVisible)}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                    <ArrowIcon />
                </button>
                <h2 className="text-xl font-medium text-gray-700 absolute left-1/2 -translate-x-1/2">Filters</h2>
            </nav>
                <form className='w-full max-sm:h-9/10 flex flex-col max-sm:justify-between' onSubmit={handleSubmitFilter}>
                    <div className="flex-1">
                        <legend className='text-gray-500 mb-2'>Character</legend>
                        <section className='flex flex-row mb-4 justify-between '>
                            <div>
                                <input 
                                    type="radio"
                                    id="character-all" 
                                    name="filter-character" 
                                    value="All" 
                                    className="mr-2 hidden peer"
                                    onChange={(e) => setSelectedCharacter(e.target.value)}
                                    defaultChecked
                                />
                                <label 
                                    htmlFor="character-all" 
                                    className='block py-2 w-24 text-center text-gray-700 border border-gray-300 rounded-md cursor-pointer peer-checked:bg-primary peer-checked:text-secondary hover:bg-primary hover:text-tertiary'
                                >
                                    All
                                </label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="character-favorite" 
                                    name="filter-character" 
                                    value="Favorite" 
                                    className="mr-2 hidden peer"
                                    onChange={(e) => setSelectedCharacter(e.target.value)}
                                />
                                <label 
                                    htmlFor="character-favorite" 
                                    className='block py-2 w-24 text-center text-gray-700 border border-gray-300 rounded-md cursor-pointer peer-checked:bg-primary peer-checked:text-secondary hover:bg-primary hover:text-tertiary'>
                                    Favorite
                                </label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="character-other" 
                                    name="filter-character" 
                                    value="Other" 
                                    className="mr-2 hidden peer"
                                    onChange={(e) => setSelectedCharacter(e.target.value)}
                                />
                                <label 
                                    htmlFor="character-other" 
                                    className='block py-2 w-24 text-center text-gray-700 border border-gray-300 rounded-md cursor-pointer peer-checked:bg-primary peer-checked:text-secondary hover:bg-primary hover:text-tertiary'
                                >
                                    Other
                                </label>
                            </div>
                        </section>
                        <legend className='text-gray-500 mb-2'>Specie</legend>
                        <section className='flex flex-row mb-4 justify-between '>
                            <div>
                                <input 
                                    type="radio"
                                    id="specie-all" 
                                    name="filter-specie" 
                                    value="All" 
                                    className="mr-2 hidden peer"
                                    onChange={(e) => setSelectedSpecies(e.target.value)}
                                    defaultChecked
                                />
                                <label 
                                    htmlFor="specie-all" 
                                    className='block py-2 w-24 text-center text-gray-700 border border-gray-300 rounded-md cursor-pointer peer-checked:bg-primary peer-checked:text-secondary hover:bg-primary hover:text-tertiary'
                                >
                                    All
                                </label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="specie-human" 
                                    name="filter-specie" 
                                    value="Human" 
                                    className="mr-2 hidden peer"
                                    onChange={(e) => setSelectedSpecies(e.target.value)}
                                />
                                <label 
                                    htmlFor="specie-human" 
                                    className='block py-2 w-24 text-center text-gray-700 border border-gray-300 rounded-md cursor-pointer peer-checked:bg-primary peer-checked:text-secondary hover:bg-primary hover:text-tertiary'>
                                    Human
                                </label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="specie-alien" 
                                    name="filter-specie" 
                                    value="Alien" 
                                    className="mr-2 hidden peer"
                                    onChange={(e) => setSelectedSpecies(e.target.value)}
                                />
                                <label 
                                    htmlFor="specie-alien" 
                                    className='block py-2 w-24 text-center text-gray-700 border border-gray-300 rounded-md cursor-pointer peer-checked:bg-primary peer-checked:text-secondary hover:bg-primary hover:text-tertiary'
                                >
                                    Alien
                                </label>
                            </div>
                        </section>
                    </div>
                    <button
                        type="submit"
                        className={ `${isDisableButton ? 'bg-gray-200 text-gray-500' : 'bg-secondary text-white'} 
                                     w-full mt-4 py-2 px-4 font-normal rounded-md ` }
                        disabled={isDisableButton}
                    >
                        Filter
                    </button>
                </form>
            </section>
    );
};

export default FilterCharacters;