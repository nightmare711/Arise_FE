import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import './FlappyBird.css'

export const FlappyBird = () => {
	return (
		<div className=' flappy-bird card'>
			<div className='box box-1'>
				<div className='box-content'>
					<div className='txt-frame'>
						<span className='date'>{new Date().toISOString()}</span>
						<span className='title-name'>Easter Battle</span>
						<span className='title-secondary'>$200,000 in Prizes!</span>
						<span className='title-tertiary'>
							Compete with other teams to win CAKE, collectible NFTs, achievements & more!
						</span>
					</div>

					<div className='time-frame'>
						<FontAwesomeIcon icon={faStopwatch} className='icon title-secondary' />
						<span className='title-secondary time-lock'>Finished</span>
						<div className='road-container'>
							<div className='item item1 active'>
								<FontAwesomeIcon icon={faCheckCircle} className='icon-tick' />
								<span className='title-extra'>Entry</span>
							</div>
							<div className='item item2'>
								<FontAwesomeIcon icon={faCheckCircle} className='icon-tick' />
								<span className='title-extra'>Live</span>
							</div>
							<div className='item item3'>
								<FontAwesomeIcon icon={faCheckCircle} className='icon-tick' />
								<span className='title-extra'>End</span>
							</div>
						</div>
					</div>
				</div>
				<div className='container-btn'>
					<FontAwesomeIcon icon={faPagelines} className='icon icon-left' />
					<div className='btn-primary'>Unlock Wallet</div>
					<FontAwesomeIcon icon={faPagelines} className='icon icon-right' />
				</div>
			</div>
			<div className='box box-2'>{/* <img src={} /> */}</div>
		</div>
	)
}
