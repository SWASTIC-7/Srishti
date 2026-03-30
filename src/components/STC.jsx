import { useState, useEffect } from 'react'
import './STC.css'

const stcImageMap = import.meta.glob('../assets/stc*.png', {
	eager: true,
	import: 'default',
})

const flareImageMap = import.meta.glob('../assets/flare.png', {
	eager: true,
	import: 'default',
})

const cards = [
	{ key: '01', alt: 'Build' },
	{ key: '02', alt: 'Compete' },
	{ key: '03', alt: 'Collaborate' },
]

function getCardImage(index) {
	return stcImageMap[`../assets/stc${index + 1}.png`] ?? ''
}

function STC() {
	const flareImage = flareImageMap['../assets/flare.png'] ?? ''
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 768)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<section className="stc" id="about-stc">
			{!isMobile && flareImage ? (
				<>
					<img src={flareImage} alt="" aria-hidden="true" className="stc-flare stc-flare-left" />
					<img src={flareImage} alt="" aria-hidden="true" className="stc-flare stc-flare-right" />
				</>
			) : null}
			<div className="stc-background" aria-hidden="true">
				<div className="stc-header">
					<h2 className="stc-title">ABOUT STC</h2>
					<p className="stc-description">
						The Student Technical Council (STC) at IIT Roorkee oversees all technical clubs,
						fostering innovation through events like Srishti and the General Championship -
						Tech. It connects students with industry, organizes workshops, and promotes
						hands-on learning, driving the institute&apos;s technical ecosystem forward.
					</p>
				</div>

				<div className="stc-grid">
					{cards.map((card, index) => {
						const imageSrc = getCardImage(index)
						return (
							<article key={card.key} className="stc-card">
								{imageSrc ? (
									<img src={imageSrc} alt={card.alt} className="stc-card-image" />
								) : (
									<div className="stc-card-image stc-card-image-placeholder" />
								)}
							</article>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default STC