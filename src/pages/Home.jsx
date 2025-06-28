import { useState } from 'react'
import { useAudioDB } from '../hooks/useAudioDB'
import Library from '../components/Library/Library'
import Search from '../components/Search/Search'

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: trendingData, loading, error } = useAudioDB('trending.php', { country: 'us', type: 'itunes', format: 'albums' })

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className="home">
      <Search onSearch={handleSearch} />
      
      {searchQuery ? (
        <div className="search-results">
          {/* Mostrar resultados de búsqueda */}
        </div>
      ) : (
        <>
          <h2>Tendencias</h2>
          {loading && <p>Cargando...</p>}
          {error && <p>Error al cargar datos: {error.message}</p>}
          {trendingData && <Library data={trendingData.trending} />}
        </>
      )}
    </div>
  )
}

export default Home