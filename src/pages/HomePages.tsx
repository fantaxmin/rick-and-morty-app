import { useParams } from "react-router";
import DetailsCharacters from "../components/DetailsCharacters";
import MainSidebar from "../components/MainSidebar";
import NotDetailsCharacter from "../components/NotDetailsCharacter";

const HomePage = () => {
    const { characterId } = useParams();
    
    return (
        <main className="flex">
            <MainSidebar />
            {
                characterId ? <DetailsCharacters characterId={characterId} /> : <NotDetailsCharacter />
            }
        </main>
    );
}

export default HomePage;