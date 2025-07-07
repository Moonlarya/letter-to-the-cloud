import { type ReactElement } from 'react'
import './styles.css'

type Props = {
  ariaLabel: string
  isDisabled: boolean
  children: ReactElement
  onClick: () => void
}

const StarButton = ({ ariaLabel, isDisabled, children, onClick }: Props) => (
  <button
    type='button'
    onClick={onClick}
    className={`button-circle ${isDisabled ? 'disabled' : ''}`}
    tabIndex={-1}
    onMouseDown={(e) => e.preventDefault()}
    aria-label={ariaLabel}
  >
    {children}
  </button>
)

export default StarButton
