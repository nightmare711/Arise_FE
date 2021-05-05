import React from 'react'
import { CardCopyRight } from 'pages/Home/Card'
import { CardText } from './Card/CardText/CardText'
import AriseUnicorn from 'assets/NFTs/AriseUnicorn/ARISE UNICORN.mp4'
import AriseBeat from 'assets/NFTs/AriseBeat/ARISE BEAT.mp4'
import ArisePhoenix from 'assets/NFTs/ArisePhoenix/ARISE PHOENIX.mp4'
import { CardVideo } from 'pages/Home/Card'
import './Card/CardValue/CardValue.css'
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
				<CardVideo video={AriseUnicorn} />

				<div className='txt-public-sale'>Arise Beat - Public Sale Launched</div>
				<CardVideo video={AriseBeat} />
				<div className='txt-public-sale'>Arise Phoenix - Arise from the ashes</div>
				<CardVideo video={ArisePhoenix} />
				<CardText />
			</div>
			<CardCopyRight />
		</div>
	)
}
