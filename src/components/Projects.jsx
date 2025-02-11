import { Drawer } from '@mui/material'
import { useState } from 'react'
import '../styles/Projects.scss'
import { motion } from 'motion/react'

const transition = {
  duration: 0.5,
  delay: 0.7,
  ease: [0, 0.71, 0.2, 1.01],
}

const Projects = () => {
  const [openProjects, setOpenProjecs] = useState(false)

  const handleOpenProjects = () => {
    setOpenProjecs(!openProjects)
  }

  return (
    <motion.div
      className='cards-container projects'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
    >
      <div className='projects-content' id='dropdown-trigger'>
        <img src='./icons/projects.svg' alt='' />
        <h3>Projetos</h3>
      </div>

      <img
        id='see-projects'
        src='./icons/arrow-down.svg'
        alt=''
        className='arrow-icon'
        onClick={handleOpenProjects}
      />
      <Drawer anchor='bottom' open={openProjects} onClose={handleOpenProjects}>
        <div className='drawer'>
          <div className='cards-container drawer-content'>
            <img src='/projects/cover.jpg' className='bannerImage' />
            <div className='text-content'>
              <h3>Title</h3>
              <p>Description</p>
              <a href=''>deploy.com</a>
            </div>
          </div>

          <div className='cards-container drawer-content'>
            <div className='bannerImage'></div>
            <div className='text-content'>
              <h3>Title</h3>
              <p>Description</p>
              <a href=''>deploy.com</a>
            </div>
          </div>

          <div className='cards-container drawer-content'>
            <div className='bannerImage'></div>
            <div className='text-content'>
              <h3>Title</h3>
              <p>Description</p>
              <a href=''>deploy.com</a>
            </div>
          </div>
        </div>
      </Drawer>
    </motion.div>
  )
}

export default Projects
