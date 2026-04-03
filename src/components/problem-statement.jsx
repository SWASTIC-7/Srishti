import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import SplashCursor from '../components/splash_cursor'
import CardCarousel from './CardCarousel'
/*...  */
import './ProblemStatement.css'

const gifImageMap = import.meta.glob('../assets/gif*.gif', {
	eager: true,
	import: 'default',
})

const prepTiers = [
	{
		title: 'HIGH PREP',
		edition: 'Edition 1',
		info: 'The problem statement drops in early April, with a 2-5 week window for complex problem solving.',
		cards: [
			{ name: 'Moulded Agents', category: 'AI/ML', pdf: '/highprepPS1.pdf', psNumber : '1' },
			{ name: 'Quantity', category: 'Finance', pdf: '/highprepPS2.pdf',psNumber:'2' },
			{ name: 'Unclothe My Location', category: 'AI/ML', pdf: '/highprepPS3.pdf' ,psNumber:'3' },
		],
	},
	{
		title: 'MID PREP',
		edition: 'Edition 2',
		info: 'The problem statement drops in mid-April, with a 2-week window for medium-level challenges.',
		cards: [
			{ name: 'PROBLEM NAME', category: 'Category', pdf: '#' },
			{ name: 'PROBLEM NAME', category: 'Category', pdf: '#' },
		],
	},
	{
		title: 'LOW PREP',
		edition: 'Edition 3',
		info: 'The problem statement drops in early April, with a 2.5-3 week window for complex problem solving.',
		cards: [
			{ name: 'PROBLEM NAME', category: 'Category', pdf: '#' },
			{ name: 'PROBLEM NAME', category: 'Category', pdf: '#' },
			{ name: 'PROBLEM NAME', category: 'Category', pdf: '#' },
			{ name: 'PROBLEM NAME', category: 'Category', pdf: '#' },
		],
	},
	{
		title: 'NO-PREP',
		edition: 'Edition 4',
		info: 'The problem statement drops near the end of competition, with a 3-5 hour window for rapid problem solving.',
		cards: [
			{ name: 'PROBLEM NAME', category: 'Category', pdf: '#' },
			{ name: 'PROBLEM NAME', category: 'Category', pdf: '#' },
		],
	},
]

function getGif(index) {
	return gifImageMap[`../assets/gif${index + 1}.gif`] ?? ''
}

function ProblemStatement() {
	const navigate = useNavigate()

	return (
		<>
			<Navbar />

			<SplashCursor />

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
									<span
										className="problem-tier-edition"
										style={{ cursor: 'pointer' }}
										onClick={() => navigate(`/problems/${tierIndex}`)}
									>
										Explore &gt;
									</span>
								</header>
							</div>

							<p className="problem-tier-info">{tier.info}</p>
							

							<div className="problem-tier-cards-strip">
								<CardCarousel cards={tier.cards} />
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