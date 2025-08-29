import { HashRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePages';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path='/*' element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
