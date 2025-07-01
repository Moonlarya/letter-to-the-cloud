import { useState, useEffect } from 'react'

const useIsLandscape = () => {
  const [isLandscape, setIsLandscape] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth > window.innerHeight
  })

  useEffect(() => {
    function onResize() {
      setIsLandscape(window.innerWidth > window.innerHeight)
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  }, [])

  return isLandscape
}

export default useIsLandscape
