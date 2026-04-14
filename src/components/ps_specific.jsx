import Navbar from './navbar'
import Footer from './footer'
import SplashCursor from './splash_cursor'
import './ps_specific.css'
import guyImg from '../assets/guy.png'

// ─── Glob imports (same pattern as ProblemStatement.jsx) ───────────────────
const gifImageMap = import.meta.glob('../assets/gif*.gif', {
	eager: true,
	import: 'default',
})

function getGif(index) {
	return gifImageMap[`../assets/gif${index + 1}.gif`] ?? ''
}

// ─── Static tier data ──────────────────────────────────────────────────────
// Replace placeholder strings with real content when finalized
const tierData = [
	{
		index: 0,
		title: 'HIGH PREP',
		registerUrl: 'https://forms.gle/6XupBmaTK3eJAX8C6',
		overview:
			'High Prep PS events are the pinnacle of Tech GC — demanding months of preparation, deep domain expertise, and seamless cross-disciplinary collaboration. Teams must build complete end-to-end systems judged on innovation, technical depth, and real-world impact.',
		problems: [
			{
				id: 'hp-1',
				name: 'Moulded Agents',
				category: 'AI/ML',
				description:'Design an AI-powered multi-agent system that automates end-to-end conference planning, from sponsor and speaker discovery to venue selection, pricing, and promotion.',
				pdfUrl: '/highprepPS1.pdf',
			},
			
			{
				id: 'hp-2',
				name: 'QUANTIFY',
				category: 'QUANT',
				description:
					'Build a robust end-to-end quantitative trading system that generates risk-adjusted returns under real-world market constraints.',
				pdfUrl: '/highprepPS2.pdf',
			},
			
			{
				id: 'hp-3',
				name: 'UNCLOTHE MY LOCATION',
				category: 'AI/ML',
				description:
					'Design an AI-driven system to detect GNSS spoofing by analyzing signal patterns, temporal inconsistencies, and anomalies to ensure reliable navigation and timing systems',
				pdfUrl: '/highprepPS3.pdf',
			},
			/*
			{
				id: 'hp-4',
				name: 'PROBLEM NAME',
				category: 'Category',
				description:
					'High Prep PS events are the pinnacle of Tech GC — demanding months of preparation, deep domain expertise, and seamless cross-disciplinary collaboration.',
				pdfUrl: '#',
			},*/
		],
		timeline: [
			{ date: 'Apr 02', label: 'PS release' },
			{ date: 'Apr 03', label: 'Registeration Begins' },
			{ date: 'April 05', label: 'Registeration Closes' },
			{ date: 'April 15', label: 'Submission Starts' },
			{ date: 'April 17', label: 'Submission Ends' },
			{ date: 'April 19', label: 'Valedictory Ceremony' },

		],
		prizes: [
			{ rank: '1st', points: 600 },
			{ rank: '2nd', points: 400 },
			{ rank: '3rd', points: 250 },
		],
	},
	{
		index: 1,
		title: 'MID PREP',
		registerUrl: 'https://docs.google.com/forms/d/1e_X8O0U-NrcHTnZp5Nlbow6Zmy1SGgS95u70DSaSlII/edit',
		overview:
			'Mid Prep events challenge teams with moderately complex problem statements released in mid-April. A 2-week window demands focused effort, strong planning, and crisp technical execution across domains.',
		problems: [
			{
				id: 'mp-1',
				name: 'MINDCASE',
				category: 'VIBECODING & DATA',
				description:
					'Scrape any public web data and build a useful, creative application with it.',
				pdfUrl: '/midprepPS1.pdf',
			},
			{
				id: 'mp-2',
				name: 'PancakeSwap',
				category: 'BLOCKCHAIN',
				description:
					'Build a multi-agent AI system that autonomously trades on PancakeSwap by analyzing markets, generating strategies, executing trades, and managing risk.',
					pdfUrl: '/midprepPS2.pdf',
			},
			{
				id: 'mp-3',
				name: 'MATIKS',
				category: 'CONSULTING',
				description:
					'Building a capital-efficient growth engine to acquire and sustain 100,000 US users in a saturated market.',
					pdfUrl: '/midprepPS3.pdf',
			},
			{
				id: 'mp-4',
				name: 'NoQS DIGITAL',
				category: 'Data Analysis',
				description:
					'Develop an end-to-end data-driven platform that transforms raw campus data into insights, predictions, and actionable recommendations.',
					pdfUrl: '/midprepPS4.pdf',
			},
		],
		timeline: [
			{ date: 'Apr 09', label: 'PS release' },
			{ date: 'Apr 10', label: 'Registeration Begins' },
			{ date: 'Apr 12', label: 'Registeration Ends' },
			{ date: 'Apr 15', label: 'Submission Begins' },
			{ date: 'April 17', label: 'Submission Ends' },
			{ date: 'April 19', label: 'Valedictory Ceremony' },
		],
		prizes: [
			{ rank: '1st', points: 500 },
			{ rank: '2nd', points: 300 },
			{ rank: '3rd', points: 150 },
		],
	},
	{
		index: 2,
		title: 'LOW PREP',
		registerUrl: '#',
		overview:
			'Low Prep events are designed for teams who thrive under tighter timelines. Problem statements drop in early April with a 2.5–3 week window, rewarding agility, creativity, and solid fundamentals.',
		problems: [
			{
				id: 'lp-1',
				name: 'COOX',
				category: 'TECHNICAL PRODUCT MANAGEMENT',
				description:
					'Analyze real booking data to identify non-serviceable hotspot areas, map them using geo-clustering, extract affected pin codes, and propose a geoblocking strategy to reduce cancellations and revenue loss.',
					pdfUrl: '/lowprepPS1',
			},
			{
				id: 'lp-2',
				name: 'DS',
				category: 'PRODUCT DESIGN',
				description:
					'Design a thoughtful digital solution for hostel students that subtly supports mental well-being, reduces isolation, and encourages healthier routines without creating screen dependency or replacing real human connection.',
					pdfUrl: '/lowprepPS2',
			},
			{
				id: 'lp-3',
				name: 'DIVAINE',
				category: 'STRATEGY AND GROWTH',
				description:
					'Build a market-entry strategy for divAIne’s human-aware AI layer by identifying the most valuable sectors, high-impact use cases, and best commercialization path (B2B/B2B2C/B2C) for scalable growth and measurable business value',
					pdfUrl: '/lowprepPS3',
			},
		],
		timeline: [
			{ date: 'Apr 01', label: 'Register' },
			{ date: 'Apr 05', label: 'Register' },
			{ date: 'Apr 19', label: 'Register' },
			{ date: 'Apr 26', label: 'Register' },
			{ date: 'Apr 30', label: 'Register' },
		],
		prizes: [
			{ rank: '1st', points: 400 },
			{ rank: '2nd', points: 250 },
			{ rank: '3rd', points: 100 },
		],
	},
	{
		index: 3,
		title: 'NO-PREP',
		registerUrl: '#',
		overview:
			'No-Prep is the ultimate test of raw ability — problem statements drop near the end of the competition with only a 3–5 hour window. No prior research, no planning, just skill, speed, and instinct.',
		problems: [
			{
				id: 'np-1',
				name: 'PROBLEM NAME',
				category: 'Category',
				description:
					'No-Prep PS events drop with only hours on the clock. Teams must rely entirely on raw skill, fast thinking, and instinctive problem-solving.',
				pdfUrl: '#',
			},
			{
				id: 'np-2',
				name: 'PROBLEM NAME',
				category: 'Category',
				description:
					'No-Prep PS events drop with only hours on the clock. Teams must rely entirely on raw skill, fast thinking, and instinctive problem-solving.',
				pdfUrl: '#',
			},
		],
		timeline: [
			{ date: 'May 08', label: 'Registeration Open' },
			{ date: 'May 10', label: 'Registeration Open' },
			{ date: 'May 10', label: 'Register' },
			{ date: 'May 11', label: 'Register' },
		],
		prizes: [
			{ rank: '1st', points: 300 },
			{ rank: '2nd', points: 200 },
			{ rank: '3rd', points: 100 },
		],
	},
]

