import Navbar from './navbar'
import Footer from './footer'
import SplashCursor from './splash_cursor'
import './team.css'

// ─── Photo imports ─────────────────────────────────────────────────────────
import swasticImg from '../assets/swastic.jpg'
import vidhanImg from '../assets/vidhan.jpg'
import arnavImg from '../assets/arnav.jpg'
import deepakImg from '../assets/deepak.jpg'
import divyanshuImg from '../assets/divyanshu.jpg'
import shivnaImg from '../assets/shivna.jpg'
import aniketImg from '../assets/aniket.jpg';
import anshImg from '../assets/ansh.jpg';
import aviralImg from '../assets/aviral.jpg';
import rajarshiImg from '../assets/rajarshi.jpg';
import kaushalendraImg from '../assets/kaushalendra.jpg';
import atirishiImg from '../assets/atirishi.jpg';
import gauravImg from '../assets/atirishi.jpg';


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
		name: 'Deepak Meemroth',
		phone: '+91 78782 47894',
		photo: deepakImg,
	},
	{
		id: 'tm-5',
		name: 'Devanshu',
		phone: '+91 83200 23086',
		photo: divyanshuImg,
	},
	{
		id: 'tm-6',
		name: 'Swastic Keshari',
		phone: '+91 9125525580',
		photo: swasticImg,
	},
	{
		id: 'tm-7',
		name:'Aniket',
		phone: '+91 93480 69586',
		photo: aniketImg,
	},

	/*{
		id: 'tm-8',
		name:'Ansh Bhardwaj',
		phone: '+91 82877 67318',
		photo: anshImg,
	},*/
	{
		id: 'tm-9',
		name:'Aviral Vishwakarma',
		phone:' +91 88821 38116',
		photo: aviralImg,
	},

	{
		id: 'tm-10',
		name: 'Rajarshi Verma',
		phone: '+91 95192 88965',
		photo: rajarshiImg,
	},
	{
		id: 'tm-11',
		name: ' Kaushalendra Singh',
		phone: '+91 87647 10030',
		photo: kaushalendraImg,
	},
	{
		id: 'tm-12',
		name: 'Atirishi Jha',
		phone: '+91 89610 84770',
		photo: atirishiImg,
	},
	{
		id: 'tm-13',
		name: 'Gaurav Chaudhari',
		phone: '+91 84214 33458',
		photo: gauravImg,
	}
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