import { Button } from '@mui/material'
import '../styles/Social.scss'
import { motion } from 'motion/react'

const transition = {
  duration: 0.5,
  delay: 0.9,
  ease: [0, 0.71, 0.2, 1.01],
}

const Social = () => {
  return (
    <motion.div
      className='social-container'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
    >
      <Button
        className='btn'
        variant='contained'
        color='inherit'
        endIcon={<img src='/icons/arrow-go2.svg' />}
      >
        <a
          className='btn'
          target='_blank'
          href='https://drive.google.com/file/d/1dNBAK6I9Fw5hucUGtaIvXgF4FK3k-i_3/view?usp=drive_link'
        >
          Currículo
        </a>
      </Button>

      <div className='social-links'>
        <a href='https://github.com/fernanda-vaz'>
          <img src='/icons/github2.svg' alt='' />
        </a>
        <a href='https://linkedin.com/in/vaz-fernanda'>
          <img src='/icons/linkedin.svg' alt='' />
        </a>
        <a href='https://instagram.com/fevaz'>
          <img src='/icons/instagram.svg' alt='' />
        </a>
        <a href='https://tiktok.com/@_fevaz'>
          <img src='/icons/tiktok.svg' alt='' />
        </a>
      </div>
    </motion.div>
  )
}

export default Social
