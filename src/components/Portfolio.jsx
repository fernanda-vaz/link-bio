import '../styles/Portfolio.scss'

const Portfolio = () => {
  return (
    <div className='cards-container portfolio'>
      <a href='https://fernanda-vaz.github.io/portfolio/'>
        <div className='portfolio-content'>
          <img src='/icons/web.svg' alt='' />
          <h3>Portfólio</h3>
        </div>
        <img src='/icons/arrow-go.svg' alt='' />
      </a>
    </div>
  )
}

export default Portfolio
