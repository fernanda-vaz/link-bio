import '../styles/Spotify.scss'
import { motion } from 'motion/react'

const transition = {
  duration: 0.5,
  delay: 1.3,
  ease: [0, 0.71, 0.2, 1.01],
}

const SpotifyContainer = () => {
  return (
    <motion.div
      className='cards-container spotify'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
    >
      <h3>O que estou escutando...</h3>
      <iframe
        src='https://open.spotify.com/embed/playlist/37i9dQZF1E4l1ZvnOT1pCh?utm_source=generator'
        frameBorder='0'
        allowFullScreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </motion.div>
  )
}

export default SpotifyContainer
