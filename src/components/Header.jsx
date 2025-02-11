import '../styles/Header.scss'

const Header = () => {
  return (
    <>
      <div className='banner'></div>
      <div className='profile'>
        <img src='/profile.png' alt='' />
        <p>@fevaz</p>

        <div>
          <h2>Fernanda Vaz</h2>
          <p>Desenvolvedora Front-end</p>
        </div>
      </div>
    </>
  )
}

export default Header
