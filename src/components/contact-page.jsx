import './contact-page.css'
import bg from '../assets/contact_background.png' 
import leftImg from '../assets/add1.png'
import rightImg from '../assets/add2.png'
import bottomImg from '../assets/add3.png'
import stars from '../assets/stars.png'

function ContactPage() {
  return (
    <main className="contact-page">


      {/* FULL WIDTH BOTTOM ARC */}
      <img src={bottomImg} alt="" className="contact-top-full" />

      {/* LEFT FLOAT */}
      <img src={leftImg} alt="" className="contact-bottom-left" />

      {/* RIGHT FLOAT */}
      <img src={rightImg} alt="" className="contact-bottom-right" />
      {/* BACKGROUND */}
      <img src={bg} alt="" className="contact-bg" />

      <div className="contact-title-wrapper">
        <img src={stars} alt="" className="contact-stars" />
        <div className="contact-title">
          CONTACT US
        </div>
      </div>

      {/* CENTER PERSON */}
      <div className="contact-card center">
        <h2>Aviral Vishwakarma</h2>
        <p>General Secretary Technical Affairs</p>
        <span>gensec.technical@iitr.ac.in</span>
        <span>+91 88821 38116</span>
      </div>

      {/* LEFT PERSON */}
      <div className="contact-card left">
        <h2>Rajarshi Verma</h2>
        <p>Deputy General Secretary</p>
        <p>Technical Affairs</p>
        <span>rajarshi_v@bt.iitr.ac.in</span>
        <span>+91 9519288965</span>
      </div>

      {/* RIGHT PERSON */}
      <div className="contact-card right">
        <h2>Kaushlandra Singh</h2>
        <p>Convener, Srishti</p>
        <span>outreach.stc@iitr.ac.in</span>
        <span>+91 87647 10030</span>
      </div>

    </main>
  )
}

export default ContactPage