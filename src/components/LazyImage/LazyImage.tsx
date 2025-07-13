import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  alt?: string
  style?: React.CSSProperties
  className?: string
}

const LazyImage = ({ src, alt = '', style, className }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '150px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={style}
      className={`mobile-img-container ${className}`}
    >
      {isVisible && (
        <img
          src={src}
          alt={alt}
          loading='lazy'
          style={{ width: '100%', marginBottom: '-1px' }}
        />
      )}
    </div>
  )
}

export default LazyImage
