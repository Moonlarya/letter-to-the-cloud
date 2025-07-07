/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef } from 'react'

import './styles.css'

//@ts-ignore
type Props = {
  key: string
  src: string
  width: number
  height: number
  isEven: boolean
}

const Page = forwardRef((props, ref) => {
  //@ts-ignore
  const { key, src, width, height, isEven } = props

  return (
    //@ts-ignore
    <div key={key} className='page' ref={ref}>
      <img src={src} style={{ width, height }} />
      <div className={`overlay ${isEven ? 'left' : 'right'}`} />
    </div>
  )
})

const PageCover = forwardRef((props, ref) => {
  //@ts-ignore
  const { width, height, src } = props

  return (
    //@ts-ignore
    <div className='page page-cover' data-density='hard' ref={ref}>
      <img src={src} style={{ width, height }} />
    </div>
  )
})

export default Page
export { PageCover }
