/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'

const Book = () => {
  const flipBook = useRef(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)

  const nextButtonClick = () => {
    //@ts-ignore
    flipBook.current?.flipNext()
  }

  const prevButtonClick = () => {
    //@ts-ignore
    flipBook.current?.flipPrev()
  }

  const onPage = (e: { data: number }) => setPage(e.data)

  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const handleFirstInteraction = () => setHasInteracted(true)
    window.addEventListener('click', handleFirstInteraction, { once: true })
    return () => window.removeEventListener('click', handleFirstInteraction)
  }, [])

  useEffect(() => {
    if (flipBook.current) {
      //@ts-ignore
      setTotalPage(flipBook.current.getPageCount())
    }
  }, [])

  useEffect(() => {
    if (!hasInteracted) return

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    const audio = new Audio(`${import.meta.env.BASE_URL}/audio/${page + 2}.mp3`)
    audioRef.current = audio

    audio.play().catch((err) => {
      console.warn(`Не удалось воспроизвести ${page + 2}.mp3`, err)
    })

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [page])

  return (
    <>
      {/*@ts-ignore*/}
      <HTMLFlipBook
        width={600}
        height={600}
        maxShadowOpacity={0.5}
        size='fixed'
        drawShadow
        showCover
        mobileScrollSupport
        onFlip={onPage}
        ref={(el) => {
          // @ts-ignore: el can be HTML element wrapper or PageFlip object
          flipBook.current = el?.pageFlip()
        }}
      >
        <div className='page page-cover' data-density='hard'>
          <img
            src={`${import.meta.env.BASE_URL}assets/Frame 3.svg`}
            style={{ width: '600px', height: '600px' }}
          />
        </div>

        {Array.from({ length: 36 }).map((_, index) => (
          <div key={index} style={{ width: '100%', height: '100%' }}>
            <img
              src={`${import.meta.env.BASE_URL}assets/Frame ${index + 4}.svg`}
              style={{ width: '600px', height: '600px' }}
            />
            <div className={`overlay ${index % 2 === 0 ? 'left' : 'right'}`} />
          </div>
        ))}
      </HTMLFlipBook>
      <button type='button' onClick={prevButtonClick}>
        {'<-'}
      </button>
      [<span>{page}</span> of <span>{totalPage}</span>]
      <button type='button' onClick={nextButtonClick}>
        {'->'}
      </button>
    </>
  )
}

export default Book
