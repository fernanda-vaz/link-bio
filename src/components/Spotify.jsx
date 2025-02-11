import '../styles/Spotify.scss'

const SpotifyContainer = () => {
  return (
    <div className='cards-container spotify'>
      <h3>O que estou escutando...</h3>
      <iframe
        src='https://open.spotify.com/embed/playlist/37i9dQZF1E4l1ZvnOT1pCh?utm_source=generator'
        frameBorder='0'
        allowFullScreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </div>
  )
}

export default SpotifyContainer
