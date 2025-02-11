import '../styles/Portfolio.scss'
import { motion } from 'motion/react'

const transition = {
  duration: 0.5,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
}

const Portfolio = () => {
  return (
    <motion.div
      className='cards-container portfolio'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
    >
      <a href='https://fernanda-vaz.github.io/portfolio/'>
        <div className='portfolio-content'>
          <img src='./icons/web.svg' alt='' />
          <h3>Portfólio</h3>
        </div>
        <img src='./icons/arrow-go.svg' alt='' />
      </a>
    </motion.div>
  )
}

export default Portfolio
