/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from 'react'
import { Commet } from 'react-loading-indicators'
import HTMLFlipBook from 'react-pageflip'
import Page, { PageCover } from './components/Page/Page'
import StarButton from './components/StarButton/StarButton'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'

type Props = {
  width: number
  height: number
  isMobile: boolean
}

const TOTAL_PAGES = 42

const Book = ({ width, height, isMobile }: Props) => {
  const flipBook = useRef(null)

  const [page, setPage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isEditingPage, setIsEditingPage] = useState(false)
  const [inputPage, setInputPage] = useState(Math.floor(page / 2) + 1)

  const getImagePath = (index: number) =>
    `${import.meta.env.BASE_URL}assets/images/Frame ${index + 41}.png`

  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => getImagePath(i))

  const assetCacheRef = useRef<Map<number, { images: HTMLImageElement[] }>>(
    new Map()
  )

  useEffect(() => {
    const loadAssets = async () => {
      for (let page = 0; page < pages.length / 2; page++) {
        const imageStartIndex = page * 2 + TOTAL_PAGES - 1
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

  const handlePageChange = async (newPage: number) =>
    //@ts-ignore
    flipBook.current?.turnToPage(newPage * 2)

  const onPage = (e: { data: number }) => setPage(e.data)

  //@ts-ignore
  const nextButtonClick = () => flipBook.current.flipNext()
  //@ts-ignore
  const prevButtonClick = () => flipBook.current.flipPrev()

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
        <div
          className={`authors-wrapper ${
            page >= pages.length ? '' : 'disabled'
          }`}
        >
          <img
            className='authors'
            src={`${
              import.meta.env.BASE_URL
            }assets/images/2025-07-07 18.27.30.jpg`}
          />
          <div className='social'>
            <p>Serge Belkin:</p>
            <a
              href='https://t.me/sergebelkin'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TelegramIcon
                fontSize='large'
                sx={{ color: 'rgb(248, 213, 74)', marginRight: '10px' }}
              />
            </a>
            <a
              href='https://instagram.com/serge_belkin'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon
                fontSize='large'
                sx={{ color: 'rgb(248, 213, 74)' }}
              />
            </a>
            <p />
            <p>Hmarka:</p>
            <a
              href='https://instagram.com/moonlaria'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon
                fontSize='large'
                sx={{ color: 'rgb(248, 213, 74)' }}
              />
            </a>
          </div>
        </div>
      )}
      {page && page <= pages.length && (
        <p className='page-number'>
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
