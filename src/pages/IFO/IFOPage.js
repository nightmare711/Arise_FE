import React from 'react'
import { CardImg } from './CardImg/CardImg'
import { listIFO } from 'constants/ifo'
import { CardCopyRight } from 'pages/Home/Card'
import './IFOPage.css'

export const IFOPage = () => {
	return (
		<div className='ifo-page'>
			<div className='container-w-min-w'>
				{listIFO.map((ifo, index) => (
					<CardImg key={index} id={index} src={ifo.image} href={ifo.href} />
				))}
			</div>
			<CardCopyRight />
		</div>
	)
}
