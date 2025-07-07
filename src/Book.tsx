/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from 'react'
import { Commet } from 'react-loading-indicators'
import HTMLFlipBook from 'react-pageflip'
import Page, { PageCover } from './components/Page/Page'
import StarButton from './components/StarButton/StarButton'

import page1 from '../public/assets/images/Frame 41.png'
import page2 from '../public/assets/images/Frame 42.png'
import page3 from '../public/assets/images/Frame 43.png'
import page4 from '../public/assets/images/Frame 44.png'
import page5 from '../public/assets/images/Frame 45.png'
import page6 from '../public/assets/images/Frame 46.png'
import page7 from '../public/assets/images/Frame 47.png'
import page8 from '../public/assets/images/Frame 48.png'
import page9 from '../public/assets/images/Frame 49.png'
import page10 from '../public/assets/images/Frame 50.png'
import page11 from '../public/assets/images/Frame 51.png'
import page12 from '../public/assets/images/Frame 52.png'
import page13 from '../public/assets/images/Frame 53.png'
import page14 from '../public/assets/images/Frame 54.png'
import page15 from '../public/assets/images/Frame 55.png'
import page16 from '../public/assets/images/Frame 56.png'
import page17 from '../public/assets/images/Frame 57.png'
import page18 from '../public/assets/images/Frame 58.png'
import page19 from '../public/assets/images/Frame 59.png'
import page20 from '../public/assets/images/Frame 60.png'
import page21 from '../public/assets/images/Frame 61.png'
import page22 from '../public/assets/images/Frame 62.png'
import page23 from '../public/assets/images/Frame 63.png'
import page24 from '../public/assets/images/Frame 64.png'
import page25 from '../public/assets/images/Frame 65.png'
import page26 from '../public/assets/images/Frame 66.png'
import page27 from '../public/assets/images/Frame 67.png'
import page28 from '../public/assets/images/Frame 68.png'
import page29 from '../public/assets/images/Frame 69.png'
import page30 from '../public/assets/images/Frame 70.png'
import page31 from '../public/assets/images/Frame 71.png'
import page32 from '../public/assets/images/Frame 72.png'
import page33 from '../public/assets/images/Frame 73.png'
import page34 from '../public/assets/images/Frame 74.png'
import page35 from '../public/assets/images/Frame 75.png'
import page36 from '../public/assets/images/Frame 76.png'
import page37 from '../public/assets/images/Frame 77.png'
import page38 from '../public/assets/images/Frame 78.png'
import page39 from '../public/assets/images/Frame 79.png'
import page40 from '../public/assets/images/Frame 80.png'
import page41 from '../public/assets/images/Frame 81.png'
import page42 from '../public/assets/images/Frame 82.png'

type Props = {
  width: number
  height: number
  isMobile: boolean
}

const pages = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  page19,
  page20,
  page21,
  page22,
  page23,
  page24,
  page25,
  page26,
  page27,
  page28,
  page29,
  page30,
  page33,
  page34,
  page35,
  page36,
  page37,
  page38,
  page39,
  page40,
  page41,
  page42,
  page31,
  page32,
]

const Book = ({ width, height, isMobile }: Props) => {
  const flipBook = useRef(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const [page, setPage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isEditingPage, setIsEditingPage] = useState(false)
  const [inputPage, setInputPage] = useState(Math.floor(page / 2) + 1)

  const assetCacheRef = useRef<Map<number, { images: HTMLImageElement[] }>>(
    new Map()
  )

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

  useEffect(() => {
    const loadAssets = async () => {
      for (let page = 0; page < pages.length / 2; page++) {
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

        const [img1, img2] = await Promise.all([...imagePromises])

        assetCacheRef.current.set(page, {
          images: [img1, img2],
        })
      }

      setIsLoaded(true)
    }

    loadAssets()
  }, [])
  const handlePageChange = async (newPage: number) => {
    const clamped = Math.max(1, Math.min(newPage, Math.floor(pages.length / 2)))
    const actualPage = (clamped - 1) * 2
    const diff = actualPage - page

    const direction = diff > 0 ? 1 : -1
    const steps = Math.abs(diff)

    for (let i = 0; i <= steps; i++) {
      //@ts-ignore
      flipBook.current?.flip(page + i * direction)
    }
  }

  const onPage = (e: { data: number }) => setPage(e.data)

  //@ts-ignore
  const nextButtonClick = () => flipBook.current?.flipNext()
  //@ts-ignore
  const prevButtonClick = () => flipBook.current?.flipPrev()

  if (!isLoaded) {
    return <Commet color='#ffd600' size='large' />
  }

  return (
    <>
      <div className='book-wrapper'>
        <audio autoPlay loop ref={audioRef} preload='auto'>
          <source
            src={`${import.meta.env.BASE_URL}assets/audio/1.mp3`}
            type='audio/mpeg'
          />
        </audio>

        <StarButton
          ariaLabel='Previous page'
          isDisabled={!page}
          onClick={prevButtonClick}
        >
          <span>←</span>
        </StarButton>
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={width}
          height={height}
          maxShadowOpacity={0.5}
          size='fixed'
          drawShadow
          showCover
          mobileScrollSupport={false}
          onFlip={onPage}
          ref={(el) => (flipBook.current = el?.pageFlip())}
        >
          <PageCover
            //@ts-ignore
            width={width}
            height={height}
            src={`${import.meta.env.BASE_URL}assets/images/Frame 83.png`}
          />
          {pages.map((image, index) => (
            <Page
              key={index}
              //@ts-ignore
              src={image}
              width={width}
              height={height}
              isEven={index === 0}
            />
          ))}
          <PageCover
            //@ts-ignore
            width={width}
            height={height}
            src={`${import.meta.env.BASE_URL}assets/images/Frame 84.png`}
          />
        </HTMLFlipBook>
        <StarButton
          ariaLabel='Next page'
          isDisabled={page >= pages.length}
          onClick={nextButtonClick}
        >
          <span>→</span>
        </StarButton>
      </div>
      {!isMobile && (
        <>
          <img
            className={`authors ${page >= pages.length ? '' : 'disabled'}`}
            src={`${
              import.meta.env.BASE_URL
            }assets/images/2025-07-07 18.27.30.jpg`}
          />
          {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          {Array.from({ length: 5 }).map((_el) => (
            <div className='star'></div>
          ))}
        </>
      )}
      {page && page <= pages.length && (
        <p>
          {isEditingPage ? (
            <input
              type='number'
              className='current-page-input'
              value={inputPage}
              min={1}
              max={Math.floor(pages.length / 2)}
              onChange={(e) => setInputPage(Number(e.target.value))}
              onBlur={() => {
                setIsEditingPage(false)
                handlePageChange(inputPage)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setIsEditingPage(false)
                  handlePageChange(inputPage)
                }
              }}
              autoFocus
            />
          ) : (
            <span
              className='current-page-number'
              onClick={() => {
                setInputPage(Math.floor(page / 2) + 1)
                setIsEditingPage(true)
              }}
              style={{ cursor: 'pointer' }}
            >
              {Math.floor(page / 2) + 1}
            </span>
          )}{' '}
          / <span>{Math.floor(pages.length / 2)}</span>
        </p>
      )}
    </>
  )
}

export default Book
