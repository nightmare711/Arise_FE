import React from 'react'
// import ChartImg from 'assets/chart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { useTotalSupply } from 'queries/useTokenBalance'
import { Link } from 'react-router-dom'
import { usePrice } from 'queries/usePrice'
import AuditImg from 'assets/Audit.png'
import './card-info.css'

export const CardInfo = () => {
	return (
		<div className='card-info'>
			<InfoToken />
			<InfoLiquidity />
			<InfoAudit />
		</div>
	)
}

const InfoAudit = () => {
	return (
		<div className='card-grid card-value info-chart'>
			<span className='title-primary'>Security Audit</span>
			<img src={AuditImg} alt='Audit Secure' />
			<span className='txt-frame'>No external threat on smart contract</span>
			<div className='btn-secondary'>
				<Link to='/audit-reports'>View more</Link>
			</div>
		</div>
	)
}
const InfoToken = () => {
	const totalSupply = useTotalSupply()
	const { data } = usePrice()
	return (
		<div className='card-grid card-value info-token'>
			<div className='card-heading'>
				<span className='title-primary'>ARI Token Information</span>
				<span className='title-secondary'>Trade ARI Token on Pancake Swap</span>
			</div>
			<span className='price'>
				${data && totalSupply ? parseFloat(data.result[0].price).toFixed(4) : '--'}
			</span>
			<div className='footer-card'>
				<div
					onClick={() =>
						window.open(
							'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0xcb77d84066f6192ab79bbc6d6450ddbe72661d7c',
							'_blank'
						)
					}
					className='btn-secondary'
				>
					<FontAwesomeIcon className='icon' icon={faExchangeAlt} />
					<a href={() => false}>Swap</a>
				</div>
				<div className='info-detail'>
					<div className='left-txt'>
						<span className='label'>Marketcap</span>
						<span>
							{data
								? (parseFloat(data.result[0].price) * totalSupply)
										.toLocaleString(undefined, {
											maximumFractionDigits: 2,
										})
										.toString()
										.substr(0, 5)
								: '--'}{' '}
							mil $
						</span>
					</div>
					<div className='right-txt'>
						<span className='label'>Total Supply</span>
						{totalSupply ? (
							<span>
								{parseInt(totalSupply)
									.toLocaleString(undefined, { maximumFractionDigits: 2 })
									.toString()
									.substr(0, 4)}{' '}
								mil ARI
							</span>
						) : (
							<span>--</span>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export const InfoLiquidity = () => {
	return (
		<div className='card-grid card-value info-liquidity info-token'>
			<span className='title-primary'>Liquidity Locked</span>
			<div className='percent-chart'>
				<div className='bg-st'>81%</div>
			</div>
			<div className='footer-card'>
				<div className='info-detail'>
					<div className='right-txt'>
						<span className='label'>Token Lock</span>
						<span>81% total supply</span>
					</div>
				</div>
			</div>
		</div>
	)
}
