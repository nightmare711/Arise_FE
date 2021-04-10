import React from 'react'
import { listTokenDetail } from 'constants/list-sidebar'
import './CardChart.css'

export const CardChart = () => {
	return (
		<div className='card card-chart'>
			<div className='chart-container'>
				<div className='pie-chart'>
					<div className='overlay-percent'>
						<span className='percent percent-1'>40%</span>
						<span className='percent percent-2'>25%</span>
						<span className='percent percent-3'>10%</span>
						<span className='percent percent-4'>5%</span>
						<span className='percent percent-5'>7.5%</span>
						<span className='percent percent-6'>12.5%</span>
					</div>
					<div className='total'>
						<b>Total supply:</b> <span>100,000,000</span>
					</div>
				</div>
				<div className='left-txt'>
					<div className='title-primary'>TOKEN ALLOCATION CHART</div>
					<ul className='list-detail'>
						{listTokenDetail.map((item, index) => (
							<li key={index} className='item'>
								<div className='color' style={{ backgroundColor: item.color }}></div>
								<span className='detail'>{item.title}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='txt-info'>
				<span>
					Presale price: 1 BNB - 16,000 ARI <br /> Listing price: 1 BNB - 12,000 <br /> ARI
					Deflationary with buyback & burn, <br /> Liquidity auto-lock forever mechanisim, automatic
					yield farming <br /> Tx fee: 4% (2% auto-lock forever to liquidity, 2% distributed for
					holders)
					<br />
					<a
						style={{ color: '#1DCF00', textDecoration: 'underline' }}
						href='https://bscscan.com/token/0xa861f33d8ac80b64c1b8c7b4c99599474b79888a?fbclid=IwAR0JacCtU7et-qffjoPgPEgvjq6WAJjUwWSKXLH53ShD480RJEdGtoDwAEw#balances'
						target='_blank'
						rel='noreferrer'
					>
						View token contract on BSCSCAN
					</a>
				</span>
			</div>
		</div>
	)
}
