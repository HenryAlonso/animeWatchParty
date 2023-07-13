import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeDisplay from './components/AnimeDisplay';
import AnimeViewOne from './components/AnimeViewOne';
import AnimeAdd from './components/AnimeAdd';
import AnimeUpdate from './components/AnimeUpdate';

function App() {

  const [animeWatchParties, setAnimeWatchParties] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/anime`)
      .then(response => {
        setAnimeWatchParties(response.data);
      })
      .catch(err => {
        console.log('Error fetching anime watch parties', err);
      });
  }, []);

  const removeFromDom = animeId => {
    axios.delete(`http://localhost:8000/api/anime/${animeId}`)
      .then(res => {
        setAnimeWatchParties(animeWatchParties.filter(animeWatchParties => animeWatchParties._id !== animeId));
      })
      .catch(err => console.log(err));
  };

  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* UPDATE PATH IF LOGIN PAGE IS ADDED!! */}
          <Route 
          path='/' 
          element={<AnimeDisplay animeWatchParties={animeWatchParties} removeFromDom={removeFromDom} />
          }
          />

          <Route
          path='/anime/:id'
          element={<AnimeViewOne animeWatchParties={animeWatchParties} removeFromDom={removeFromDom} />
          }
          />

          <Route
          path='/anime/new'
          element={<AnimeAdd animeWatchParties={animeWatchParties} setAnimeWatchParties={setAnimeWatchParties} />
          }
          />
        
          <Route
          path='/anime/edit/:id'
          element={<AnimeUpdate animeWatchParties={animeWatchParties} setAnimeWatchParties={setAnimeWatchParties} />
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;