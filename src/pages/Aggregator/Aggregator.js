import React from 'react'
import { InputGroup, ListGroup, Message } from './component'
import { CardCopyRight } from 'pages/Home/Card'
import './Aggregator.css'

export const Aggregator = () => {
	const [isLoading, setIsLoading] = React.useState(false)
	if (window.screen.width > 700) {
		return (
			<>
				<div className='aggregator'>
					<InputGroup setIsLoading={setIsLoading} />
					<ListGroup isLoading={isLoading} />
				</div>
				<CardCopyRight />
			</>
		)
	}
	return (
		<>
			<Message />
		</>
	)
}
