import { useState, useEffect } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import IconButton from '@mui/material/IconButton'

type Props = {
  audioRef: React.RefObject<HTMLAudioElement>
}

const SoundToggle = ({ audioRef }: Props) => {
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
    }
  }, [isMuted, audioRef])

  return (
    <IconButton
      onClick={toggleMute}
      sx={{
        position: 'fixed',
        top: 16,
        left: 16,
        zIndex: 10,
        background: 'transparent',
        border: 'none',
        outline: 'none',
        '&:focus': {
          outline: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: 'transparent',
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
    >
      {isMuted ? (
        <VolumeOffIcon fontSize='large' sx={{ color: '#ffd600' }} />
      ) : (
        <VolumeUpIcon fontSize='large' sx={{ color: '#ffd600' }} />
      )}
    </IconButton>
  )
}

export default SoundToggle
