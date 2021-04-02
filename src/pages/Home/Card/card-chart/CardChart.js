import React from 'react'
import { listTokenDetail } from 'constants/list-sidebar'
import './CardChart.css'

export const CardChart = () => {
	return (
		<div className='card card-chart'>
			<div className='chart-container'>
				<div className='pie-chart'>
					<div className='total'>
						<b>Total supply:</b> <span>3,000,000</span>
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
					Presale price: 1 BNB - 16,000 ARI <br /> Listing price: 1 BNB - 12,000 ARI <br />{' '}
					Deflationary with buyback & burn, <br />
					Liquidity auto-lock forever mechanisim, automatic yield farming <br /> Tx fee: 4% (2%
					auto-lock forever to liquidity, 2% distributed for holders)
				</span>
			</div>
		</div>
	)
}
