// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import CLOUDS from 'vanta/dist/vanta.clouds.min' // TODO: declate types

import Book from './Book'

import './App.css'
import { useState, useRef, useEffect } from 'react'
import RotateDeviceOverlay from './RotateDevice'
import useWindowSize from './hooks/useWindowSize'
import useIsLandscape from './hooks/useIsLandscape'
import TwinkleOverlay from './TwinkleOverlay'

function App() {
  const myRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  const isLandscape = useIsLandscape()
  const { isMobile } = useWindowSize()

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x3b3575,
          sunGlareColor: 0xff3030,
          sunlightColor: 0xff32cf,
          speed: 0.8,
        })
      )
    }
    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (vantaEffect) vantaEffect.destroy() // TODO: fix types issue
    }
  }, [vantaEffect])

  return (
    <>
      {!isLandscape && <RotateDeviceOverlay />}
      <TwinkleOverlay />
      <div ref={myRef} className='wrapper'>
        {isLandscape && <Book isMobile={isMobile} />}
      </div>
    </>
  )
}

export default App
