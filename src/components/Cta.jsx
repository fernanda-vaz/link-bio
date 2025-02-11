import '../styles/Cta.scss'
import { motion } from 'motion/react'

const transition = {
  duration: 0.5,
  delay: 1.1,
  ease: [0, 0.71, 0.2, 1.01],
}

const CTA = () => {
  return (
    <motion.div
      className='cards-container cta'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
    >
      <a href='https://buymeacoffee.com/fernandavaz' className='cta-container'>
        <img src='/icons/buy-me-a-coffee.svg' alt='' />
        <p>buy me a coffee? (:</p>
      </a>
      <a
        href='https://wa.me/5561990008520?text=Tenho%20uma%20ideia%20para%20um%20projeto.%20Podemos%20conversar?%20:)'
        className='cta-container'
      >
        <p>Tem um projeto em mente?</p>
        <img src='/icons/whatsapp.svg' alt='' />
      </a>
    </motion.div>
  )
}

export default CTA
