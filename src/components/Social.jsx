import { Button } from '@mui/material'
import '../styles/Social.scss'

const Social = () => {
  return (
    <div className='social-container'>
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
        <a href='https://tiktok.com/@fevaz'>
          <img src='/icons/tiktok.svg' alt='' />
        </a>
      </div>
    </div>
  )
}

export default Social
