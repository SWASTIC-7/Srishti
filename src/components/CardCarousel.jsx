import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import './CardCarousel.css'

function CardCarousel({ cards }) {
	const total = cards.length
	const cloned = [...cards, ...cards, ...cards]

	const [cardWidth, setCardWidth] = useState(50)
	const viewportRef = useRef(null)

	useLayoutEffect(() => {
		function measure() {
			const viewport = viewportRef.current
			if (!viewport) return
			const slide = viewport.querySelector('.hc-slide')
			if (!viewport.offsetWidth || !slide) return
			setCardWidth((slide.offsetWidth / viewport.offsetWidth) * 100)
		}
		measure()
		window.addEventListener('resize', measure)
		return () => window.removeEventListener('resize', measure)
	}, [])

	const [offset, setOffset] = useState(total)
	const [transitioning, setTransitioning] = useState(true)
	const isAnimating = useRef(false)
	const dragStartX = useRef(0)
	const dragDelta = useRef(0)
	const [dragOffset, setDragOffset] = useState(0)
	const [dragging, setDragging] = useState(false)

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
		-(offset * cardWidth) +
		(dragging ? (dragOffset / (viewportRef.current?.offsetWidth || 1)) * 100 : 0)

	const activeDot = ((offset - total) % total + total) % total

	return (
		<div className="hc-root">
			<button className="hc-arrow" onClick={() => slide('left')} aria-label="Previous">
				&#8249;
			</button>

			<div
				className="hc-viewport"
				ref={viewportRef}
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
						return (
							<div key={i} className="hc-slide">
								<div className="hc-card-wrap">
									<div className="hc-card">
										{/* top row: category left, name right */}
										<div className="hc-card-top">
											<span className="hc-category">{card.category}</span>
											<h3 className="hc-name">{card.name}</h3>
											

											<h4 className='hc-desc'>{card.psNumber}</h4>
										</div>
										{/* guy: absolutely pinned bottom-left */}
										<div className="hc-art">
											<img
												src="./Vector.svg"
												alt=""
												aria-hidden="true"
												className="hc-guy"
												draggable={false}
											/>
										</div>

										{/* bottom-right: button only */}
										<div className="hc-card-bottom">
											<a
												href={card.pdf}
												target="_blank"
												rel="noreferrer"
												className="hc-btn"
												onPointerDown={e => e.stopPropagation()}  // ← add this
												onClick={e => e.stopPropagation()}
												>
												View PDF ›
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