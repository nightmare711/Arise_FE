import React from 'react'
import './CardExtendInfo.css'

export const CardExtendInfo = () => {
	return (
		<div className='card-extend-info'>
			<CardContent
				title='INSTANT YIELD GENERATION'
				content='Arise protocol will instantly split the 2% of transaction value among all the happy holders
				of the token without staking or waiting for distributing. Assets will earn for you while
				they are at rest. Airdrop weekly program for our diamond hand users.'
			/>
			<CardContent
				title='DEFI YIELD AGGREGATOR AND ENHANCE FARMING'
				content='Farm at the best rate, with 100% of the tx fees generated go to happy holders of the token.'
			/>
			<CardContent
				title='LIQUIDITY AUTO-LOCK
                FOREVER, DEFLATIONARY
                THROUGH BUY BACK & BURN'
				content='2% fee of every ARI transaction will be added to liquidity and sent to hell, locked there forever.'
			/>
			<CardContent
				title='NFT & GAMING DEVELOPMENT'
				content='New game & NFT mining to expand the protocol wider on Binance Smart ChainYou can Stake ARI, farm token or play game to open exclusive NFTs on our platfor.'
			/>
			<CardContent
				title='TRADING TOOLS FOR NEWBIE
                AND EXPERT'
				content='With Chart analysis feature for every token on BSC, Whale trackers and telegram bot will keep new listings under your radar (Only available for those who hold at least 2,000 ARI tokens).'
			/>
			<CardContent
				title='COMBINE IDO & IFO ON ARISE PLATFORM'
				content='Gain priority-access to early stage startups. By staking $ARI, you get guaranteed access. The more $ARI you stake, the larger allocation you receive.'
			/>
		</div>
	)
}
const CardContent = ({ title, content }) => {
	return (
		<div className='card card-extend card-instant'>
			<span className='title-info'>{title}</span>
			<span className='content'>{content}</span>
			<div className='question'>?</div>
		</div>
	)
}
