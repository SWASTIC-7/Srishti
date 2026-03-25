import './techGC.css'

const prepImageMap = import.meta.glob('../assets/prep*.png', {
	eager: true,
	import: 'default',
})

const fallbackCardImageMap = import.meta.glob('../assets/card*.png', {
	eager: true,
	import: 'default',
})

const cards = [
	{
		number: '01',
		title: 'HIGH PREP',
		description:
			'The problem statement drops in early April, with a 2-5 week window for complex problem solving.',
	},
	{
		number: '02',
		title: 'MID PREP',
		description:
			'The problem statement drops in mid-April, with a 2-week window for medium-level challenges.',
	},
	{
		number: '03',
		title: 'LOW PREP',
		description:
			'The problem statement drops near the end of competition, with 1-week for short-term problem statements.',
	},
	{
		number: '04',
		title: 'NO-PREP',
		description:
			'The problem statement drops in early April, with a 4-5hr window for complex problem solving.',
	},
]

function getCardImage(index) {
	const prepImage = prepImageMap[`../assets/prep${index + 1}.png`]
	if (prepImage) return prepImage

	const fallbackIndex = Math.min(index + 1, 3)
	return fallbackCardImageMap[`../assets/card${fallbackIndex}.png`] ?? ''
}

function TechGC() {
	return (
		<section className="techgc" id="tech-gc">
			<div className="techgc-header">
				<h2 className="techgc-title">TECH-GC</h2>
				<p className="techgc-tagline">READY TO SHAPE SOMETHING EXTRAORDINARY?</p>
				<p className="techgc-description">
					GC-TECH IS IIT ROORKEE&apos;S FLAGSHIP COMPETITION WHERE STUDENTS SOLVE
					REAL-WORLD, INDUSTRY-RELEVANT PROBLEMS, SHOWCASING INNOVATION AND
					TEAMWORK. FINAL PRESENTATIONS: APRIL 17-19.
				</p>
			</div>

			<div className="techgc-grid">
				{cards.map((card, index) => {
					const imageSrc = getCardImage(index)

					return (
						<article className="techgc-card" key={card.number}>
							<div className="techgc-card-image-wrap">
								{imageSrc ? (
									<img src={imageSrc} alt={card.title} className="techgc-card-image" />
								) : (
									<div className="techgc-card-image techgc-card-image-placeholder" />
								)}
							</div>

							<div className="techgc-card-content">
								<p className="techgc-card-number">{card.number}</p>
								<h3 className="techgc-card-title">{card.title}</h3>
								<p className="techgc-card-text">{card.description}</p>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default TechGC
