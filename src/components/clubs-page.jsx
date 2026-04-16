import Navbar from './navbar'
import Footer from './footer'
import SplashCursor from './splash_cursor'
import './clubs-page.css'

const clubs = Array.from({ length: 20 }, (_, idx) => ({
  id: idx + 1,
  src: `/club${idx + 1}.png`,
  alt: `Club ${idx + 1} logo`,
}))

function ClubsPage() {
  return (
    <>
      <Navbar />
      <SplashCursor />

      <main className="clb26-page">
        <section className="clb26-board" aria-label="Clubs under STC">
          {/* <div className="clb26-glow clb26-glow-left" aria-hidden="true" />
          <div className="clb26-glow clb26-glow-right" aria-hidden="true" /> */}

          <header className="clb26-header">
            <h1 className="clb26-title">CLUBS UNDER STC</h1>
          </header>

          <div className="clb26-grid">
            {clubs.map((club) => (
              <article key={club.id} className="clb26-card">
                <img src={club.src} alt={club.alt} loading="lazy" className="clb26-logo" />
              </article>
            ))}
          </div>

          <p className="clb26-footer-note">MANY MORE...</p>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ClubsPage