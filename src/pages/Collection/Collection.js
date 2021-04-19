import React from 'react'
import { CardValue } from './Card/CardValue/CardValue'
import { listCollection } from 'constants/NFTs'
import { CardCopyRight } from 'pages/Home/Card'
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
					<span className='txt-public-sale'>Arise Beat - Public Sale Launched</span>
					<span className='txt-public-sale'>Arise Unicorn - Private Sale Launched</span>
				</div>
				<div className='container-news container-collection'>
					{listCollection.map((item, index) => (
						<CardValue
							key={index}
							title={item.title}
							image={item.image}
							scarcity={item.scarcity}
							video={item.video}
						/>
					))}
				</div>
			</div>
			<CardCopyRight />
		</div>
	)
}
