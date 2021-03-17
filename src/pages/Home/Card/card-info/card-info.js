import React from 'react'
import ChartImg from 'assets/chart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import './card-info.css'

export const CardInfo = () => {
	return (
		<div className='card-info'>
			<InfoChart />
			<InfoToken />
			<InfoLiquidity />
		</div>
	)
}

const InfoChart = () => {
	return (
		<div className='card card-value info-chart'>
			<span className='title-primary'>BBOO Price Chart</span>
			<img className='illustrate' src={ChartImg} alt='Illustrate' />
			<div className='footer-card'>
				<div className='btn-primary'>
					<a href={() => false}>Details</a>
				</div>
				<span>Holders: 1234</span>
			</div>
		</div>
	)
}
const InfoToken = () => {
	return (
		<div className='card card-value info-token'>
			<div className='card-heading'>
				<span className='title-primary'>ARI Token Information</span>
				<span className='title-secondary'>Trade ARI Token Pancake Swap</span>
			</div>
			<span className='price'>$357.223</span>
			<div className='footer-card'>
				<div className='btn-primary'>
					<FontAwesomeIcon className='icon' icon={faExchangeAlt} />
					<a href={() => false}>Swap</a>
				</div>
				<div className='info-detail'>
					<div className='left-txt'>
						<span className='label'>Marketcap</span>
						<span>200,000$</span>
					</div>
					<div className='right-txt'>
						<span className='label'>Total Supply</span>
						<span>990,000 ARI</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export const InfoLiquidity = () => {
	return (
		<div className='card card-value info-liquidity info-token'>
			<span className='title-primary'>Liquidity Locked</span>
			<div className='percent-chart'>
				<div className='bg-st'>85%</div>
			</div>
			<div className='footer-card'>
				<div className='info-detail'>
					<div className='left-txt'>
						<span className='label'>Marketcap</span>
						<span>200,000$</span>
					</div>
					<div className='right-txt'>
						<span className='label'>Total Supply</span>
						<span>990,000 ARI</span>
					</div>
				</div>
			</div>
		</div>
	)
}
