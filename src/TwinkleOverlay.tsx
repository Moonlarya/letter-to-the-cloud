import React from 'react'

const TwinkleOverlay = () => {
  return (
    <>
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(0.8); }
        }
      `}</style>
      <div style={styles.overlay}>
        <div style={styles.starsContainer}>
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} style={{ ...styles.star, ...randomStarStyle(i) }} />
          ))}
        </div>
      </div>
    </>
  )
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    height: '70%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    overflow: 'hidden',
  },
  starsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  star: {
    position: 'absolute',
    width: 2,
    height: 2,
    borderRadius: '50%',
    backgroundColor: 'white',
    opacity: 0.8,
    animationName: 'twinkle',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationDirection: 'alternate',
  },
  message: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '80%',
    padding: '0 20px',
  },
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function randomStarStyle(_i: number): React.CSSProperties {
  const top = Math.random() * 100 + '%'
  const left = Math.random() * 100 + '%'
  const duration = 1 + Math.random() * 2
  const delay = Math.random() * 5

  return {
    top,
    left,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  }
}

export default TwinkleOverlay
