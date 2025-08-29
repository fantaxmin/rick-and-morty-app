const NotFoundPage = () => {
    return (
        <main className="min-h-screen bg-[#EEE3FF] flex items-center justify-center p-4" role="main">
            <section className="text-center" aria-labelledby="error-title">
                {/* Portal effect using gradients and animation */}
                <div className="relative w-64 h-64 mx-auto mb-8" role="presentation">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8054C7] to-[#5A3696] rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute inset-2 bg-[#EEE3FF] rounded-full"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-[#5A3696] to-[#8054C7] rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-9xl font-bold text-[#c099ff] opacity-40" aria-hidden="true">404</span>
                    </div>
                </div>
                
                {/* Error message */}
                <header>
                    <h1 id="error-title" className="text-4xl font-bold text-[#5A3696] mb-4 drop-shadow-md">Wubba Lubba Dub Dub!</h1>
                    <p className="text-xl text-[#5A3696] mb-6 font-medium">
                        Looks like you&apos;ve stumbled into the wrong dimension, Morty!
                    </p>
                </header>
                
                {/* Rick&apos;s quote */}
                <blockquote className="max-w-md mx-auto p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-xl mb-8 border-2 border-[#8054C7]">
                    <p className="text-[#5A3696] italic font-medium">
                        &quot;Sometimes science is more art than science, Morty. 
                        A lot of people don&apos;t get that.&quot;
                    </p>
                    <footer className="text-[#8054C7] mt-2 font-bold">- Rick Sanchez</footer>
                </blockquote>
                
                {/* Portal gun-styled button */}
                <nav>
                    <a href="/" 
                       className="inline-block px-8 py-3 text-lg font-semibold text-[#EEE3FF] bg-gradient-to-r from-[#5A3696] to-[#8054C7] rounded-full hover:from-[#8054C7] hover:to-[#5A3696] transform hover:scale-105 transition-all duration-200 shadow-lg"
                       aria-label="Return to home page">
                        Return to Home Dimension
                    </a>
                </nav>
            </section>
        </main>
    );
}

export default NotFoundPage;
