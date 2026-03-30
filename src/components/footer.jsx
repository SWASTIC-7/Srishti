import './footer.css'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const stcLogoMap = import.meta.glob('../assets/stc-logo.png', {
	eager: true,
	import: 'default',
})

function Footer() {
	const stcLogo = stcLogoMap['../assets/stc-logo.png'] ?? ''

	const handleScrollTo = (event, sectionId) => {
		event.preventDefault()
		const section = document.getElementById(sectionId)
		if (!section) return
		section.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<footer className="footer" id="contact-us">
			<div className="footer-inner">
				<div className="footer-col footer-col-main">
					{stcLogo ? <img src={stcLogo} alt="STC logo" className="footer-logo" /> : null}
					<p className="footer-about">
						THE STUDENT TECHNICAL COUNCIL IS THE APEX BODY OF TECHNICAL ACTIVITY AT IIT
						ROORKEE - FOSTERING INNOVATION, ENGINEERING EXCELLENCE, AND A VIBRANT TECH
						CULTURE ACROSS CAMPUS.
					</p>

					<h3 className="footer-heading">ADDRESS</h3>
					<p className="footer-address">IIT ROORKEE CAMPUS ROORKEE, UTTARAKHAND 247667, INDIA</p>
				</div>

				<div className="footer-col footer-col-explore">
					<h3 className="footer-col-title">EXPLORE</h3>
					<ul className="footer-links">
						<li><a href="#home" onClick={(event) => handleScrollTo(event, 'home')}>HOME</a></li>
						<li><a href="#tech-gc" onClick={(event) => handleScrollTo(event, 'tech-gc')}>EVENTS</a></li>
						<li><a href="#about-stc" onClick={(event) => handleScrollTo(event, 'about-stc')}>ABOUT US</a></li>
						<li><a href="#faqs" onClick={(event) => handleScrollTo(event, 'faqs')}>FAQS</a></li>
						<li>
							<Link
								to="/contact"
								onClick={() => {
									setTimeout(() => window.scrollTo(0, 0), 0)
								}}
							>
								CONTACT US
							</Link>
						</li>
					</ul>
				</div>

				<div className="footer-col footer-col-address">
					<h3 className="footer-col-title">CONTACTS</h3>
					<ul className="footer-contact">
						<li><a href="mailto:stc@iitr.ac.in">STC@IITR.AC.IN</a></li>
					</ul>
					<div className="footer-socials" aria-label="Social links">
						<a className="footer-social" href="https://www.instagram.com/stc.iitr/" aria-label="Instagram" >
							<FaInstagram />
						</a>
						<a className="footer-social" href="https://www.linkedin.com/in/avivishwa/" aria-label="LinkedIn" >
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer