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
		let saleDay = 1620525283808 - 3600000 * 2 + 60000 * 5 + 6000 * 3 - 2000 + 86400000,
			countDown = new Date(saleDay).getTime(),
			x = setInterval(function () {
				let now = new Date().getTime()
				let distance = countDown - now
				const domDay = document.getElementById('days')
				if (domDay) {
					document.getElementById('days').innerText = Math.floor(distance / day)
					document.getElementById('hours').innerText = Math.floor((distance % day) / hour)
					document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute)
					document.getElementById('seconds').innerText = Math.floor((distance % minute) / second)
				}

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
