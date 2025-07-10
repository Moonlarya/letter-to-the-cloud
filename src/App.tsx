import useWindowSize from './hooks/useWindowSize'

import Book from './Book'
import TwinkleOverlay from './TwinkleOverlay'
import CloudsBackground from './CloudsBackground'

import './App.css'
import { useState, useRef, useEffect } from 'react'

function App() {
  const [hasInteracted, setHasInteracted] = useState(false)
  const { width, height, isMobile } = useWindowSize()
  const audioRef = useRef<HTMLAudioElement>(null)

  const TOTAL_PAGES = 25

  const getImagePath = (index: number) =>
    `${import.meta.env.BASE_URL}assets/mobile/mob${index}.webp`

  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => getImagePath(i))

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true)
        audioRef.current.play().catch((err) => {
          console.error('Autoplay failed:', err)
        })
      }

      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }

    window.addEventListener('click', handleFirstInteraction)
    window.addEventListener('keydown', handleFirstInteraction)

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }
  }, [hasInteracted])

  return (
    <>
      <audio autoPlay loop ref={audioRef} preload='auto'>
        <source
          src={`${import.meta.env.BASE_URL}assets/audio/1.mp3`}
          type='audio/mpeg'
        />
      </audio>
      {isMobile ? (
        <div className='mobile-book'>
          {pages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`mob${index}`}
              loading='lazy'
              style={{ width: '100vw', height: 'max-content' }}
            />
          ))}
        </div>
      ) : (
        <>
          <TwinkleOverlay />
          <CloudsBackground />
          <div className='wrapper'>
            <Book width={width} height={height} isMobile={isMobile} />
          </div>
        </>
      )}
    </>
  )
}

export default App
