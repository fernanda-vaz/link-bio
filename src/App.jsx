import CTA from './components/Cta'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Social from './components/Social'
import SpotifyContainer from './components/Spotify'
import './styles/App.scss'

function App() {
  return (
    <div className='container'>
      <div className='content'>
        <Header />
        <Skills />
        <Portfolio />
        <Projects />
        <Social />
        <CTA />
        <SpotifyContainer />
      </div>
    </div>
  )
}

export default App
