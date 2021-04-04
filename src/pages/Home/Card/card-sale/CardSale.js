import React from 'react'
import WaterMark from 'assets/hourglass.png'
import { Countdown } from 'components'
import './CardSale.css'

export const CardSale = () => {
	return (
		<div className='card card-sale'>
			<div className='watermark watermark-top'>
				<img src={WaterMark} className='watermark-img' alt={WaterMark} />
				<div className='point point-1' />
				<div className='point point-2' />
				<div className='point point-3' />
			</div>
			<div className='watermark watermark-bottom'>
				<img src={WaterMark} className='watermark-img' alt={WaterMark} />
				<div className='point point-1' />
				<div className='point point-2' />
				<div className='point point-3' />
			</div>
			<div className='content'>
				<span className='title-primary'>PRE-SALE COMING IN</span>
				<Countdown />
				<div className='flex flex-row container-cap'>
					<div className='cap'>
						<div className='cap-item soft-cap'>
							<span className='head'>Soft Cap</span>
							<span className='content'>1,500 BNB</span>
						</div>
						<div className='cap-item hard-cap'>
							<span className='head'>Hard Cap</span>
							<span className='content'>2,500 BNB</span>
						</div>
					</div>
					<div className='cap'>
						<div className='cap-item soft-cap'>
							<span className='head'>PreSale price</span>
							<span className='content'>1 BNB = 16,000 ARI</span>
						</div>
						<div className='cap-item hard-cap'>
							<span className='head'>Listing price</span>
							<span className='content'>1 BNB = 12,000 ARI</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
