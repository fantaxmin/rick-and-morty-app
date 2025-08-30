import { BrowserRouter, Routes, Route,  } from 'react-router';
import HomePage from './pages/HomePages';
import NotFoundPage from './pages/NotFoundPage';
import { CharacterProvider } from './context/CharactersProvider';

function App() {
  return (
    <BrowserRouter>
        <CharacterProvider>
          <Routes>
            <Route path="/" element={<HomePage />} >
              <Route path="/character/:characterId" element={null} />
            </Route>
            <Route  path='/*' element={<NotFoundPage />} />
          </Routes>
      </CharacterProvider>
    </BrowserRouter>
  )
}

export default App
