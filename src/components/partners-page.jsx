import Navbar from './navbar'
import Footer from './footer'
import SplashCursor from './splash_cursor'
import './partners-page.css'

const partners = Array.from({ length: 12 }, (_, idx) => ({
  id: idx + 1,
  src: `/partner${idx + 1}.png`,
  alt: `Partner ${idx + 1} logo`,
}))

function PartnersPage() {
  return (
    <>
      <Navbar />
      <SplashCursor />

      <main className="ptr26-page">
        <section className="ptr26-board" aria-label="Partners">
          <header className="ptr26-header">
            <h1 className="ptr26-title">PARTNERS</h1>
          </header>

          <div className="ptr26-grid">
            {partners.map((partner) => (
              <article key={partner.id} className="ptr26-card">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                  className="ptr26-logo"
                />
              </article>
            ))}
          </div>

          <p className="ptr26-footer-note">MORE COMING SOON...</p>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default PartnersPage