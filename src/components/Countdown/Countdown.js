/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import React from 'react'
import './Countdown.css'

export const Countdown = () => {
	const onHandleCountdown = () => {
		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24

		let birthday = 1618057929006,
			countDown = new Date(birthday).getTime(),
			x = setInterval(function () {
				let now = new Date().getTime(),
					distance = countDown - now

				;(document.getElementById('days').innerText = Math.floor(distance / day)),
					(document.getElementById('hours').innerText = Math.floor((distance % day) / hour)),
					(document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute)),
					(document.getElementById('seconds').innerText = Math.floor((distance % minute) / second))

				//do something later when date is reached
				if (distance < 0) {
					alert('We start sale now')

					clearInterval(x)
				}
				//seconds
			}, 0)
	}
	React.useEffect(() => {
		onHandleCountdown()
	}, [])
	return (
		<div id='countdown' className='countdown'>
			<ul className='list-item'>
				<li>
					<span className='item' id='days'></span>
					<span className='label'>Days</span>
				</li>
				<li>
					<span className='item' id='hours'></span>
					<span className='label'>Hours</span>
				</li>
				<li>
					<span className='item' id='minutes'></span>
					<span className='label'>Minutes</span>
				</li>
				<li>
					<span className='item' id='seconds'></span>
					<span className='label'>Seconds</span>
				</li>
			</ul>
		</div>
	)
}
