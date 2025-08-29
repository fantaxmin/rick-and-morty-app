const DetailsCharacters = () => {
    return (
        <section
            className="flex max-sm:hidden"
        >
            <div>
                {/* Character Image */}
            </div>
            <h2>{/* Character Name */}</h2>
            <ul>
                <li>
                    <span>Species:</span>
                    <span>{/* Character Species */}</span>
                </li>
                <li>
                    <span>Status:</span>
                    <span>{/* Character Status */}</span>
                </li>
                <li>
                    <span>Occupation:</span>
                    <span>{/* Character Occupation */}</span>
                </li>
            </ul>
            
        </section>
    );
};

export default DetailsCharacters;
