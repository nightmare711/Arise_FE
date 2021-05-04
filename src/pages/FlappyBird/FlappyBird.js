import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import PrizesIcon from 'assets/ari-bird/PrizeIcon.jpg'
import LogoImg from 'assets/logo.png'
import BgText from 'assets/bg-text.png'
import RankImg from 'assets/rank-img.png'
import './FlappyBird.css'
const tempData = [
	{
		address: '0x310377bD2ecD9a800fAEd591E666F9f07382d41d',
		highest_score: 200,
	},
	{
		address: '0x310377bD2ecD9a800fAEd591E666F9f07382d41d',
		highest_score: 200,
	},
	{
		address: '0x310377bD2ecD9a800fAEd591E666F9f07382d41d',
		highest_score: 200,
	},
	{
		address: '0x310377bD2ecD9a800fAEd591E666F9f07382d41d',
		highest_score: 200,
	},
	{
		address: '0x310377bD2ecD9a800fAEd591E666F9f07382d41d',
		highest_score: 200,
	},
]

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
			<div className='box box-2'>
				<div className='account-score'>
					<div className='container-logo'>
						<FontAwesomeIcon icon={faPagelines} className='icon icon-left' />
						<div className='container-img'>
							<img src={LogoImg} alt='logo' />
						</div>
						<FontAwesomeIcon icon={faPagelines} className='icon icon-right' />
					</div>
					<div className='score'>
						<div className='bg-with-text'>
							<img src={BgText} alt='Background text' />
							<span className='txt'>Your Score</span>
						</div>
					</div>
				</div>
				<div className='header-below'>
					<div className='bg-with-text'>
						<img src={BgText} alt='Background text' />
						<span className='txt'>Team rank</span>
					</div>
				</div>
			</div>
			<div className='box box-3'>
				<div className='box-3-content'>
					<div className='rank-score'>
						<img src={RankImg} alt='rank' />
						<div className='score'>
							<span className='value'>
								<b>$373,685,905</b> <br /> Score
							</span>
							<span className='value'>
								<b>$373,685,905</b> <br /> Score
							</span>
							<span className='value'>
								<b>$373,685,905</b> <br /> Score
							</span>
						</div>
					</div>
					<div className='table-score'>
						<div className='table-header'>
							<h1>Top Score</h1>
							<span className='extra'>Since start of competition</span>
						</div>
						<table>
							{/* <thead>
								<tr></tr>
								<tr></tr>
								<tr></tr>
								<tr></tr>
							</thead> */}
							<tbody>
								{tempData.map((item, index) => (
									<tr>
										<td className='rank'>
											{'#'}
											{index}
										</td>
										<td className='score-value'>{item.highest_score}</td>
										<td className='address'>
											{item.address.substr(0, 4) +
												'...' +
												item.address.substr(item.address.length - 4, item.address.length)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className='header-below'>
					<img src={PrizesIcon} alt='Prizes Icon' />
					<div className='bg-with-text'>
						<img src={BgText} alt='Background text' />
						<span className='txt'>Team rank</span>
					</div>
				</div>
			</div>
			<div className='box box-4'>
				
			</div>
		</div>
	)
}
