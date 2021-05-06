import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { onRebuy } from 'queries/useGamer'
import './Message.css'

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
