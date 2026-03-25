import '../App.css'
import ParticleGlobe from './ParticleGlobe'
import About from './about'
import STC from './STC'
import TechGC from './techGC'
import Faqs from './faqs'
import Footer from './footer'
import SplashCursor from './splash_cursor'
import Navbar from './navbar'

function LandingPage() {
  return (
    <>
        <Navbar />
        <SplashCursor />    
      <section className="hero" id="home">
        <p className="hero-subtitle">IIT ROORKEE'S PREMIER TECH EXHIBITION</p>
        <div className='hero-title-wrapper'>
        
        <img src="./cube.png" alt="Cube" className='Cube-left' />
        <h1 className="hero-title">SRISHTI 2026</h1>
        <img src="./cube.png" alt="Cube" className="Cube-right"  /></div>
        
        <p className="hero-desc">
          SHOWCASING 60+ CUTTING-EDGE PROJECTS ACROSS 25+ DOMAINS
          <br />
          BUILT BY 27+ STUDENT-LED CLUBS.
        </p>
        <div className="hero-buttons">
          <a href="#tech-gc" className="btn btn-primary">JOIN TECH GC</a>
          <a href="#about-stc" className="btn btn-outline">TECH GROUPS</a>
        </div>
      </section>

      <ParticleGlobe />
      <About />
      <TechGC />
      <STC />
      <Faqs />
      <Footer />
    </>
  )
}

export default LandingPage
