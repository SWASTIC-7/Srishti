import { useMemo, useState } from 'react'
import './leaderbord.css'
import SplashCursor from '../components/splash_cursor'

const leaderboardByTrack = {
	Overall: [
		{ score: 2555, club: 'VIVEKANAND BHAWAN', rank: 1 },
		{ score: 2485, club: 'JAWAHAR BHAWAN', rank: 2 },
		{ score: 1880, club: 'KASTURBA BHAWAN', rank: 3 },
		{ score: 1360, club: 'HIMALAYA BHAWAN', rank: 4 },
		{ score: 1200, club: 'RADHAKRISHNAN BHAWAN', rank: 5 },
		{ score: 875,  club: 'RAVINDRA BHAWAN', rank: 6 },
		{ score: 760, club: 'VIGYAN KUNJ BHAWAN', rank: 7 },
		{ score: 600, club: 'RAJENDRA BHAWAN', rank: 8 },
		{ score: 275, club: 'GOVING BHAWAN', rank: 9 },
		{ score: 225, club: 'RAJEEV BHAWAN', rank: 10 },
		{ score: 75, club: 'CAUTLEY BHAWAN', rank: 11 },
		{ score: 60, club: 'SAROJINI BHAWAN', rank: 12 },
	],
	HighPrep: [],
	MidPrep: [],
	LowPrep: [],
	NoPrep: [],
}

function rankLabel(rank) {
	if (rank === 1) return '1st'
	if (rank === 2) return '2nd'
	if (rank === 3) return '3rd'
	return `${rank}th`
}

function Leaderbord() {
	const [track, setTrack] = useState('Overall')

	const rows = useMemo(() => leaderboardByTrack[track] ?? [], [track])
	const hasData = rows.length > 0

	return (
		<>
			<SplashCursor />
			<section className="leaderboard" id="leaderboard">
				<div className="leaderboard-inner">
					<h1 className="leaderboard-title">LEADERBOARD</h1>

					<div className="leaderboard-filter-wrap">
						<select
							className="leaderboard-filter"
							value={track}
							onChange={(event) => setTrack(event.target.value)}
							aria-label="Leaderboard category"
						>
							{Object.keys(leaderboardByTrack).map((key) => (
								<option value={key} key={key}>{key}</option>
							))}
						</select>
					</div>

					{hasData ? (
						<div className="leaderboard-list" role="list" aria-label="Leaderboard results">
							{rows.map((row, index) => {
								const label = rankLabel(row.rank)
								const topThree = row.rank <= 3

								return (
									<article className="leaderboard-row" role="listitem" key={`${row.club}-${index}`}>
										<div className="leaderboard-score-group">
											<span className="leaderboard-score">{row.score}</span>
											<span className="leaderboard-score-unit">POINTS</span>
										</div>

										<p className="leaderboard-club">{row.club}</p>

										<span
											className={`leaderboard-rank ${topThree ? `rank-top rank-${row.rank}` : ''}`}
											aria-label={`Rank ${label}`}
										>
											{label}
										</span>
									</article>
								)
							})}
						</div>
					) :(
						<div className="leaderboard-empty">RESULT TO BE ANNOUNCED !!</div>
					)}
				</div>
			</section>
		</>
	)
}

export default Leaderbord