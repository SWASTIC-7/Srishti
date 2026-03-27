import { useState, useRef, useEffect } from 'react'
import './CardCarousel.css'

function CardCarousel({ cards }) {
	const total = cards.length
	const cloned = [...cards, ...cards, ...cards]
	const CARD_WIDTH_PERCENT = 50

	const [offset, setOffset] = useState(total)
	const [transitioning, setTransitioning] = useState(true)
	const isAnimating = useRef(false)
	const dragStartX = useRef(0)
	const dragDelta = useRef(0)
	const [dragOffset, setDragOffset] = useState(0)
	const [dragging, setDragging] = useState(false)
	const trackRef = useRef(null)

	function wrap(i) {
		return ((i % total) + total) % total
	}

	function handleTransitionEnd() {
		isAnimating.current = false
		if (offset <= 0) {
			setTransitioning(false)
			setOffset(total)
		} else if (offset >= total * 2) {
			setTransitioning(false)
			setOffset(total)
		}
	}

	useEffect(() => {
		if (!transitioning) {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => setTransitioning(true))
			})
		}
	}, [transitioning])

	function slide(dir) {
		if (isAnimating.current) return
		isAnimating.current = true
		setTransitioning(true)
		setOffset(i => i + (dir === 'right' ? 1 : -1))
	}

	function onPointerDown(e) {
		if (isAnimating.current) return
		setDragging(true)
		dragStartX.current = e.clientX
		dragDelta.current = 0
		e.currentTarget.setPointerCapture(e.pointerId)
	}

	function onPointerMove(e) {
		if (!dragging) return
		const delta = e.clientX - dragStartX.current
		dragDelta.current = delta
		setDragOffset(delta)
	}

	function onPointerUp() {
		if (!dragging) return
		setDragging(false)
		setDragOffset(0)
		const threshold = 60
		if (dragDelta.current < -threshold) slide('right')
		else if (dragDelta.current > threshold) slide('left')
	}

	const translateX =
		-(offset * CARD_WIDTH_PERCENT) +
		(dragging ? (dragOffset / (trackRef.current?.offsetWidth || 1)) * 100 : 0)

	const activeDot = ((offset - total) % total + total) % total

	return (
		<div className="hc-root">
			<button className="hc-arrow" onClick={() => slide('left')} aria-label="Previous">
				&#8249;
			</button>

			<div
				className="hc-viewport"
				ref={trackRef}
				onPointerDown={onPointerDown}
				onPointerMove={onPointerMove}
				onPointerUp={onPointerUp}
				onPointerLeave={onPointerUp}
			>
				<div
					className="hc-track"
					style={{
						transform: `translateX(${translateX}%)`,
						transition:
							transitioning && !dragging
								? 'transform 0.52s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
								: 'none',
					}}
					onTransitionEnd={handleTransitionEnd}
				>
					{cloned.map((card, i) => {
						const realIndex = i % total
						return (
							<div key={i} className="hc-slide">
								<div className="hc-card-wrap">
									<div className="hc-card">
										<div className="hc-card-top">
											<span className="hc-category">{card.category}</span>
											<span className="hc-index">{String(realIndex + 1).padStart(2, '0')}</span>
										</div>

										<div className="hc-art">
											<img
												src="./Vector.svg"
												alt=""
												aria-hidden="true"
												className="hc-guy"
												draggable={false}
											/>
										</div>

										<div className="hc-card-bottom">
											<h3 className="hc-name">{card.name}</h3>
											<a
												href={card.pdf}
												target="_blank"
												rel="noreferrer"
												className="hc-btn"
												onClick={e => e.stopPropagation()}
											>
												View PDF &rsaquo;
											</a>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>

			<button className="hc-arrow" onClick={() => slide('right')} aria-label="Next">
				&#8250;
			</button>

			<div className="hc-dots">
				{cards.map((_, i) => (
					<button
						key={i}
						className={`hc-dot ${i === activeDot ? 'hc-dot-active' : ''}`}
						onClick={() => {
							if (isAnimating.current || i === activeDot) return
							const diff = i - activeDot
							if (diff === 0) return
							isAnimating.current = true
							setTransitioning(true)
							setOffset(o => o + diff)
						}}
						aria-label={`Card ${i + 1}`}
					/>
				))}
			</div>
		</div>
	)
}

export default CardCarousel