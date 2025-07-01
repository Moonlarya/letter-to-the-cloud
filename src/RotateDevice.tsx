import { useEffect, useState } from 'react'

const RotateDeviceOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false)

  const checkOrientation = () => {
    const isPortrait = window.matchMedia('(orientation: portrait)').matches
    const isMobile = window.innerWidth < 768
    setShowOverlay(isPortrait && isMobile)
  }

  useEffect(() => {
    checkOrientation()
    window.addEventListener('orientationchange', checkOrientation)
    window.addEventListener('resize', checkOrientation)

    return () => {
      window.removeEventListener('orientationchange', checkOrientation)
      window.removeEventListener('resize', checkOrientation)
    }
  }, [])

  if (!showOverlay) return null

  return (
    <div className='overlay'>
      <div className='message'>
        📱 Будь ласка поверніть телефон <strong>горизонтально</strong>
        <br />
        для ліпшого відображення.
      </div>
    </div>
  )
}

export default RotateDeviceOverlay