// ─── Sub-components ────────────────────────────────────────────────────────

function ProblemCard({ problem, registerUrl }) {
	return (
		<div className="pss-card-wrapper">
			{/* Guy image sits outside/left of the card */}
			<img src={guyImg} alt="Tech GC participant" className="pss-card-guy" />

			<div className="pss-card">
				<div className="pss-card-body">
					<div className="pss-card-meta">
						<span className="pss-card-category">{problem.category}</span>
					</div>
					<h3 className="pss-card-name">{problem.name}</h3>
					<p className="pss-card-desc">{problem.description}</p>
					<div className="pss-card-actions">
						<a href={problem.pdfUrl} className="pss-btn pss-btn-outline" target="_blank" rel="noreferrer">
							View PDF ↗
						</a>
						<a href={registerUrl} className="pss-btn pss-btn-outline" target="_blank" rel="noreferrer">
							Register
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

function TimelineSection({ items }) {
	return (
		<div className="pss-timeline">
			<h2 className="pss-section-title">TIMELINE</h2>
			<ul className="pss-timeline-list">
				{items.map((item, i) => (
					<li className="pss-timeline-item" key={i}>
						<div className="pss-timeline-dot-col">
							<span className="pss-timeline-dot" />
							<span className="pss-timeline-line" />
						</div>
						<div className="pss-timeline-text">
							<span className="pss-timeline-date">{item.date}</span>
							<span className="pss-timeline-label">{item.label}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

function PrizesSection({ prizes }) {
	const ranks = ['1ST', '2ND', '3RD']
	return (
		<div className="pss-prizes">
			<h2 className="pss-section-title">PRIZES</h2>
			<ul className="pss-prizes-list">
				{prizes.map((prize, i) => (
					<li className="pss-prize-item" key={i}>
						<span className="pss-prize-rank">{ranks[i]}</span>
						<span className="pss-prize-points">{prize.points} POINTS</span>
					</li>
				))}
			</ul>
		</div>
	)
}

// ─── Main Component ────────────────────────────────────────────────────────
// Receives `tierIndex` as a prop (0–3) so the parent/router can decide which
// tier to show. Example usage:
//   <ProblemStatementSpecific tierIndex={0} />

function ProblemStatementSpecific({ tierIndex = 0 }) {
	const tier = tierData[tierIndex]
	const gif = getGif(tier.index)

	return (
		<>
			<Navbar />

			<SplashCursor />

			<main className="pss-page">

				{/* ── Hero banner ── */}
				<section className="pss-hero">
					{gif ? (
						<img src={gif} alt={`${tier.title} cover`} className="pss-hero-gif" />
					) : (
						<div className="pss-hero-placeholder" />
					)}
					<div className="pss-hero-overlay" />
					<div className="pss-hero-content">
						<h1 className="pss-hero-title">{tier.title}</h1>
					</div>
				</section>

				{/* ── Overview ── */}
				<section className="pss-overview">
					<h2 className="pss-section-title">OVERVIEW</h2>
					<p className="pss-overview-text">{tier.overview}</p>
				</section>

				{/* ── Problem cards (vertical list) ── */}
				<section className="pss-problems">
					<h2 className="pss-section-title">PROBLEM STATEMENTS</h2>
					<div className="pss-cards-list">
						{tier.problems.map((problem) => (
							<ProblemCard key={problem.id} problem={problem} registerUrl={tier.registerUrl} />
						))}
					</div>
				</section>

				{/* ── Timeline + Prizes side by side ── */}
				<section className="pss-bottom-grid">
					<TimelineSection items={tier.timeline} />
					<PrizesSection prizes={tier.prizes} />
				</section>

			</main>

			<Footer />
		</>
	)
}

export default ProblemStatementSpecific