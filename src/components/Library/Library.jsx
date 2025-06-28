import AlbumCard from './AlbumCard'

function Library({ data }) {
  return (
    <div className="library-grid">
      {data.map((item) => (
        <AlbumCard 
          key={item.idAlbum} 
          album={item} 
        />
      ))}
    </div>
  )
}

export default Library