import React from 'react'
// import ChartImg from 'assets/chart.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { useTotalSupply } from 'queries/useTokenBalance'
import LogoImg from 'assets/logo.png'
import { Link } from 'react-router-dom'
import { usePrice } from 'queries/usePrice'
import AuditImg from 'assets/Audit.png'
import CountUp from 'react-countup'
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
			<div className='container-img'>
				<img src={AuditImg} alt='Audit Secure' />
				<img className='logo' src={LogoImg} alt='logo' />
			</div>
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
				$
				{data ? (
					<CountUp decimals={4} duration={3} start={0} end={parseFloat(data.result[0].price)} />
				) : (
					'--'
				)}
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
							${' '}
							{data ? (
								<CountUp
									separator=','
									decimals={0}
									duration={3}
									start={0}
									end={
										(totalSupply.toNumber() * Math.pow(10, -9) - 94842656) *
										parseFloat(data.result[0].price)
									}
								/>
							) : (
								'--'
							)}
						</span>
					</div>
					<div className='right-txt'>
						<span className='label'>Circulating Supply</span>
						{totalSupply && data ? (
							<span>
								{
									<CountUp
										separator=','
										decimals={0}
										duration={3}
										start={0}
										end={totalSupply.toNumber() * Math.pow(10, -9) - 94842656}
									/>
								}{' '}
								ARI
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
				<div className='bg-st'>95%</div>
			</div>
			<div className='footer-card'>
				<div className='info-detail'>
					<div className='right-txt'>
						<span className='label'>Token Lock</span>
						<span>95% total supply</span>
					</div>
				</div>
			</div>
		</div>
	)
}
