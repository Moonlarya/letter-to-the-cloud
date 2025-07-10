/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from 'react'
import { Commet } from 'react-loading-indicators'
import HTMLFlipBook from 'react-pageflip'
import Page, { PageCover } from './components/Page/Page'
import StarButton from './components/StarButton/StarButton'

type Props = {
  width: number
  height: number
  isMobile: boolean
}

const Book = ({ width, height, isMobile }: Props) => {
  const flipBook = useRef(null)

  const [page, setPage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isEditingPage, setIsEditingPage] = useState(false)
  const [inputPage, setInputPage] = useState(Math.floor(page / 2) + 1)

  const TOTAL_PAGES = 42

  const getImagePath = (index: number) =>
    `${import.meta.env.BASE_URL}assets/images/Frame ${index + 41}.png`

  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => getImagePath(i))

  const assetCacheRef = useRef<Map<number, { images: HTMLImageElement[] }>>(
    new Map()
  )

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
