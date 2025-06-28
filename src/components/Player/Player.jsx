import { useState, useRef, useEffect } from 'react'
import Controls from './Controls'
import NowPlaying from './NowPlaying'
import ProgressBar from './ProgressBar'

function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef(null)

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const handleSeek = (e) => {
    const seekTime = e.target.value
    audioRef.current.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  // Aquí podrías cargar una canción de tu biblioteca o de la API
  useEffect(() => {
    // Ejemplo: cargar una canción de prueba
    setCurrentTrack({
      id: '123',
      title: 'Canción de ejemplo',
      artist: 'Artista desconocido',
      album: 'Álbum demo',
      cover: 'https://via.placeholder.com/150',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    })
  }, [])

  return (
    <div className="player">
      {currentTrack && (
        <>
          <audio
            ref={audioRef}
            src={currentTrack.audio}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          />
          <NowPlaying track={currentTrack} />
          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            handleSeek={handleSeek}
          />
          <Controls
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
          />
        </>
      )}
    </div>
  )
}

export default Player