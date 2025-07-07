import styled, { keyframes } from 'styled-components'

const moveClouds = keyframes`
  0% {
    transform: translateX(-1000px) scale(1);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(100vw) scale(1);
    opacity: 0;
  }
`

const CloudWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  background: transparent;
`

const CloudImage = styled.img<{
  top: string
  delay: number
  duration: number
  scale?: number
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: 0;
  width: auto;
  height: auto;
  transform: scale(${({ scale }) => scale || 1});
  opacity: 0;
  animation: ${moveClouds} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`

const RealClouds = () => {
  return (
    <CloudWrapper>
      <CloudImage
        src={`${import.meta.env.BASE_URL}assets/images/clouds/02.png`}
        top='20%'
        delay={0}
        duration={80}
        scale={6}
      />
      <CloudImage
        src={`${import.meta.env.BASE_URL}assets/images/clouds/03.png`}
        top='30%'
        delay={5}
        duration={90}
        scale={5.5}
      />
      <CloudImage
        src={`${import.meta.env.BASE_URL}assets/images/clouds/04.png`}
        top='40%'
        delay={10}
        duration={100}
        scale={6.2}
      />
      <CloudImage
        src={`${import.meta.env.BASE_URL}assets/images/clouds/05.png`}
        top='0%'
        delay={3}
        duration={85}
        scale={5.8}
      />
      <CloudImage
        src={`${import.meta.env.BASE_URL}assets/images/clouds/06.png`}
        top='25%'
        delay={8}
        duration={95}
        scale={6.5}
      />
      <CloudImage
        src={`${import.meta.env.BASE_URL}assets/images/clouds/07.png`}
        top='35%'
        delay={12}
        duration={90}
        scale={6}
      />
      <CloudImage
        src={`${import.meta.env.BASE_URL}assets/images/clouds/08.png`}
        top='45%'
        delay={6}
        duration={100}
        scale={6.8}
      />
    </CloudWrapper>
  )
}

export default RealClouds
