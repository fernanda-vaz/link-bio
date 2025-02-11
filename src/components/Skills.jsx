import '../styles/Skills.scss'

const Skills = () => {
  return (
    <div className='cards-container skills'>
      <h3>Tecnologias</h3>
      <div className='skills-icons'>
        <div className='icon-container'>
          <span className='caption'>html</span>
          <img className='icon html' src='/icons/html.svg' alt='' />
        </div>
        <div className='icon-container'>
          <span className='caption'>css</span>
          <img className='icon css' src='/icons/css.svg' alt='' />
        </div>
        <div className='icon-container'>
          <span className='caption'>JavaScript</span>
          <img className='icon js' src='/icons/js.svg' alt='' />
        </div>
        <div className='icon-container'>
          <span className='caption'>React</span>
          <img className='icon react' src='/icons/react.svg' alt='' />
        </div>
        <div className='icon-container'>
          <span className='caption'>Sass</span>
          <img className='icon sass' src='/icons/sass.svg' alt='' />
        </div>
        <div className='icon-container'>
          <span className='caption'>Styled Components</span>
          <img
            className='icon styled'
            src='/icons/styled-components.svg'
            alt=''
          />
        </div>
        <div className='icon-container'>
          <span className='caption'>TailwindCSS</span>
          <img className='icon tailwind' src='/icons/tailwind.svg' alt='' />
        </div>
        <div className='icon-container'>
          <span className='caption'>Node.js</span>
          <img className='icon node' src='/icons/node.svg' alt='' />
        </div>
        <div className='icon-container'>
          <span className='caption'>Figma</span>
          <img className='icon figma' src='/icons/figma.svg' alt='' />
        </div>
        <div className='icon-container'>
          <span className='caption'>Git</span>
          <img className='icon git' src='/icons/git.svg' alt='' />
        </div>
        <div className='icon-container'>
          <span className='caption'>GitHub</span>
          <img className='icon github' src='/icons/github.svg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Skills
