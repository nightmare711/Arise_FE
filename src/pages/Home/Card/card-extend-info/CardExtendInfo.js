import React from 'react'
import './CardExtendInfo.css'

export const CardExtendInfo = () => {
	return (
		<div className='card-extend-info'>
			<CardContent
				title='DEFI YIELD AGGREGATOR
				AND ENHANCE FARMING'
				content='Farm at the best rate, Arise protocol help farmers find the best yield farm to earn more rewards, and earn more if they’re holding ARI Token'
			/>
			<CardContent
				title='DEX AGGREGATOR'
				content="ARI's upcoming DEX Swap will offer the best rates by discovering the most efficient swapping routes across all leading DEXes"
			/>
			<CardContent
				title='LIQUIDITY AUTO-LOCK FOREVER, DEFLATIONARY THROUGH BUY BACK & BURN'
				content='2% fee of every ARI transaction will be added to liquidity and locked there forever. Once ARI DEX is launched, core team will buy back & burn ARI token using the trading fee.'
			/>
			<CardContent
				title='RETIREMENT VAULTS & TREASURY'
				content='When users unstake earlier from ARI farm. 5% penalty fee will be used to market buy Bitcoin (BTC) to provide funds for the Retirement funds, and 5% will be sent to the ARI Treasury for prolonged emissions for the vaults and for future development.

				ARI holders will be able to stake their ARI tokens and redeem a portion of the BTC Retirement Fund on a weekly basis.'
			/>
			<CardContent
				title='TRADING TOOLS FOR NEWBIE AND EXPERT'
				content='With Chart analysis feature for every token on BSC, Whale trackers and telegram bot will keep new listings under your radar (Only available for those who hold at least 20,000 ARI tokens).'
			/>
			<CardContent
				title='INSTANT YIELD GENERATION'
				content='Arise protocol will instantly split the 2% of transaction value among all the happy ARI holders without staking or waiting for distributing. Your assets will grow by themselves.'
			/>
			<CardContent
				title='NFT & GAMING DEVELOPMENT'
				content='New game & NFT mining to expand the protocol wider on Binance Smart Chain. You can Stake ARI, farm token or play game to open exclusive NFTs on our platform.'
			/>
			<CardContent
				title='COMBINE IDO & IFO ON ARISE PLATFORM'
				content='Gain priority-access to early stage startups. By staking $ARI, you get guaranteed access. The more $ARI you stake, the larger allocation you receive.'
			/>
			<CardContent
				title='TO SOCIETY WE DONATE!'
				content='Thanks to ARI’s partnership with The Giving Block, you can donate bitcoin and other cryptocurrencies to a non-profit organization to help the people in need.'
			/>
		</div>
	)
}
const CardContent = ({ title, content }) => {
	return (
		<div className='card-grid card-extend card-instant'>
			<span className='title-info'>{title}</span>
			<span className='content'>{content}</span>
			<div className='question'>?</div>
		</div>
	)
}
