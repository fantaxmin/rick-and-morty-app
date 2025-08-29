import DetailsCharacters from "../components/DetailsCharacters";
import MainSidebar from "../components/MainSidebar";

const HomePage = () => {
    return (
        <main className="flex">
            <MainSidebar />
            <DetailsCharacters 
            />
        </main>
    );
}

export default HomePage;