/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from 'react'
import { Commet } from 'react-loading-indicators'
import HTMLFlipBook from 'react-pageflip'

const TOTAL_PAGES = 36

const Book = ({ isMobile }: { isMobile: boolean }) => {
  const flipbookHeight = isMobile ? 300 : 600
  const flipbookWidth = isMobile ? 300 : 600

  const flipBook = useRef(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [page, setPage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const assetCacheRef = useRef<
    Map<number, { images: HTMLImageElement[]; audio: HTMLAudioElement }>
  >(new Map())

  useEffect(() => {
    const loadAllAssets = async () => {
      for (let page = 0; page < TOTAL_PAGES / 2; page++) {
        const imageStartIndex = page * 2 + 41
        const imagePaths = [imageStartIndex, imageStartIndex + 1].map(
          (i) => `${import.meta.env.BASE_URL}assets/images/Frame ${i}.png`
        )

        const imagePromises = imagePaths.map((src) => {
          const img = new Image()
          img.src = src
          return new Promise<HTMLImageElement>((resolve) => {
            img.onload = () => resolve(img)
            img.onerror = () => resolve(img)
          })
        })

        const audioPath = `${
          import.meta.env.BASE_URL
        }audio/${imageStartIndex}.mp3`

        //@ts-ignore
        const audioElement = new Audio(audioPath)
        const audioPromise = new Promise<HTMLAudioElement>((resolve) => {
          audioElement.oncanplaythrough = () => resolve(audioElement)
          audioElement.onerror = () => resolve(audioElement)
        })

        const [img1, img2, loadedAudio] = await Promise.all([
          ...imagePromises,
          audioPromise,
        ])

        assetCacheRef.current.set(page, {
          //@ts-ignore
          images: [img1, img2],
          //@ts-ignore
          audio: loadedAudio,
        })
      }

      setIsLoaded(true)
    }

    loadAllAssets()
  }, [])

  const onPage = (e: { data: number }) => setPage(e.data)

  useEffect(() => {
    const handleFirstInteraction = () => setHasInteracted(true)
    window.addEventListener('click', handleFirstInteraction, { once: true })
    return () => window.removeEventListener('click', handleFirstInteraction)
  }, [])

  useEffect(() => {
    if (!hasInteracted) return

    const cached = assetCacheRef.current.get(page)
    if (!cached) return

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    audioRef.current = cached.audio
    cached.audio.play().catch((err) => {
      console.warn(`Не удалось воспроизвести аудио для страницы ${page}`, err)
    })

    return () => {
      cached.audio.pause()
      cached.audio.currentTime = 0
    }
  }, [page, hasInteracted])

  //@ts-ignore
  const nextButtonClick = () => flipBook.current?.flipNext()
  //@ts-ignore
  const prevButtonClick = () => flipBook.current?.flipPrev()

  if (!isLoaded) {
    return <Commet color='#ffd600' size='large' />
  }

  return (
    <>
      <div className='wrapper'>
        <button
          type='button'
          onClick={prevButtonClick}
          className={`button-circle ${!page ? 'disabled' : ''}`}
          tabIndex={-1}
          aria-label='Previous page'
          onMouseDown={(e) => e.preventDefault()}
        >
          {'←'}
        </button>
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={flipbookWidth}
          height={flipbookHeight}
          maxShadowOpacity={0.5}
          size='fixed'
          drawShadow
          showCover
          mobileScrollSupport={false}
          onFlip={onPage}
          ref={(el) => {
            flipBook.current = el?.pageFlip()
          }}
        >
          <div className='page page-cover' data-density='hard'>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/Frame 40.png`}
              style={{ width: flipbookWidth, height: flipbookHeight }}
            />
          </div>

          {Array.from(assetCacheRef.current.entries()).flatMap(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ([_, { images }], i) =>
              images.map((img, idx) => (
                <div key={`${i}-${idx}`} className='page'>
                  <img
                    src={img.src}
                    style={{ width: flipbookWidth, height: flipbookHeight }}
                  />
                  <div className={`overlay ${idx === 0 ? 'left' : 'right'}`} />
                </div>
              ))
          )}
        </HTMLFlipBook>
        <button
          type='button'
          onClick={nextButtonClick}
          className={`button-circle ${page === TOTAL_PAGES ? 'disabled' : ''}`}
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()}
          aria-label='Next page'
        >
          {'→'}
        </button>
      </div>
      {page && (
        <p>
          <span className='current-page-number'>{page}</span> /{' '}
          <span>{TOTAL_PAGES}</span>
        </p>
      )}
    </>
  )
}

export default Book
