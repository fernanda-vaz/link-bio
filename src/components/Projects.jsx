import { Drawer } from '@mui/material'
import { useState } from 'react'
import '../styles/Projects.scss'

const Projects = () => {
  const [openProjects, setOpenProjecs] = useState(false)

  const handleOpenProjects = () => {
    setOpenProjecs(!openProjects)
  }

  return (
    <div className='cards-container projects'>
      <div className='projects-content' id='dropdown-trigger'>
        <img src='./public/icons/projects.svg' alt='' />
        <h3>Projetos</h3>
      </div>

      <img
        id='see-projects'
        src='./public/icons/arrow-down.svg'
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
    </div>
  )
}

export default Projects
