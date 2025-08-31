import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePages';
import NotFoundPage from './pages/NotFoundPage';
import { CharacterProvider } from './context/CharactersProvider';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const httpLink = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default App
