import { useState, useRef, useEffect } from 'react'

import useWindowSize from './hooks/useWindowSize'

import Book from './Book'
import TwinkleOverlay from './TwinkleOverlay'
import CloudsBackground from './CloudsBackground'
import LazyImage from './components/LazyImage/LazyImage'

import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'

import './App.css'
import SoundToggle from './components/SoundToggle'

function App() {
  const [hasInteracted, setHasInteracted] = useState(false)
  const { width, height, isMobile } = useWindowSize()
  const audioRef = useRef<HTMLAudioElement>(null)

  const TOTAL_PAGES = 25

  const getImagePath = (index: number) =>
    `${import.meta.env.BASE_URL}assets/mobile/mob${index}.png`

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
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <SoundToggle audioRef={audioRef} />
      <audio autoPlay loop ref={audioRef} preload='auto'>
        <source
          src={`${import.meta.env.BASE_URL}assets/audio/1.mp3`}
          type='audio/mpeg'
        />
      </audio>
      {isMobile ? (
        <div className='mobile-book'>
          {pages.map((src, index) => (
            <LazyImage
              key={index}
              src={src}
              alt={`mob${index}`}
              style={{ width: '100vw', height: 'max-content' }}
            />
          ))}
          <div
            className='social'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#241c3c',
              margin: 0,
              padding: '20px',
              fontSize: '24px',
            }}
          >
            <div style={{ display: 'grid', justifyItems: 'center' }}>
              <p>Serge Belkin:</p>
              <div>
                <a
                  href='https://t.me/sergebelkin'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <TelegramIcon
                    fontSize='large'
                    sx={{ color: 'rgb(248, 213, 74)', marginRight: '10px' }}
                  />
                </a>
                <a
                  href='https://instagram.com/serge_belkin'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <InstagramIcon
                    fontSize='large'
                    sx={{ color: 'rgb(248, 213, 74)' }}
                  />
                </a>
              </div>
            </div>
            <div style={{ display: 'grid', justifyItems: 'center' }}>
              <p>Hmarka:</p>
              <a
                href='https://instagram.com/moonlaria'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramIcon
                  fontSize='large'
                  sx={{ color: 'rgb(248, 213, 74)' }}
                />
              </a>
            </div>
          </div>
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
