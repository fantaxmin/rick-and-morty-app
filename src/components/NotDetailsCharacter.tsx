const NotDetailsCharacter = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen w-full max-sm:hidden">
            <div className="text-center space-y-6 -mt-20">
                <div className="relative w-64 h-64 mx-auto mb-8">
                    <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-50"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <span className="text-8xl">🌀</span>
                    </div>
                </div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
                    Wubba Lubba Dub Dub!
                </h2>

                <p className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
                    Looks like you're lost in an empty dimension.
                    Select a character to discover their interdimensional secrets!
                </p>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <span className="animate-bounce text-4xl">🌟</span>
                    <span className="animate-bounce text-4xl delay-100">🚀</span>
                    <span className="animate-bounce text-4xl delay-200">👽</span>
                </div>

                <div className="mt-8 p-4 bg-primary/20 rounded-lg inline-block">
                    <p className="text-sm text-gray-600 italic">
                        Council of Ricks' Tip: 
                        Click on any character to see their details
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NotDetailsCharacter;
