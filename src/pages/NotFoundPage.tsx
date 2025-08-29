const NotFoundPage = () => {
    return (
        <main className="min-h-screen bg-primary flex items-center justify-center p-4" role="main">
            <section className="text-center" aria-labelledby="error-title">
                {/* Portal effect using gradients and animation */}
                <div className="relative w-64 h-64 mx-auto mb-8" role="presentation">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-tertiary rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute inset-2 bg-primary rounded-full"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-tertiary to-primary rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-9xl font-bold text-secondary/40" aria-hidden="true">404</span>
                    </div>
                </div>
                
                {/* Error message */}
                <header>
                    <h1 id="error-title" className="text-4xl font-bold text-tertiary mb-4 drop-shadow-md">Wubba Lubba Dub Dub!</h1>
                    <p className="text-xl text-tertiary mb-6 font-medium">
                        Looks like you&apos;ve stumbled into the wrong dimension, Morty!
                    </p>
                </header>
                
                {/* Rick&apos;s quote */}
                <blockquote className="max-w-md mx-auto p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-xl mb-8 border-2 border-secondary">
                    <p className="text-tertiary italic font-medium">
                        &quot;Sometimes science is more art than science, Morty. 
                        A lot of people don&apos;t get that.&quot;
                    </p>
                    <footer className="text-secondary mt-2 font-bold">- Rick Sanchez</footer>
                </blockquote>
                
                {/* Portal gun-styled button */}
                <nav>
                    <a href="/" 
                       className="inline-block px-8 py-3 text-lg font-semibold text-primary bg-gradient-to-r from-tertiary to-secondary rounded-full hover:from-secondary hover:to-tertiary transform hover:scale-105 transition-all duration-200 shadow-lg"
                       aria-label="Return to home page">
                        Return to Home Dimension
                    </a>
                </nav>
            </section>
        </main>
    );
}

export default NotFoundPage;
