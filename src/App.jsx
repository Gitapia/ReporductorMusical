import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ArtistPage from './pages/ArtistPage'
import AlbumPage from './pages/AlbumPage'
import Player from './components/Player/Player'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/album/:id" element={<AlbumPage />} />
        </Routes>
        <Player />
      </div>
    </Router>
  )
}

export default App
