import './about.css'

const cards = [
	{
		src: new URL('../assets/card1.png', import.meta.url).href,
		alt: 'Footfall statistics card',
	},
	{
		src: new URL('../assets/card2.png', import.meta.url).href,
		alt: 'Total clubs statistics card',
	},
	{
		src: new URL('../assets/card3.png', import.meta.url).href,
		alt: 'Projects and domains statistics card',
	},
]

export default function About() {
	return (
		<section className="about" id="about">
			<div className="about-inner">  
                <div className='butterfly-wrapper'>
                <img src = "./butterfly.png" alt="" aria-hidden="true" className="butterfly-left" />
                <div>
				<p className="about-kicker">WHAT IS</p>
				{/* <h2 className="about-title">Srishti</h2> */}
                <img src="/logo.svg" alt="Srishti Logo" className="about-logo" /></div>
                <img src = "./butterfly.png" alt="" aria-hidden="true" className="butterfly-right" />
                </div> 
				<p className="about-copy">
					SRISHTI 2026, ORGANIZED BY STC IIT ROORKEE, IS A PREMIER TECH EXHIBITION SHOWCASING
					INNOVATIVE PROJECTS FROM TECHNICAL CLUBS AND INDIVIDUALS. ALONG WITH WORKSHOPS AND
					INDUSTRY NETWORKING, IT OFFERS COMPANIES A PLATFORM TO SET UP STALLS, SHOWCASE PRODUCTS,
					AND ENGAGE DIRECTLY WITH STUDENTS AND FACULTY. AS OUR LAST YEAR FOOTFALL 12000+ AND TOTAL
					27+ CLUBS RUN BY STUDENTS ITSELF AND 60+ TECH PROJECTS WITH IN 25+ DOMAINS.
				</p>

				<div className="about-cards" aria-label="Srishti stats cards">
					{cards.map((card) => (
						<article className="about-card" key={card.src}>
							<img src={card.src} alt={card.alt} loading="lazy" />
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
