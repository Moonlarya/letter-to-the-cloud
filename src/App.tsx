import useWindowSize from './hooks/useWindowSize'
import useIsLandscape from './hooks/useIsLandscape'

import Book from './Book'
import TwinkleOverlay from './TwinkleOverlay'
import RotateDeviceOverlay from './RotateDevice'

import './App.css'
import CloudsBackground from './CloudsBackground'

function App() {
  const isLandscape = useIsLandscape()
  const { width, height, isMobile } = useWindowSize()

  return (
    <>
      {!isLandscape && <RotateDeviceOverlay />}
      <TwinkleOverlay />
      <CloudsBackground />
      <div className='wrapper'>
        {isLandscape && (
          <Book width={width} height={height} isMobile={isMobile} />
        )}
      </div>
    </>
  )
}

export default App
