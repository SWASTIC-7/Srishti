import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px' }}>
      <section
        style={{
          width: 'min(680px, 92vw)',
          border: '1px solid rgba(198, 183, 255, 0.35)',
          borderRadius: '16px',
          padding: '28px',
          background: 'linear-gradient(120deg, rgba(49, 28, 97, 0.84), rgba(18, 10, 34, 0.9))',
        }}
      >
        <h1 style={{ fontFamily: 'Tusker, sans-serif', letterSpacing: '1px', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          CONTACT US
        </h1>
        <p style={{ marginTop: '10px', fontFamily: 'Kiona, sans-serif', lineHeight: '1.7', color: 'rgba(243, 238, 255, 0.9)' }}>
          Reach out to STC IIT Roorkee at <a href="mailto:stc@iitr.ac.in">stc@iitr.ac.in</a> for
          event updates, collaboration queries, and participation details.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            marginTop: '16px',
            textDecoration: 'none',
            fontFamily: 'Kiona, sans-serif',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.45)',
            borderRadius: '999px',
            padding: '8px 14px',
          }}
        >
          Back To Home
        </Link>
      </section>
    </main>
  )
}

export default ContactPage
