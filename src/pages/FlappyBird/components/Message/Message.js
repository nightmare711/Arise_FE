import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { onRebuy } from 'queries/useGamer'
import './Message.css'
export const MessageBuy = ({ onClose, requestSend, setIsLoading, quantity, setQuantity }) => {
	return (
		<div className='connect-wallet message-game'>
			<div onClick={() => onClose()} className='overlay'></div>
			<div className='content-container'>
				<div className='header-primary'>
					Enter Buy Amount
					<FontAwesomeIcon className='icon' onClick={() => onClose()} icon={faTimes} />
				</div>
				<div className='content'>
					<div className='message'>
						<input
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							type='number'
							className='quantity-turns-bird'
							min={1}
							max={10}
							step={1}
							pattern='\d*'
						/>{' '}
						turns = {quantity} ARI
					</div>
					<div className='btn-container'>
						<div onClick={onClose} className='btn-secondary btn-cancel'>
							Cancel
						</div>
						<div
							onClick={() => {
								if (quantity % 1 === 0 && quantity > 0) {
									requestSend(quantity || 1)
									onClose()
									setIsLoading(true)
								} else {
									document.querySelector('.quantity-turns-bird').style.borderBottom =
										'1px solid red'
								}
							}}
							className='btn-secondary re-ex'
						>
							Confirm
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const Message = ({ onClose }) => {
	return (
		<div className='connect-wallet message-game'>
			<div onClick={() => onClose()} className='overlay'></div>
			<div className='content-container'>
				<div className='header-primary'>
					Buy turn failed
					<FontAwesomeIcon className='icon' onClick={() => onClose()} icon={faTimes} />
				</div>
				<div className='content'>
					<div className='message'>Buy turn request failed. Try again.</div>
					<div className='btn-container'>
						<div onClick={onClose} className='btn-secondary btn-cancel'>
							Cancel
						</div>
						<div
							onClick={() => {
								onRebuy()
								onClose()
							}}
							className='btn-secondary re-ex'
						>
							Re-Buy
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export const MessageReceived = ({ onClose, quantity }) => {
	return (
		<div className='connect-wallet message-game'>
			<div onClick={() => onClose()} className='overlay'></div>
			<div className='content-container'>
				<div className='header-primary'>
					Success
					<FontAwesomeIcon className='icon' onClick={() => onClose()} icon={faTimes} />
				</div>
				<div className='content'>
					<div className='message'>You have received {quantity} play turns. Enjoy the ride!</div>
					<div className='btn-container'>
						<div
							onClick={() => {
								onClose()
							}}
							className='btn-secondary re-ex'
						>
							Okay
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const MessageEnough = ({ onClose }) => {
	return (
		<div className='connect-wallet message-game'>
			<div onClick={onClose} className='overlay'></div>
			<div className='content-container'>
				<div className='header-primary'>
					Not enough play turn
					<FontAwesomeIcon onClick={onClose} className='icon' icon={faTimes} />
				</div>
				<div className='content'>
					<div className='message'>You are out of play turn. Buy more play turns to continue! </div>
					<div className='btn-container'>
						<div onClick={onClose} className='btn-secondary btn-cancel'>
							Cancel
						</div>
						<div
							onClick={() => {
								onRebuy()
								onClose()
							}}
							className='btn-secondary re-ex'
						>
							Buy more
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
