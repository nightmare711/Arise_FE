import React from 'react'
import { CardValue } from './Card/CardValue/CardValue'
import { listBeat, listUnicorn } from 'constants/NFTs'
import { CardCopyRight } from 'pages/Home/Card'
import { CardText } from './Card/CardText/CardText'
import './Collection.css'

export const Collection = () => {
	return (
		<div className='news-page collection'>
			<div className='container-w-min-w'>
				<div className='card-header-new card card-header-col'>
					<h1 className='heading-primary'>ARISE NFTs</h1>
					<span className='heading-tertiary'>
						At every milestone, we release a new NFTs collection to benchmark the growth of ARISE
						FINANCE
					</span>
				</div>
				<div className='txt-public-sale'>Arise Unicorn - Private Sale Launched</div>
				<div className='container-news container-collection'>
					{listUnicorn.map((item, index) => (
						<CardValue
							key={index}
							title={item.title}
							image={item.image}
							scarcity={item.scarcity}
							video={item.video}
						/>
					))}
				</div>
				<div className='txt-public-sale'>Arise Beat - Public Sale Launched</div>
				<div className='container-news container-collection'>
					{listBeat.map((item, index) => (
						<CardValue
							key={index}
							title={item.title}
							image={item.image}
							scarcity={item.scarcity}
							video={item.video}
						/>
					))}
				</div>
				<CardText />
			</div>
			<CardCopyRight />
		</div>
	)
}
