import { useState } from 'react'
import './faqs.css'

const faqItems = [
	{
		question: 'Who can participate in Srishti?',
		answer:
			'Srishti is open to students, clubs, and teams presenting technical projects. Participation details and registration guidelines are shared through official IITR STC channels.',
	},
	{
		question: 'What kind of projects are showcased?',
		answer:
			'Projects span software, hardware, robotics, AI, electronics, product design, and interdisciplinary innovations built by student teams and technical clubs.',
	},
	{
		question: 'How are projects evaluated during the event?',
		answer:
			'Projects are assessed on innovation, execution quality, technical depth, real-world impact, and clarity of presentation by judges from academia and industry.',
	},
	{
		question: 'Where will updates and schedules be published?',
		answer:
			'All timeline updates, event announcements, and final schedules will be posted on official Srishti and STC communication channels before the event.',
	},
]

function Faqs() {
	const [openIndex, setOpenIndex] = useState(null)

	const toggleItem = (index) => {
		setOpenIndex((current) => (current === index ? null : index))
	}

	return (
		<section className="faqs" id="faqs">
			<div className="faqs-header">
				<h2 className="faqs-title">FAQs</h2>
				<p className="faqs-subtitle">
					YOUR BURNING QUESTIONS, ANSWERED SWIFTLY AND SUCCINCTLY.
				</p>
			</div>

			<div className="faqs-list" role="list">
				{faqItems.map((item, index) => {
					const isOpen = openIndex === index

					return (
						<article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question} role="listitem">
							<button
								type="button"
								className="faq-trigger"
								onClick={() => toggleItem(index)}
								aria-expanded={isOpen}
								aria-controls={`faq-panel-${index}`}
							>
								<span className="faq-question">{item.question}</span>
								<span className="faq-plus" aria-hidden="true">
									+
								</span>
							</button>

							<div
								id={`faq-panel-${index}`}
								className="faq-panel"
								aria-hidden={!isOpen}
							>
								<p className="faq-answer">{item.answer}</p>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Faqs
