import Navbar from './navbar'
import Footer from './footer'
import SplashCursor from './splash_cursor'
import './team.css'

// ─── Photo imports ─────────────────────────────────────────────────────────
import swasticImg from '../assets/swastic.jpeg'
import vidhanImg from '../assets/vidhan.jpeg'
import arnavImg from '../assets/arnav.jpeg'
import deepakImg from '../assets/deepak.jpeg'
import divyanshuImg from '../assets/divyanshu.jpeg'
import shivnaImg from '../assets/shivna.jpeg'

// ─── Team data ─────────────────────────────────────────────────────────────
const teamMembers = [
	{
		id: 'tm-1',
		name: 'Shivna',
		phone: '+91 89796 11347',
		photo: shivnaImg,
	},
	{
		id: 'tm-2',
		name: 'Vidhan Agarwal',
		phone: '+91 82792 26387',
		photo: vidhanImg,
	},
	{
		id: 'tm-3',
		name: 'Arnav Gupta',
		phone: '+91 88105 02157',
		photo: arnavImg,
	},
	{
		id: 'tm-4',
		name: 'Deepak Bhagat',
		phone: '+91 78782 47894',
		photo: deepakImg,
	},
	{
		id: 'tm-5',
		name: 'Divyanshu Barot',
		phone: '+91 83200 23086',
		photo: divyanshuImg,
	},
	{
		id: 'tm-6',
		name: 'Swastic Keshari',
		phone: '+91 9125525580',
		photo: swasticImg,
	},
]

// ─── Single card ───────────────────────────────────────────────────────────
function TeamCard({ member }) {
	return (
		<div className="team-card">
			<img
				src={member.photo}
				alt={member.name}
				className="team-card-photo"
			/>

			<div className="team-card-overlay" />

			<div className="team-card-info">
				<p className="team-card-name">{member.name}</p>
				<p className="team-card-phone">{member.phone}</p>
			</div>
		</div>
	)
}

// ─── Main Component ────────────────────────────────────────────────────────
function Team() {
	return (
		<>
			<Navbar />
			<SplashCursor />

			<main className="team-page">
				<div className="team-heading-wrap">
				<h1 className="team-heading">
					THE <span className="team-heading-accent">TEAM</span>
				</h1>
			</div>

				<div className="team-grid">
					{teamMembers.map((member) => (
						<TeamCard key={member.id} member={member} />
					))}
				</div>
			</main>

			<Footer />
		</>
	)
}

export default Team