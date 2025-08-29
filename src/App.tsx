import { HashRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePages';
import NotFoundPage from './pages/NotFoundPage';
import { CharacterProvider } from './context/CharactersProvider';

function App() {
  return (
    <HashRouter>
        <CharacterProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route  path='/*' element={<NotFoundPage />} />
          </Routes>
      </CharacterProvider>
    </HashRouter>
  )
}

export default App
