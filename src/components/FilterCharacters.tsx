import { useState } from "react";
import type { FilterCharactersProps } from "../types/Characters";

const FilterCharacters = ({ filterVisible } : FilterCharactersProps) => {

    const [selectedSpecies, setSelectedSpecies] = useState<string>('All');
    const [selectedCharacter, setSelectedCharacter] = useState<string>('All');

    const isDisableButton = (selectedCharacter === 'All' && selectedSpecies === 'All');

    const handleSubmitFilter = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const selectedSpecies = formData.get('filter-specie');
        console.log({
            species: selectedSpecies,
        });
    };

    return(
        <section
                className={`w-88 h-70 mb-4 fixed bg-gray-100 rounded-md p-4 border border-gray-300 ${filterVisible ? 'animate-slow-show' : 'animate-slow-hidden'}`}
            >
                <form className='w-full' onSubmit={handleSubmitFilter}>
                    <legend className='text-gray-500 mb-2'>Character</legend>
                    <section className='flex flex-row mb-4 justify-between'>
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
                    <section className='flex flex-row mb-4 justify-between'>
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
                    <button
                        type="submit"
                        className={ `w-full mt-4 py-2 px-4 font-normal rounded-md ${isDisableButton ? 'bg-gray-200 text-gray-500' : 'bg-secondary text-white'} ` }
                        disabled={isDisableButton}
                    >
                        Filter
                    </button>
                </form>
            </section>
    );
};

export default FilterCharacters;