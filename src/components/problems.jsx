import './problems.css'

const guyImageMap = import.meta.glob('../assets/guy.png', {
	eager: true,
	import: 'default',
})

const gifImageMap = import.meta.glob('../assets/gif*.gif', {
	eager: true,
	import: 'default',
})

const problemCards = [1, 2, 3, 4].map((index) => ({
	id: index,
	title: 'PROBLEM NAME',
	category: 'Category',
	description:
		'High Prep PS events are the pinnacle of Tech GC - demanding months of preparation, deep domain expertise, and seamless collaboration.',
	gif: gifImageMap[`../assets/gif${index}.gif`] ?? '',
}))

const timelineItems = [
	'REGISTRATION OPENS',
	'REGISTRATION OPENS',
	'REGISTRATION OPENS',
	'REGISTRATION OPENS',
]

const prizes = [
	{ place: '1st', points: '600 POINTS' },
	{ place: '2nd', points: '400 POINTS' },
	{ place: '3rd', points: '250 POINTS' },
]

function Problems() {
	const guyImage = guyImageMap['../assets/guy.png'] ?? ''
	const heroGif = gifImageMap['../assets/gif1.gif'] ?? ''

	return (
		<section className="problems-showcase" id="problems-showcase">
			<header className="problems-header">
				<h2 className="problems-title">PROBLEM STATEMENTS</h2>
			</header>

			<article className="problems-track">
				<div className="problems-track-hero">
					{heroGif ? (
						<img src={heroGif} alt="High prep visual" className="problems-track-hero-img" />
					) : (
						<div className="problems-track-hero-img problems-track-hero-placeholder" />
					)}
				</div>

				<h3 className="problems-track-title">HIGH PREP</h3>
				<p className="problems-track-kicker">OVERVIEW</p>
				<p className="problems-track-copy">
					High Prep PS events are the pinnacle of Tech GC - demanding months of
					preparation, deep domain expertise, and seamless cross-disciplinary
					collaboration. Teams must build complete end-to-end systems judged on
					innovation, technical depth, and real-world impact.
				</p>

				<p className="problems-list-title">PROBLEMS STATEMENTS</p>

				<div className="problems-cards-list">
					{problemCards.map((card) => (
						<article key={card.id} className="problems-card">
							<div className="problems-card-art-wrap">
								{guyImage ? (
									<img src={guyImage} alt="" aria-hidden="true" className="problems-card-art" />
								) : (
									<div className="problems-card-art problems-card-art-placeholder" />
								)}
							</div>

							<div className="problems-card-main">
								<div className="problems-card-head">
									<h4 className="problems-card-title">{card.title}</h4>
									<span className="problems-card-category">{card.category}</span>
								</div>

								<p className="problems-card-desc">{card.description}</p>

								<div className="problems-card-actions">
									<button type="button" className="problems-btn problems-btn-light">
										View PDF
									</button>
									<button type="button" className="problems-btn problems-btn-dark">
										Register
									</button>
								</div>
							</div>
						</article>
					))}
				</div>

				<div className="problems-meta-grid">
					<section className="problems-timeline">
						<h4 className="problems-meta-title">TIMELINE</h4>
						<ul className="problems-timeline-list">
							{timelineItems.map((item, index) => (
								<li key={`${item}-${index}`} className="problems-timeline-item">
									<span className="problems-timeline-dot" aria-hidden="true" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</section>

					<section className="problems-prizes">
						<h4 className="problems-meta-title">PRIZES</h4>
						<div className="problems-prize-list">
							{prizes.map((prize) => (
								<article className="problems-prize-item" key={prize.place}>
									<span className="problems-prize-rank">{prize.place}</span>
									<span className="problems-prize-points">{prize.points}</span>
								</article>
							))}
						</div>
					</section>
				</div>
			</article>
		</section>
	)
}

export default Problems
