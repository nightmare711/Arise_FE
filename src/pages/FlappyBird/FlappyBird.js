import React from 'react'
import { useRequestSend } from 'queries/useRequest'

export const FlappyBird = () => {
	const requestSend = useRequestSend()
	return (
		<div>
			<button onClick={requestSend}>Click</button>
			{/* <iframe
				name='asdsadas'
				style={{ width: '100%', height: '600px' }}
				src='http://0.0.0.0:8001/'
			></iframe> */}
		</div>
	)
}
