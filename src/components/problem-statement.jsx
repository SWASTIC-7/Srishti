import Navbar from './navbar'
import Footer from './footer'
import './ProblemStatement.css'

const guyImageMap = import.meta.glob('../assets/guy.png', {
	eager: true,
	import: 'default',
})

const gifImageMap = import.meta.glob('../assets/gif*.gif', {
	eager: true,
	import: 'default',
})

const prepTiers = [
	{
		title: 'HIGH PREP',
		edition: 'Edition 1',
		info: 'The problem statement drops in early April, with a 2-5 week window for complex problem solving.',
	},
	{
		title: 'MID PREP',
		edition: 'Edition 2',
		info: 'The problem statement drops in mid-April, with a 2-week window for medium-level challenges.',
	},
	{
		title: 'LOW PREP',
		edition: 'Edition 3',
		info: 'The problem statement drops in early April, with a 2.5-3 week window for complex problem solving.',
	},
	{
		title: 'NO-PREP',
		edition: 'Edition 4',
		info: 'The problem statement drops near the end of competition, with a 3-5 hour window for rapid problem solving.',
	},
]

function getGif(index) {
	return gifImageMap[`../assets/gif${index + 1}.gif`] ?? ''
}

function ProblemStatement() {
	const guyImage = guyImageMap['./Vector.svg'] ?? ''

	return (
		<>
			<Navbar />

			<main className="problem-page" id="problem-statements">
				<section className="problem-hero">
					<h1 className="problem-title">PROBLEM STATEMENTS</h1>
				</section>

				<div className="problem-tier-list">
					{prepTiers.map((tier, tierIndex) => (
						<article className="problem-tier" key={tier.title}>
							<div className="problem-tier-top">
								{(() => {
									const tierGif = getGif(tierIndex)
									return tierGif ? (
										<img
											src={tierGif}
											alt={`${tier.title} cover`}
											className="problem-tier-cover"
										/>
									) : (
										<div className="problem-tier-cover problem-tier-cover-placeholder" />
									)
								})()}

								<header className="problem-tier-header">
									<h2 className="problem-tier-title">{tier.title}</h2>
									<span className="problem-tier-edition">Explore &gt;</span>
								</header>
							</div>

							<p className="problem-tier-info">{tier.info}</p>

							<div className="problem-tier-cards-strip">
								<button type="button" className="problem-nav-arrow" aria-label="Previous cards">
									&lt;
								</button>

								<div className="problem-tier-cards">
									{[0, 1].map((offset) => {
										return (
											<article className="problem-card" key={`${tier.title}-${offset}`}>
												<div className="problem-card-top">
													<span className="problem-card-track">Category</span>
												</div>

												<div className="problem-card-visual">
													{/* {guyImage ? ( */}
														<img
															src="./Vector.svg"
															alt=""
															aria-hidden="true"
															className="problem-card-guy"
														/>
													{/* ) : null} */}

													<div className="problem-card-actions">
                                                    <h3 className="problem-card-name">PROBLEM NAME</h3>
													<button type="button" className="problem-btn problem-btn-fill">
														View PDF &gt;
													</button>
												    </div>  
												</div>

												
											</article>
										)
									})}
								</div>

								<button type="button" className="problem-nav-arrow" aria-label="Next cards">
									&gt;
								</button>
							</div>
						</article>
					))}
				</div>
			</main>

			<Footer />
		</>
	)
}

export default ProblemStatement
