import HTMLFlipBook from 'react-pageflip'

const Book = () => {
  return (
    <>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/**@ts-ignore */}
      <HTMLFlipBook
        width={600}
        height={600}
        maxShadowOpacity={0.5}
        size='fixed'
        drawShadow
        showCover
      >
        <div className='page page-cover' data-density='hard'>
          <img
            src={`${import.meta.env.BASE_URL}assets/Frame 3.svg`}
            style={{ width: '600px', height: '600px' }}
          />
        </div>
        {Array.from({ length: 36 }).map((_, index: number) => (
          <div style={{ width: '100%', height: '100%' }}>
            <img
              src={`${import.meta.env.BASE_URL}assets/Frame ${index + 4}.svg`}
              style={{ width: '600px', height: '600px' }}
            />
            <div className={`overlay ${index % 2 === 0 ? 'left' : 'right'}`} />
          </div>
        ))}
      </HTMLFlipBook>
    </>
  )
}

export default Book
