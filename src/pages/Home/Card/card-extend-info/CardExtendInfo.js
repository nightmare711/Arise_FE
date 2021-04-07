import React from 'react'
import BG_1 from 'assets/1.png'
import BG_2 from 'assets/2.png'
import BG_3 from 'assets/3.png'
import BG_4 from 'assets/4.png'
import BG_5 from 'assets/5.png'
import BG_6 from 'assets/6.png'
import BG_7 from 'assets/7.png'
import './CardExtendInfo.css'

export const CardExtendInfo = () => {
	return (
		<div className='card-extend-info'>
			<CardContent
				background='bg-1'
				image={BG_1}
				title='DEFI YIELD AGGREGATOR
				AND ENHANCE FARMING'
				content='Farm at the best rate, Arise protocol help farmers find the best yield farm to earn more rewards, and earn more if they’re holding ARI Token'
			/>
			<CardContent
				image={BG_2}
				background='bg-2'
				title='DEX AGGREGATOR'
				content="ARI's upcoming DEX Swap will offer the best rates by discovering the most efficient swapping routes across all leading DEXes"
			/>
			<CardContent
				image={BG_3}
				background='bg-3'
				title='2% ARI VOLUME OF EVERY TRANSACTION WILL BE BURNT FOREVER. $ARI TOKEN IS DEFLATIONARY THROUGH BUY BACK & BURN.'
				content='2% ARI volume of every transaction will be burn forever. Once ARI DEX is launched, Arise Finance core team will buy back & burn more ARI token using the trading fee.'
			/>
			<CardContent
				image={BG_4}
				background='bg-4'
				title='RETIREMENT VAULTS & TREASURY'
				content='When users unstake earlier from ARI farm. 5% penalty fee will be used to market buy Bitcoin (BTC) to provide funds for the Retirement funds, and 5% will be sent to the ARI Treasury for prolonged emissions for the vaults and for future development.

				ARI holders will be able to stake their ARI tokens and redeem a portion of the BTC Retirement Fund on a weekly basis.'
			/>
			<CardContent
				image={BG_5}
				background='bg-5'
				title='TRADING TOOLS FOR NEWBIE AND EXPERT'
				content='With Chart analysis feature for every token on BSC, Whale trackers and telegram bot will keep new listings under your radar (Only available for those who hold at least 20,000 ARI tokens).'
			/>
			<CardContent
				image={BG_6}
				background='bg-6'
				title='INSTANT YIELD GENERATION'
				content='Arise protocol will instantly split the 2% of transaction value among all the happy ARI holders without staking or waiting for distributing. Your assets will grow by themselves.'
			/>
			<CardContent
				image={BG_7}
				background='bg-7'
				title='NFT & GAMING DEVELOPMENT'
				content='New game & NFT mining to expand the protocol wider on Binance Smart Chain. You can Stake ARI, farm token or play game to open exclusive NFTs on our platform.'
			/>
			<CardContent
				image={BG_2}
				background='bg-8'
				title='COMBINE IDO & IFO ON ARISE PLATFORM'
				content='Gain priority-access to early stage startups. By staking $ARI, you get guaranteed access. The more $ARI you stake, the larger allocation you receive.'
			/>
			<CardContent
				image={BG_1}
				background='bg-9'
				title='TO SOCIETY WE DONATE!'
				content='Thanks to ARI’s partnership with The Giving Block, you can donate bitcoin and other cryptocurrencies to a non-profit organization to help the people in need.'
			/>
		</div>
	)
}
const CardContent = ({ title, content, background, image }) => {
	return (
		<div className={`card-grid card-extend card-instant ${background}`}>
			<img src={image} alt='bg' />
			<span className='title-info'>{title}</span>
			<span className='content'>{content}</span>
			<div className='question'>?</div>
		</div>
	)
}
