import '../styles/Cta.scss'

const CTA = () => {
  return (
    <div className='cards-container cta'>
      <a href='https://buymeacoffee.com/fernandavaz' className='cta-container'>
        <img src='./public/icons/buy-me-a-coffee.svg' alt='' />
        <p>buy me a coffee? (:</p>
      </a>
      <a
        href='https://wa.me/5561990008520?text=Tenho%20uma%20ideia%20para%20um%20projeto.%20Podemos%20conversar?%20:)'
        className='cta-container'
      >
        <p>Tem um projeto em mente?</p>
        <img src='./public/icons/whatsapp.svg' alt='' />
      </a>
    </div>
  )
}

export default CTA
